# Coolio Portfolio Upgrade Plan — Revised Scope

## 1. Goal and outcome

Upgrade **Coolio-Portfolio**, currently an HTML/CSS/JavaScript portfolio hosted on Vercel at **srestho.online**, so it presents Srestho as both a software/ML/AI practitioner and a hands-on hardware and embedded-systems builder. The revised portfolio should communicate a coherent identity: someone who studies fundamentals, builds software, repairs and understands physical computing systems, and documents the process of learning through practical work.

The first implementation is a **data-ready prototype**, not a final content-completion exercise. It should establish the full visual structure, responsive behavior, mobile swipe interaction, reusable content patterns, and content-entry workflow. Srestho will provide real work data one item at a time later. No personal work, project result, or achievement should be invented to fill gaps.

All implementation work must be isolated from the existing production work on a separate Git branch named **`portfolio-v4`**. The existing branch must remain untouched until Srestho reviews the prototype and explicitly decides what to merge or deploy.

## 2. Scope boundaries

The prototype includes the existing software side plus new areas for laptop repair and hardware work, embedded systems, an active drone project, an 8-bit ripple-carry adder simulation, and self-study in differential calculus, linear algebra, statistics, and physics. It includes the reusable update structures required to add future work incrementally.

The **books and reading-journal section is excluded** from this version. Book covers, book reviews, currently studying books, and book-related content fields should not be included in the information architecture, prototype UI, sample data, or acceptance criteria. If a reading section is desired later, it should be scoped as a separate future change rather than quietly reintroduced.

The prototype should use clearly labeled placeholders, empty states, or neutral example structures where Srestho has not yet supplied data. These placeholders must never look like completed personal work or be mistaken for published portfolio evidence.

## 3. Product principles

The portfolio should prioritize evidence over broad claims. Each capability should eventually be represented through concrete work, photographs, diagrams, simulations, progress notes, or concise technical explanations. Hardware work should be presented with the same seriousness as software work, while unfinished work should be labeled honestly as active or in progress rather than presented as completed.

The visual hierarchy should make the site understandable within the first screen, while allowing visitors to explore depth without encountering a long undifferentiated wall of text. The experience should work for recruiters, internship reviewers, technical peers, and curious visitors. Desktop and mobile layouts should be intentionally designed rather than treated as scaled versions of one another.

## 4. Information architecture

The public site should remain centered on a strong home experience, with dedicated detail views or expandable panels where a topic needs more explanation. Navigation should provide a persistent way to move among the major areas and should never leave a visitor without an obvious route back to the main portfolio.

| Area | Purpose | Required prototype behavior |
|---|---|---|
| Landing / introduction | Establish identity and current direction | Name, concise software-plus-hardware positioning, primary exploration action, contact action, professional links |
| About / working approach | Explain how the interests connect | ML/AI engineering, software development, hardware repair, embedded systems, mathematical and scientific self-study |
| Software work | Preserve and strengthen the existing software portfolio | Reusable project cards and detail views for existing and future software projects |
| Hardware and repair | Demonstrate practical device-level skills | Laptop teardown, part replacement, thermal-paste work, diagnostics, before/after evidence pattern |
| Embedded systems | Show physical-computing work | ESP32 and ESP32-CAM entries, objectives, hardware, program behavior, status, evidence pattern |
| Drone project | Present the unfinished drone as an active build | Active status, milestone timeline, current stage, next step, risks, dated progress updates |
| Digital logic and fundamentals | Connect theory to implementation | 8-bit ripple-carry adder simulation explanation, evidence area, result, lesson learned |
| Learning path | Show disciplined self-study | Differential calculus, linear algebra, statistics, physics, current focus, milestones, next topics |
| Updates / activity | Make progress visible over time | Chronological or filterable updates for projects, repairs, experiments, and study milestones |
| Contact / links | Provide a clear professional next step | Email or contact route, GitHub, LinkedIn, availability or internship focus |

The final route structure may be a single long-form experience, several pages, or a hybrid arrangement. The implementation decision will be made after the existing repository and chosen development environment are inspected. The information architecture and content responsibilities above should remain stable.

## 5. Homepage narrative and section order

The first screen should communicate a concise software-and-hardware engineering identity without overstating experience. It should include a visible invitation to explore the work and a secondary invitation to contact Srestho. The hero should not rely on animation alone to communicate meaning, and all critical text must remain available to assistive technology and search engines.

The recommended narrative sequence is: introduction, selected software work, hardware and repair, embedded systems, active drone build, digital logic and fundamentals, learning path, recent updates, and contact. This begins with professional relevance, proves breadth through physical work and foundational study, and ends with a clear action.

Each major area should have a short summary on the homepage and a clear path to deeper content. Cards should expose the item type, status, title, one-sentence description, primary evidence, and next action. Hardware, software, experiments, and study topics should share a consistent visual language for cards, tags, statuses, and detail views.

## 6. Content model and update requirements

The site should use a structured content model independent of the eventual technology. Every published item should have a stable identifier, title, category, short summary, longer description, status, date information, media references, links, tags, and display priority. Fields should be optional when they are not relevant to a particular content type instead of forcing every entry into the same format.

| Content type | Core fields | Optional evidence and detail |
|---|---|---|
| Software project | Title, summary, problem, role, status, date, tools, outcome | Repository, live demo, screenshots, architecture diagram, lessons learned |
| Hardware repair | Device, issue, diagnosis, work performed, result, date, status | Teardown photos, replaced parts, thermal-paste notes, tools, safety notes, before/after images |
| Embedded project | Board or module, objective, current behavior, status, date | Wiring diagram, firmware link, photos, video, sensor readings, constraints, lessons learned |
| Drone project or milestone | Title, overall status, completed work, next step, date | Subsystem, risks, test notes, photographs, diagrams, milestone grouping |
| Simulation / fundamentals | Topic, question, implementation or simulation, result, explanation | Circuit image, waveform, source file, formula, assumptions, limitations |
| Study topic | Subject, current level or phase, objective, progress, last updated | Resources, notes, completed concepts, next concepts, related projects |
| General update | Title, summary, date, category, body, status | Media, related item, links, next action |

The content model should support ordering, draft/unpublished state, featured state, and archive state. It should also support a `lastUpdated` value separate from an original publication date. This is essential for the drone and other active work, where visitors need to distinguish the start of a project from its latest progress.

The update workflow is intentionally left open so Srestho can choose the eventual technology and authoring method later. The implementation must isolate content from presentation so that a private editor, structured content workflow, or another authoring process can be added without rebuilding the public layout. Whichever workflow is selected must provide validation, preview or local review, image association, draft handling, and a predictable publication process. Private editing controls and unpublished content must never be exposed publicly.

## 7. Hardware, embedded, and active-project requirements

The hardware section should demonstrate a repeatable repair process: inspect the symptom, diagnose the likely cause, disassemble carefully, replace or repair the relevant part, reassemble, test, and document the result. It should make clear which work is personally performed and should not imply professional certification unless Srestho provides that information.

A repair entry should support an ordered gallery showing the device before work, relevant internal components, the repair or replacement step, and the tested result. Images should include alternative text and captions. Serial numbers, personal files, credentials, and identifiable customer information must be removed or obscured before publication.

The embedded-systems area should give ESP32 and ESP32-CAM recognizable entries while allowing future boards or modules to be added through the same pattern. Each entry should explain the purpose of the build, physical components, program behavior, current state, and lesson learned. Diagrams must remain readable on a phone and must be accompanied by a text explanation.

The drone should receive an explicit **Active project / In progress** status. It should show a milestone timeline or progress log rather than a misleading completion percentage. The prototype should include a project goal, current build stage, completed-milestone area, immediate next steps, known-risk area, and dated-update pattern. The structure must allow the status to change to completed later without redesigning the content.

## 8. Digital logic and self-study requirements

The 8-bit ripple-carry adder simulation should be treated as a foundational project bridging mathematics, computer architecture, and practical experimentation. The presentation should explain input and output behavior, the role of each full-adder stage, carry propagation, the simulation environment or representation, and at least one representative test case. A waveform, circuit diagram, or truth-table excerpt should have a caption and accessible textual explanation when real evidence is supplied.

The learning section should represent differential calculus, linear algebra, statistics, and physics as an evolving study path rather than a completed academic credential. Each subject should support a current focus, recent milestone, next topic, and optional links to related projects. Wording must distinguish self-study from formal coursework and avoid unsupported claims of mastery.

## 9. Mobile interaction and responsive behavior

On mobile, the user should be able to move through the major portfolio sides or panels with a finger. This should be intentional horizontal navigation between defined panels or sections, not uncontrolled sideways overflow. The exact panel boundaries will be finalized during prototyping, but the interaction contract is fixed.

| Interaction | Required behavior |
|---|---|
| Finger swipe | A horizontal swipe advances or returns one logical panel after a clear threshold; short or mostly vertical gestures scroll normally |
| Touch targets | Navigation controls, cards, filters, and close buttons remain comfortably tappable and are not crowded |
| Position awareness | A visible indicator, label, or progress treatment shows the current location and remaining panels |
| Direct navigation | Visitors can tap navigation items or indicators to jump directly to a panel |
| Keyboard and assistive technology | Every swipe action has an equivalent button or semantic navigation path; focus order follows the visual order |
| Browser behavior | Accidental horizontal overflow, broken back navigation, and conflicts with browser edge-swipe gestures are avoided |
| Reduced motion | Non-essential movement is reduced or removed when the visitor prefers reduced motion |
| Deep linking | A direct link to a section opens the correct content without depending on a previous swipe sequence |

Desktop should offer a comfortable reading and browsing mode even if the mobile presentation is panel-based. The same content must remain available through conventional navigation at larger widths. Swipe navigation must never be the only way to reach a project or update.

## 10. Visual, interaction, accessibility, and SEO requirements

The visual language should combine engineering precision with evidence of active making. A restrained technical palette, clear typography, structured grids, status markers, and carefully framed photographs should make the site feel personal without becoming a generic developer template. Hardware imagery, circuit diagrams, and simulation evidence should use consistent media ratios, captions, and loading behavior.

Motion should reinforce navigation and state changes rather than decorate every element. Transitions should be brief, interruptible, and reduced when requested by the operating system. Focus states, hover states, active states, loading states, empty states, and error states should be designed explicitly.

All public content should use semantic headings in a logical order, descriptive link text, keyboard-accessible controls, visible focus indicators, sufficient contrast, and alternative text for meaningful images. Decorative images should be marked as decorative. The swipe interaction must be additive, never a substitute for semantic navigation or readable content.

The site should provide page titles, descriptions, canonical URLs where applicable, social-sharing metadata, a useful favicon, a sitemap or equivalent discoverability mechanism, and a robots policy appropriate for a public portfolio. Project and update detail views should have stable, shareable URLs where the chosen architecture supports them.

No personal credentials, private repair-customer information, device identifiers, unpublished project notes, or private editor data should be bundled into the public build. Contact information should be exposed deliberately, with privacy and spam trade-offs considered before publishing a direct address.

## 11. Media and asset requirements

The prototype should establish media slots and graceful fallbacks before all final images are available. The expected future asset set includes a professional or workshop-oriented profile image if desired, representative laptop repair photos, ESP32 and ESP32-CAM photos, drone-build photos, and an 8-bit adder simulation image or diagram.

Each real asset should eventually have a filename, caption, source or credit where applicable, alternative text, intended content entry, and approved crop or aspect-ratio note. Images should be resized and compressed appropriately while retaining sufficient detail for hardware evidence. A missing asset must not break the layout or create a misleading impression.

## 12. Branch and repository safeguards

Before modifying implementation files, clone or open the selected **Srestho0101/Coolio-Portfolio** repository, inspect the current branch and working tree, and create or switch to the branch named **`portfolio-v4`**. Confirm that the working tree is clean before making changes, unless existing changes are explicitly identified and preserved.

All prototype commits must be made on `portfolio-v4`. Do not force-push, delete, reset, or modify the existing production branch. Before delivery, verify the branch name, review the diff, confirm that no unrelated files changed, and provide the commit identifier and branch status. Production deployment or merge must remain a separate decision after review.

## 13. Delivery phases

### Phase 1: Finalize the scope and plan

Remove the books section from the information architecture, content model, media requirements, prototype, test plan, and acceptance criteria. Confirm that the first deliverable is a data-ready prototype and that real content will arrive incrementally. Record the `portfolio-v4` branch requirement and the rule that existing production work remains untouched.

### Phase 2: Create and inspect the isolated baseline

Review the existing repository, current branch, working tree, pages, scripts, visual conventions, deployment configuration, domain behavior, analytics configuration if present, and existing software-project content. Create the `portfolio-v4` branch before implementation. Inventory what should be preserved, rewritten, moved, retired, or represented by a neutral placeholder.

### Phase 3: Design the content model and reusable structures

Define the content contracts for software projects, hardware repairs, embedded projects, drone milestones, simulations, study topics, and general updates. Establish status vocabulary, date rules, media requirements, validation rules, ordering, featured state, archive state, and draft state. Ensure that presentation components consume content rather than containing one-off hardcoded entries.

### Phase 4: Build the responsive portfolio prototype

Build the global layout, navigation, section framing, typography, color tokens, cards, status labels, media containers, detail views, empty states, and contact area. Preserve or improve the existing software side. Establish the mobile panel boundaries, swipe behavior, indicators, direct navigation, keyboard equivalents, reduced-motion behavior, and desktop fallback before filling all sections.

### Phase 5: Populate neutral prototype states and validate interactions

Use existing software content where it is already available and use clearly labeled neutral placeholders for hardware, embedded systems, the drone, digital logic, and self-study until Srestho supplies real data. Do not invent project facts, outcomes, measurements, images, or dates. Validate navigation, responsive behavior, swipe thresholds, long text, missing media, empty states, accessibility paths, and status changes.

### Phase 6: Establish incremental content intake

Document the exact information Srestho should provide for each work item: title, category, summary, detailed description, status, dates, tools or components, result or current state, next step, links, media, captions, and alternative text. Add real entries one at a time as they are provided, reviewing each for clarity, privacy, accessibility, mobile presentation, and consistency with the reusable content pattern.

### Phase 7: Quality assurance and deployment readiness

Test the prototype locally and on a Vercel preview without changing production. Verify all navigation, direct links, mobile gestures, keyboard paths, image loading, metadata, content validation, and public/private boundaries. Confirm that srestho.online is not changed during prototype review and that a rollback path remains available.

### Phase 8: Review and delivery

Provide the revised plan, prototype branch name, commit identifier, implementation summary, known limitations, and a short list of the next data items needed from Srestho. Do not merge or deploy to production without explicit approval.

## 14. Test plan

| Test area | Verification |
|---|---|
| Content integrity | Every published entry has the required fields for its type; unfinished work is labeled correctly; placeholders are not presented as personal work |
| Navigation | All primary links work; every detail view has a route back; direct links and browser refreshes open correctly |
| Mobile gestures | Swipe thresholds feel intentional; vertical scrolling is not hijacked; indicators and controls remain usable; no accidental horizontal overflow occurs |
| Non-touch access | Keyboard users can reach every control; swipe-equivalent buttons work; focus is visible and logically ordered |
| Responsive layout | Test narrow phones, large phones, tablets, laptops, and wide monitors; inspect long titles, missing images, long descriptions, and galleries |
| Accessibility | Check heading structure, labels, alternative text, contrast, reduced motion, screen-reader names, and error messages |
| Performance | Check image weight, loading behavior, layout stability, script errors, and performance on a slower mobile connection |
| SEO and sharing | Verify titles, descriptions, canonical links, social preview metadata, sitemap/robots behavior, and stable detail URLs |
| Authoring workflow | Add, edit, draft, publish, unpublish, reorder, archive, and delete test entries without manual presentation changes; verify incremental entry addition |
| Deployment | Confirm Vercel preview, production build, custom-domain routing, HTTPS, deep-link refreshes, and rollback path without changing production |
| Privacy and security | Confirm no private drafts or credentials ship publicly; inspect repair images for serial numbers and personal data |
| Branch safety | Confirm all changes are on `portfolio-v4`, the original branch is unchanged, and the final diff contains only intended work |

## 15. Acceptance criteria

The prototype is ready when a first-time visitor can understand Srestho’s software-and-hardware identity from the landing experience, locate software work, understand the intended presentation for laptop repair and embedded-system evidence, see that the drone is an active build, and discover the 8-bit adder simulation and self-study subjects without relying on invented project data.

It is also ready when a mobile visitor can move through the intended panels with a finger while retaining a normal scroll path and accessible alternatives; when public content has stable links and usable metadata; when the layout remains coherent with missing or unusually long content; and when a new portfolio update can be added through the selected authoring workflow without rewriting the page structure.

The work is also considered ready only when all implementation changes are isolated on `portfolio-v4`, the existing branch remains untouched, the prototype is reviewable through a preview or local run, and no production deployment or merge has occurred without Srestho’s approval.

## 16. Assumptions and open decisions

This plan assumes the current repository and production domain remain the source of truth, that the existing software portfolio should be preserved and improved rather than replaced, and that the prototype will contain existing software content plus neutral placeholders until real hardware, embedded, drone, digital-logic, and self-study data is supplied incrementally.

The technology stack is intentionally unspecified. The following decisions remain for implementation: the rendering and content mechanism, the exact authoring workflow, the route-versus-single-page arrangement, the visual theme, the final navigation metaphor for “each side,” the asset-storage method, and the preferred contact approach. These decisions must satisfy the content model, accessibility, privacy, mobile interaction, and deployment requirements above.

The principal risks are overloading the homepage with too many categories, making swipe navigation disorienting, publishing insufficient evidence for hardware claims, allowing unfinished projects to appear complete, creating an inconvenient update workflow, and accidentally modifying the production branch. These risks should be addressed through content prioritization, early mobile prototypes, explicit statuses, curated media, incremental review, and branch safeguards.
