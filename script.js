// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ===== Terminal boot sequence =====
const typedEl = document.getElementById('typedCmd');
const cursorEl = document.getElementById('cursor');
const outputEl = document.getElementById('termOutput');
const command = './whoami --verbose';

const rows = [
  { k: 'name', v: 'Muntah Mahfuz Srestho' },
  { k: 'role', v: 'AI &amp; ML Developer', hl: true },
  { k: 'focus', v: 'Computer Vision · NLP · Agents' },
  { k: 'location', v: 'Dhaka, Bangladesh' },
  { k: 'status', v: 'open_to_internships', hl: true },
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeCommand() {
  if (prefersReducedMotion) {
    typedEl.textContent = command;
    renderOutput();
    return;
  }

  let i = 0;
  const interval = setInterval(() => {
    typedEl.textContent = command.slice(0, i + 1);
    i++;
    if (i === command.length) {
      clearInterval(interval);
      setTimeout(renderOutput, 300);
    }
  }, 45);
}

function renderOutput() {
  outputEl.innerHTML = '';
  rows.forEach((row, idx) => {
    const div = document.createElement('div');
    div.className = 'row';
    div.style.animationDelay = `${idx * 0.12}s`;
    div.innerHTML = `<span class="k">${row.k}</span><span class="v${row.hl ? ' hl' : ''}">${row.v}</span>`;
    outputEl.appendChild(div);
  });
}

// Kick off boot sequence once, on load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeCommand, 400);
});

// ===== Scroll reveal for project cards & sections =====
const revealTargets = document.querySelectorAll('.project-card, .stack-group, .timeline-item, .contact-card');

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach(el => observer.observe(el));
}

// ===== Active nav link highlighting on scroll =====
const sections = document.querySelectorAll('main .section, .hero');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    if (section.id) navObserver.observe(section);
  });
}
