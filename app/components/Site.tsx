import Image from "next/image";
import Link from "next/link";
import AsciiField from "./AsciiField";
import Terminal from "./Terminal";
import { ASCII_NAME, PERSON, dict, projects, stack, type Lang } from "@/lib/content";

const wrap = "mx-auto w-full max-w-5xl px-4 sm:px-6";

function Prompt({ cmd, id }: { cmd: string; id?: string }) {
  return (
    <h2 id={id} className="scroll-mt-20 text-sm text-muted">
      <span className="text-p">❯</span> <span className="text-fg">{cmd}</span>
    </h2>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const d = dict[lang];
  const pad = String(projects.length).padStart(2, "0");

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className={`${wrap} flex h-12 items-center justify-between text-sm`}>
          <Link href={lang === "es" ? "/es" : "/"} className="text-fg">
            <span className="text-g">~</span>/{PERSON.handle}
          </Link>
          <nav aria-label="Main" className="flex items-center gap-3 sm:gap-5">
            <a href="#work" className="text-muted hover:text-g">[{d.nav.work}]</a>
            <a href="#stack" className="hidden text-muted hover:text-g sm:inline">[{d.nav.stack}]</a>
            <a href="#contact" className="text-muted hover:text-g">[{d.nav.contact}]</a>
            <Link href={d.nav.otherHref} hrefLang={lang === "en" ? "es" : "en"} aria-label={d.nav.otherLabel} className="rounded border border-line-2 px-2 text-xs text-p hover:border-p">
              {d.nav.other}
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* ── hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-line">
          <AsciiField className="opacity-90 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
          <div className={`${wrap} relative pb-14 pt-10 sm:pt-16`}>
            <p className="rise text-sm text-muted">
              <span className="text-p">❯</span> <span className="text-fg">whoami</span>
            </p>
            <h1 className="sr-only">{PERSON.name}</h1>
            <pre aria-hidden className="ascii-name rise mt-4 w-fit max-w-full font-mono" style={{ ["--d" as string]: "80ms" }}>{ASCII_NAME.join("\n")}</pre>
            <p className="rise cursor mt-6 text-base text-g sm:text-lg" style={{ ["--d" as string]: "160ms" }}>{d.role}</p>
            <p className="rise mt-3 max-w-2xl text-muted" style={{ ["--d" as string]: "220ms" }}>{d.pitch}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.15fr] md:items-start">
              <div className="rise" style={{ ["--d" as string]: "280ms" }}>
                <dl className="box grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 p-4 text-[13.5px]">
                  {d.status.map(([k, v], i) => (
                    <div key={k} className="contents">
                      <dt className="text-p">{k}</dt>
                      <dd className={i === 0 ? "text-g" : "text-fg"}>{i === 0 && <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-g shadow-[0_0_8px_var(--g)]" />}{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`mailto:${PERSON.email}`} className="btn btn-g">→ {d.cta.email}</a>
                  <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="btn">{d.cta.github} ↗</a>
                  <a href="#work" className="btn">{d.nav.work} ↓</a>
                </div>
              </div>
              <div className="rise" style={{ ["--d" as string]: "340ms" }}>
                <Terminal lang={lang} hint={d.term.hint} />
              </div>
            </div>
          </div>
        </section>

        {/* ── projects ─────────────────────────────────────── */}
        <section className="py-14 sm:py-20">
          <div className={wrap}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <Prompt id="work" cmd={`ls -la ~/${d.work.title}`} />
              <span className="text-xs text-dim">{pad} · {d.work.hint}</span>
            </div>

            <div className="mt-5 border-y border-line">
              {projects.map((p, i) => (
                <details key={p.id} id={`p-${p.id}`} className="row scroll-mt-24 border-b border-line last:border-b-0" open={i === 0}>
                  <summary className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-3 px-2 py-4 sm:grid-cols-[2.5rem_14rem_1fr_auto] sm:gap-x-5">
                    <span className="text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="row-name text-[15px] font-semibold text-fg transition-colors">{p.name}</span>
                      <span className="block text-xs text-p">{p.kind[lang]}</span>
                    </span>
                    <span className="col-span-2 col-start-2 mt-1 text-[13.5px] text-muted sm:col-span-1 sm:col-start-auto sm:mt-0">{p.line[lang]}</span>
                    <span className="chev row-start-1 text-dim sm:row-start-auto" aria-hidden>›</span>
                  </summary>

                  <div className="grid gap-5 px-2 pb-6 sm:ml-[2.5rem] sm:pl-5 md:grid-cols-[1fr_17rem]">
                    <div>
                      <ul className="space-y-1.5 text-[13.5px] text-fg/90">
                        {p.points[lang].map((x) => (
                          <li key={x} className="flex gap-2"><span className="text-g">+</span><span>{x}</span></li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap items-center gap-1.5">
                        {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
                        <span className="ml-1 text-xs text-dim">· {p.year}</span>
                        {p.link && (
                          <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs text-g underline-offset-4 hover:underline">
                            {d.work.open} {p.link.label} ↗
                          </a>
                        )}
                      </div>
                    </div>
                    {p.image && (
                      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line-2">
                        <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(min-width: 768px) 272px, 100vw" className="object-cover object-top opacity-90" />
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── stack ────────────────────────────────────────── */}
        <section className="border-t border-line bg-bg-2 py-14 sm:py-20">
          <div className={wrap}>
            <Prompt id="stack" cmd="tree ~/stack" />
            <div className="mt-5 grid gap-x-10 gap-y-4 text-[13.5px] sm:grid-cols-2">
              {stack.map((s, i) => (
                <div key={s.dir}>
                  <p className="text-p">{i === stack.length - 1 ? "└──" : "├──"} {s.dir}/</p>
                  <p className="pl-8 text-muted">
                    {s.items.map((it, j) => (
                      <span key={it}>
                        <span className="text-fg">{it}</span>
                        {j < s.items.length - 1 && <span className="text-dim"> · </span>}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── contact ──────────────────────────────────────── */}
        <section className="border-t border-line py-16 sm:py-24">
          <div className={wrap}>
            <Prompt id="contact" cmd="./contact.sh" />
            <div className="relative mt-6 overflow-hidden rounded-xl border border-line-2 bg-panel p-6 sm:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-p-deep blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-g-deep blur-3xl" />
              <div className="relative">
                <p className="text-2xl font-semibold text-fg sm:text-4xl">
                  {d.contact.title}<span className="text-g">_</span>
                </p>
                <p className="mt-3 max-w-xl text-muted">{d.contact.body}</p>
                <a href={`mailto:${PERSON.email}`} className="mt-6 block break-all text-lg text-g underline-offset-4 hover:underline sm:text-2xl">
                  {PERSON.email}
                </a>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`mailto:${PERSON.email}`} className="btn btn-g">→ {d.cta.email}</a>
                  <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="btn">{PERSON.githubLabel} ↗</a>
                </div>
                <p className="mt-6 text-sm text-dim">
                  {d.contact.studio}{" "}
                  <a href={lang === "es" ? `${PERSON.studio}/es/` : PERSON.studio} target="_blank" rel="noopener noreferrer" className="text-p hover:underline">wingwrightstudio.com ↗</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-6">
        <div className={`${wrap} flex flex-col gap-2 text-xs text-dim sm:flex-row sm:justify-between`}>
          <span>© {new Date().getFullYear()} {PERSON.name}</span>
          <span>{d.footer}</span>
        </div>
      </footer>
    </>
  );
}
