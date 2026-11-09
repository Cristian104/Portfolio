import Image from "next/image";
import Link from "next/link";
import AsciiField from "./AsciiField";
import Terminal from "./Terminal";
import { ASCII_NAME, PERSON, dict, projects, stack, type Lang } from "@/lib/content";

const wrap = "mx-auto w-full max-w-5xl px-4 sm:px-6";

/** Mono "command" eyebrow + clean sans heading: the terminal/professional mix. */
function SectionHead({ id, cmd, title, aside }: { id: string; cmd: string; title: string; aside?: string }) {
  return (
    <div id={id} className="scroll-mt-20">
      <p className="font-mono text-xs text-muted">
        <span className="text-p">❯</span> {cmd}
      </p>
      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{title}</h2>
        {aside && <span className="font-mono text-xs text-dim">{aside}</span>}
      </div>
    </div>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const d = dict[lang];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className={`${wrap} flex h-14 items-center justify-between`}>
          <Link href={lang === "es" ? "/es" : "/"} className="font-mono text-sm text-fg">
            <span className="text-g">~</span>/{PERSON.handle}
          </Link>
          <nav aria-label="Main" className="flex items-center gap-4 text-sm sm:gap-6">
            <a href="#work" className="text-muted transition-colors hover:text-fg">{d.nav.work}</a>
            <a href="#about" className="hidden text-muted transition-colors hover:text-fg sm:inline">{d.nav.about}</a>
            <a href="#stack" className="hidden text-muted transition-colors hover:text-fg md:inline">{d.nav.stack}</a>
            <a href="#contact" className="text-muted transition-colors hover:text-fg">{d.nav.contact}</a>
            <Link href={d.nav.otherHref} hrefLang={lang === "en" ? "es" : "en"} aria-label={d.nav.otherLabel} className="rounded border border-line-2 px-2 py-0.5 font-mono text-xs text-p hover:border-p">
              {d.nav.other}
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* ── hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-line">
          <AsciiField className="opacity-80 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
          <div className={`${wrap} relative pb-16 pt-12 sm:pt-16`}>
            <p className="rise font-mono text-sm text-muted">
              <span className="text-p">❯</span> <span className="text-fg">whoami</span>
            </p>
            <h1 className="sr-only">{PERSON.name}</h1>
            <pre aria-hidden className="ascii-name rise mt-4 w-fit max-w-full font-mono" style={{ ["--d" as string]: "80ms" }}>{ASCII_NAME.join("\n")}</pre>
            <p className="rise cursor mt-6 font-mono text-base text-g sm:text-lg" style={{ ["--d" as string]: "160ms" }}>{d.role}</p>
            <p className="rise mt-3 max-w-2xl text-lg leading-relaxed text-muted" style={{ ["--d" as string]: "220ms" }}>{d.pitch}</p>

            <div className="mt-9 grid gap-6 md:grid-cols-[1fr_1.15fr] md:items-start">
              <div className="rise" style={{ ["--d" as string]: "280ms" }}>
                <dl className="box divide-y divide-line text-sm">
                  {d.status.map(([k, v], i) => (
                    <div key={k} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 px-4 py-2.5">
                      <dt className="font-mono text-xs uppercase tracking-wider text-dim">{k}</dt>
                      <dd className={i === 0 ? "font-medium text-g" : "text-fg"}>
                        {i === 0 && <span className="mr-2 inline-block h-2 w-2 rounded-full bg-g shadow-[0_0_8px_var(--g)]" aria-hidden />}
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={`mailto:${PERSON.email}`} className="btn btn-g">{d.cta.email} →</a>
                  <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="btn">{d.cta.github} ↗</a>
                </div>
              </div>
              <div className="rise hidden sm:block" style={{ ["--d" as string]: "340ms" }}>
                <Terminal lang={lang} hint={d.term.hint} />
              </div>
            </div>
          </div>
        </section>

        {/* ── projects ─────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className={wrap}>
            <SectionHead id="work" cmd={`ls ~/${d.work.title}`} title={d.work.heading} aside={d.work.hint} />

            <div className="mt-6 overflow-hidden rounded-xl border border-line">
              {projects.map((p, i) => (
                <details key={p.id} id={`p-${p.id}`} className="row scroll-mt-24 border-b border-line last:border-b-0" open={i === 0}>
                  <summary className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 px-4 py-4 sm:grid-cols-[13rem_1fr_auto] sm:gap-x-6 sm:px-5">
                    <span>
                      <span className="row-name font-semibold text-fg transition-colors">{p.name}</span>
                      <span className="mt-0.5 block font-mono text-xs text-p">{p.kind[lang]} · {p.year}</span>
                    </span>
                    <span className="col-span-2 row-start-2 mt-1.5 text-[15px] text-muted sm:col-span-1 sm:row-start-auto sm:mt-0">{p.line[lang]}</span>
                    <span className="chev col-start-2 row-start-1 font-mono text-dim sm:col-start-auto sm:row-start-auto" aria-hidden>›</span>
                  </summary>

                  <div className="grid gap-5 px-4 pb-6 sm:pl-[calc(13rem+2.75rem)] sm:pr-5 md:grid-cols-[1fr_16rem]">
                    <div>
                      <ul className="space-y-2 text-[15px] text-fg/90">
                        {p.points[lang].map((x) => (
                          <li key={x} className="flex gap-2.5"><span className="font-mono text-g">›</span><span>{x}</span></li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap items-center gap-1.5">
                        {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
                        {p.link && (
                          <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="ml-2 font-mono text-xs text-g underline-offset-4 hover:underline">
                            {d.work.open} {p.link.label} ↗
                          </a>
                        )}
                      </div>
                    </div>
                    {p.image && (
                      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line-2">
                        <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(min-width: 768px) 256px, 100vw" className="object-cover object-top" />
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── about ────────────────────────────────────────── */}
        <section className="border-t border-line py-16 sm:py-20">
          <div className={wrap}>
            <SectionHead id="about" cmd="cat about.md" title={d.about.heading} />
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{d.about.intro}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {d.about.cards.map((c, i) => (
                <div key={c.t} className="box p-5">
                  <p className="font-mono text-xs text-p">0{i + 1}</p>
                  <h3 className="mt-2 font-semibold text-fg">{c.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── stack ────────────────────────────────────────── */}
        <section className="border-t border-line bg-bg-2 py-16 sm:py-20">
          <div className={wrap}>
            <SectionHead id="stack" cmd="tree ~/stack" title={d.stackTitle} />
            <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {stack.map((s, i) => (
                <div key={s.dir}>
                  <p className="font-mono text-sm text-p">{i === stack.length - 1 ? "└──" : "├──"} {s.dir}/</p>
                  <div className="mt-2 flex flex-wrap gap-1.5 pl-8">
                    {s.items.map((it) => <span key={it} className="tag text-fg">{it}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── contact ──────────────────────────────────────── */}
        <section className="border-t border-line py-16 sm:py-24">
          <div className={wrap}>
            <div id="contact" className="relative scroll-mt-20 overflow-hidden rounded-xl border border-line-2 bg-panel p-6 sm:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-p-deep blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-g-deep blur-3xl" />
              <div className="relative">
                <p className="font-mono text-xs text-muted"><span className="text-p">❯</span> ./contact.sh</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  {d.contact.title}<span className="text-g">.</span>
                </h2>
                <p className="mt-3 max-w-xl text-lg text-muted">{d.contact.body}</p>
                <a href={`mailto:${PERSON.email}`} className="mt-6 block break-all font-mono text-lg text-g underline-offset-4 hover:underline sm:text-xl">
                  {PERSON.email}
                </a>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`mailto:${PERSON.email}`} className="btn btn-g">{d.cta.email} →</a>
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
        <div className={`${wrap} flex flex-col gap-2 font-mono text-xs text-dim sm:flex-row sm:justify-between`}>
          <span>© {new Date().getFullYear()} {PERSON.name}</span>
          <span>{d.footer}</span>
        </div>
      </footer>
    </>
  );
}
