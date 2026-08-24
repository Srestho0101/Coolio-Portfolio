# Portfolio v4 Prototype

This is the data-ready prototype for `Srestho0101/Coolio-Portfolio`. It is intended to be committed on a separate Git branch named `portfolio-v4`; it must not replace or modify the existing production branch until reviewed.

## Prototype files

| File | Role |
|---|---|
| `portfolio-v4-index.html` | Complete accessible page shell, navigation, sections, dialogs, and contact links |
| `portfolio-v4-styles.css` | Engineering-workbench visual system, responsive layout, desktop fallback, mobile horizontal panel track, and reduced-motion rules |
| `portfolio-v4-content.js` | Structured content registry for software focus cards, embedded-system slots, self-study tracks, and activity updates |
| `portfolio-v4-app.js` | Rendering, panel navigation, swipe/pointer behavior, progress indicators, keyboard controls, and detail dialogs |
| `coolio-portfolio-plan.md` | Revised scope and implementation plan with books removed |
| `coolio-portfolio-repo-audit.md` | Existing repository audit and prototype verification notes |

## Scope included

The prototype includes the existing machine-learning/software identity, laptop repair and teardown, ESP32, ESP32-CAM, an explicitly in-progress drone build, an 8-bit ripple-carry adder simulation, self-study in differential calculus, linear algebra, statistics, and physics, an activity log, and contact links.

Books and reading-journal content are deliberately excluded.

## Content-entry contract

When adding a real work item, provide the title, category, one-sentence summary, detailed description, status, date or last-updated date, tools/components, result or current state, next step, relevant links, media, captions, and alternative text. For repairs, also provide the device, issue, diagnosis, work performed, and test result. For active projects, provide the current milestone and next milestone. For simulations, provide the question, representation, test case, result, and lesson learned.

Do not invent missing facts. Until real details are supplied, use a neutral placeholder or empty state. Review every image for serial numbers, personal files, credentials, and other private information before publication.

## Local preview

Open `portfolio-v4-index.html` in a modern browser. The page uses no build step in this prototype, so the three prototype files can be previewed together as a static page. The portrait currently references the existing public repository asset; replace that reference during repository integration if a locally managed asset workflow is selected.

## Repository handoff

Create or use `portfolio-v4` from the current production branch, add the prototype files, review the diff, and commit only intended changes. Verify that the production branch is unchanged. Do not merge or deploy to `srestho.online` without explicit approval.
