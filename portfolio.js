(() => {
  const data = window.portfolioContent;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function renderSoftware() {
    const root = $('#software-grid');
    root.innerHTML = data.software.map(item => `
      <article class="work-card">
        <div class="card-index"><span>${item.index}</span><span class="status-chip status-live">${item.tag}</span></div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <button class="card-link text-button" type="button" data-open="software">Explore the format <span aria-hidden="true">→</span></button>
      </article>
    `).join('');
  }

  function renderEmbedded() {
    const root = $('#embedded-grid');
    root.innerHTML = data.embedded.map(item => `
      <article class="embedded-card">
        <div><span class="embedded-chip">${item.board} / PROTOTYPE SLOT</span><h3>${item.title}</h3><p>${item.description}</p></div>
        <button class="text-button" type="button" data-open="embedded">View entry structure <span aria-hidden="true">→</span></button>
      </article>
    `).join('');
  }

  function renderStudies() {
    const root = $('#study-grid');
    root.innerHTML = data.studies.map(item => `
      <article class="study-card"><span class="study-number">${item.number} / TRACK</span><h3>${item.title}</h3><p>${item.description}</p><span class="study-state">${item.state}</span></article>
    `).join('');
  }

  function renderUpdates() {
    const root = $('#updates-list');
    root.innerHTML = data.updates.map(item => `
      <article class="update-entry"><time class="update-date">${item.date}</time><div><h3>${item.title}</h3><p>${item.description}</p></div><span class="update-kind">${item.kind}</span></article>
    `).join('');
  }

  renderSoftware(); renderEmbedded(); renderStudies(); renderUpdates();

  const panels = $$('.panel');
  const track = $('.panel-track');
  const dots = $('#panel-dots');
  const prev = $('#prev-panel');
  const next = $('#next-panel');
  let activeIndex = 0;
  let pointerStartX = null;
  let pointerStartY = null;
  let scrollTimer;

  panels.forEach((panel, index) => {
    const dot = document.createElement('button');
    dot.type = 'button'; dot.className = 'panel-dot';
    dot.setAttribute('aria-label', `Go to ${panel.dataset.panelLabel}`);
    dot.addEventListener('click', () => goTo(index));
    dots.appendChild(dot);
  });

  function isMobileTrack() { return window.matchMedia('(max-width: 600px)').matches; }

  function goTo(index, focus = false) {
    activeIndex = Math.max(0, Math.min(index, panels.length - 1));
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    if (isMobileTrack()) {
      track.scrollTo({ left: activeIndex * track.clientWidth, top: 0, behavior });
    } else {
      panels[activeIndex].scrollIntoView({ behavior, block:'start', inline:'start' });
    }
    updateNavigation();
    if (focus) panels[activeIndex].focus({ preventScroll:true });
  }

  function updateNavigation() {
    $$('.panel-dot').forEach((dot, index) => dot.classList.toggle('active', index === activeIndex));
    $$('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.go === panels[activeIndex].id));
    const label = $('#progress-label');
    const fill = $('#progress-fill');
    label.textContent = `${String(activeIndex + 1).padStart(2,'0')} / ${String(panels.length).padStart(2,'0')} · ${panels[activeIndex].dataset.panelLabel}`;
    fill.style.width = `${((activeIndex + 1) / panels.length) * 100}%`;
    prev.disabled = activeIndex === 0; next.disabled = activeIndex === panels.length - 1;
    prev.style.opacity = prev.disabled ? '.35' : '1'; next.style.opacity = next.disabled ? '.35' : '1';
  }

  function closestPanelIndex() {
    if (isMobileTrack()) return Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    const midpoint = window.innerHeight / 2;
    let best = activeIndex; let distance = Infinity;
    panels.forEach((panel, index) => { const rect = panel.getBoundingClientRect(); const d = Math.abs((rect.top + rect.height / 2) - midpoint); if (d < distance) { distance = d; best = index; } });
    return best;
  }

  track.addEventListener('scroll', () => { clearTimeout(scrollTimer); scrollTimer = setTimeout(() => { activeIndex = closestPanelIndex(); updateNavigation(); }, 90); }, { passive:true });
  track.addEventListener('pointerdown', event => { pointerStartX = event.clientX; pointerStartY = event.clientY; track.setPointerCapture?.(event.pointerId); });
  track.addEventListener('pointerup', event => {
    if (pointerStartX === null) return;
    const dx = event.clientX - pointerStartX; const dy = event.clientY - pointerStartY;
    pointerStartX = null; pointerStartY = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.2) goTo(activeIndex + (dx < 0 ? 1 : -1));
  });
  track.addEventListener('pointercancel', () => { pointerStartX = null; pointerStartY = null; });

  $$('.nav-link,[data-go]').forEach(control => control.addEventListener('click', () => { const target = control.dataset.go; const index = panels.findIndex(panel => panel.id === target); if (index >= 0) goTo(index); }));
  prev.addEventListener('click', () => goTo(activeIndex - 1));
  next.addEventListener('click', () => goTo(activeIndex + 1));
  document.addEventListener('keydown', event => { if (event.key === 'ArrowRight') goTo(activeIndex + 1); if (event.key === 'ArrowLeft') goTo(activeIndex - 1); });

  const dialog = $('#detail-dialog');
  const dialogTitle = $('#dialog-title');
  const dialogBody = $('#dialog-body');
  const dialogKicker = $('#dialog-kicker');
  const dialogCopy = {
    software: { title:'Software entry structure', body:'<p>Each software project will have a clear problem, role, tools, outcome, evidence links, and lessons learned. Existing projects can be migrated into this pattern without changing the surrounding design.</p>' },
    repair: { title:'Repair entry structure', body:'<p>A repair entry will document the device, symptom, diagnosis, work performed, replacement or restoration, test result, and a captioned sequence of safe-to-publish images.</p>' },
    embedded: { title:'Embedded entry structure', body:'<p>Each embedded entry will capture the board or module, objective, physical components, program behavior, current state, evidence, constraints, and next experiment.</p>' },
    drone: { title:'Active build structure', body:'<p>The drone entry is designed around dated milestones: project goal, current stage, completed work, next step, known risks, and future test notes. Its status can change without redesigning the page.</p>' },
    adder: { title:'Simulation entry structure', body:'<p>The 8-bit adder entry will explain full-adder stages, carry propagation, representative inputs and outputs, simulation evidence, assumptions, and the lesson learned.</p>' },
    intake: { title:'Incremental content intake', body:'<p>For each real entry, provide a title, category, summary, detailed description, status, date, tools or components, result or current state, next step, links, media, captions, and alternative text. The same reusable pattern will then be populated one item at a time.</p>' }
  };
  function openDialog(key) { const copy = dialogCopy[key] || dialogCopy.intake; dialogKicker.textContent = key === 'intake' ? 'Content workflow' : 'Prototype structure'; dialogTitle.textContent = copy.title; dialogBody.innerHTML = copy.body; dialog.showModal(); }
  document.addEventListener('click', event => { const trigger = event.target.closest('[data-open]'); if (trigger) openDialog(trigger.dataset.open); });
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  updateNavigation();
})();
