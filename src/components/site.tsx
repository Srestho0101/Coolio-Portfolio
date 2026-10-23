import { useState } from "react";

const textLink =
  "text-ink underline decoration-margin decoration-1 underline-offset-4 hover:text-link";

const sections = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

const projects = [
  {
    title: "Cow Farm Management System",
    href: "https://github.com/Srestho0101/giggling-cows",
    repo: "giggling-cows",
    note: null,
    body: "A local cow farm needed software that covered the actual day, so I built it. Animal records, the daily work, logins, and the bits that have to stay up while people are using them. FastAPI and Next.js in front of PostgreSQL, with SQLAlchemy in between. The limits were ordinary ones: the machine isn't fancy, and nobody is sitting there restarting it for me.",
  },
  {
    title: "Pixagent",
    href: "https://github.com/Srestho0101/Pixagent",
    repo: "Pixagent",
    note: null,
    body: "For a laptop repair shop. Technicians log tickets. Customers ask the assistant where their machine is. The model only answers through tool calls on the live repair data — if a tool doesn't come back with it, the answer doesn't include it. FastAPI, PostgreSQL on Supabase, JWT, streaming responses.",
  },
  {
    title: "Result Management System",
    href: "https://github.com/Srestho0101/result-management-system",
    repo: "result-management-system",
    note: "contributor",
    body: "A Flask site a school uses for results. I didn't start it. I added a Mistral tool-calling layer so a teacher can ask in normal language instead of hunting through screens. The tools check the person's role before they touch anything. The model never gets a raw dump of the database.",
  },
  {
    title: "Autonomous Desktop Agent",
    href: "https://github.com/Srestho0101/AI-computer-use",
    repo: "AI-computer-use",
    note: null,
    body: "An agent that can see a Linux desktop and act on it, including on a machine with about 4GB of RAM. Frames stay in memory. On Wayland I send keystrokes in as kernel scancodes, instead of pulling in a heavy desktop-automation stack. Perception stays on the machine, and it stays light.",
  },
] as const;

function EmailRow() {
  const [copied, setCopied] = useState(false);

  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="text-muted">Email</span>
      <a className={textLink} href="mailto:srestho1298@gmail.com">
        srestho1298@gmail.com
      </a>
      <button
        type="button"
        className="text-sm text-faint underline decoration-line underline-offset-4 hover:text-ink"
        onClick={() => {
          void navigator.clipboard.writeText("srestho1298@gmail.com").then(
            () => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
            },
            () => {
              setCopied(false);
            },
          );
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </p>
  );
}

export function Site() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 md:flex-row md:gap-16 md:px-10 md:py-14">
        <aside className="md:sticky md:top-10 md:w-52 md:shrink-0 md:self-start">
          <div className="flex items-end gap-4 md:block">
            <img
              src="/portrait.jpg"
              alt="Portrait of Muntah Mahfuz Srestho"
              width={224}
              height={288}
              className="h-24 w-20 border border-line object-cover object-top md:mb-5 md:h-36 md:w-28"
            />
            <div>
              <h1 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
                Muntah Mahfuz Srestho
              </h1>
              <p className="mt-2 text-sm leading-snug text-muted">Thakurgaon, Bangladesh</p>
              <p className="mt-1 text-sm italic text-faint">Open to an internship.</p>
            </div>
          </div>
          <span className="mt-4 block h-0.5 w-10 bg-margin md:mt-5" aria-hidden="true" />
          <nav className="mt-4 flex flex-wrap gap-x-5 md:mt-6 md:flex-col md:gap-x-0" aria-label="On this page">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="py-2 text-base text-ink hover:text-link md:py-1.5"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 border-l-2 border-margin pl-4 md:pl-8">
          <p className="font-serif text-xl leading-snug text-ink md:text-2xl">
            I build software for people who will actually open it on a Tuesday.
          </p>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Recently that has meant a system for a local cow farm, an assistant for a laptop
              repair shop, and a desktop agent that still has to behave on about 4GB of RAM.
            </p>
            <p>
              I live in Thakurgaon. I'm sitting Pearson Edexcel A-levels on my own — Physics,
              Mathematics, Further Mathematics — after SSC in Bangla medium. A lot of the machine
              learning I know started as maths I assigned myself: differential calculus, linear
              algebra, probability. Then I tried to run the ideas on computers that don't have
              much to spare.
            </p>
          </div>

          <section id="work" className="mt-14 scroll-mt-8">
            <h2 className="font-serif text-2xl text-ink">Work</h2>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
              Four things worth opening. I wrote three of them. On the school one, I added the
              part that answers questions.
            </p>
            <ol className="mt-2">
              {projects.map((project, index) => (
                <li key={project.href} className="border-b border-line py-7 last:border-b-0">
                  <div className="flex gap-3">
                    <span className="w-5 shrink-0 pt-1 font-serif text-margin">{index + 1}</span>
                    <div className="min-w-0">
                      <h3 className="font-serif text-xl leading-snug text-ink md:text-2xl">
                        {project.title}
                        {project.note ? (
                          <span className="ml-2 font-body text-base italic text-faint">
                            {project.note}
                          </span>
                        ) : null}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted">{project.body}</p>
                      <p className="mt-3">
                        <a
                          className={`${textLink} break-all`}
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.repo}
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="stack" className="mt-6 scroll-mt-8 border-t border-line pt-12">
            <h2 className="font-serif text-2xl text-ink">Stack</h2>
            <p className="mt-2 text-base leading-relaxed text-muted">
              What I actually reach for. If it's only been in a tutorial, it isn't here.
            </p>
            <p className="mt-5 font-serif text-xl leading-snug text-ink md:text-2xl">
              Python, FastAPI, PostgreSQL, SQLAlchemy, SQLite, Next.js, Keras, scikit-learn,
              PyTorch, Linux (Arch), Docker, Git.
            </p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Python is home. FastAPI when something needs an API. Postgres if more than one
                person is writing; SQLite when it's just the app. Next.js when there's a screen
                a person has to use.
              </p>
              <p>
                Keras, scikit-learn, or PyTorch, depending on whether the model needs to be small
                or whether I need to push it. Arch day to day. Docker so it runs somewhere that
                isn't my laptop. Git because I've already lost work the other way.
              </p>
            </div>
          </section>

          <section id="about" className="mt-14 scroll-mt-8 border-t border-line pt-12">
            <h2 className="font-serif text-2xl text-ink">About</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                I finished SSC in 2026 — GPA 4.5, and Physics was the paper I cared about (96).
                After that I didn't continue onto HSC. I signed up as a private candidate for
                Pearson Edexcel A-levels instead: Physics, Mathematics, and Further Mathematics.
                No school timetable. I study, and I build when someone nearby actually needs the
                thing.
              </p>
              <p>
                The habit that stuck is thinking about RAM before I think about a new library.
                Free-tier hosting, a small box, a farm PC — if it only works on a machine I'll
                never have, I don't count it as done.
              </p>
              <p>
                I'm looking for an internship. Somewhere I can work on real systems, get told
                when I'm wrong, and sit next to people who've already broken production once.
              </p>
            </div>
          </section>

          <section id="contact" className="mt-14 scroll-mt-8 border-t border-line pt-12">
            <h2 className="font-serif text-2xl text-ink">Contact</h2>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
              Email is the one I actually read. If it's about work, a link or the problem is
              enough — you don't need a formal note.
            </p>
            <div className="mt-5 space-y-2 text-base leading-relaxed">
              <EmailRow />
              <p>
                <span className="text-muted">Phone </span>
                <a className={textLink} href="tel:+8801711222950">
                  +880 1711-222950
                </a>
              </p>
              <p>
                <span className="text-muted">GitHub </span>
                <a
                  className={textLink}
                  href="https://github.com/Srestho0101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Srestho0101
                </a>
              </p>
              <p>
                <span className="text-muted">LinkedIn </span>
                <a
                  className={textLink}
                  href="https://www.linkedin.com/in/srestho"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  srestho
                </a>
              </p>
            </div>
          </section>

          <footer className="mt-16 border-t border-line pt-6 text-sm text-faint">
            <p>Muntah Mahfuz Srestho · Thakurgaon · 2026</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
