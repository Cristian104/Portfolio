import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Mail, Layers, Workflow, ShieldCheck, MapPin } from "lucide-react";
import { PERSON, dict, projects, stack, type Lang } from "@/lib/content";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6";
const icons = [Layers, Workflow, ShieldCheck];

function SectionHead({ id, eyebrow, title, sub }: { id: string; eyebrow: string; title: string; sub?: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="text-sm font-medium text-g">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-muted">{sub}</p>}
    </div>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const d = dict[lang];
  const featured = projects.filter((p) => p.image);
  const others = projects.filter((p) => !p.image);
  const es = lang === "es";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/75 backdrop-blur-xl">
        <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
          <Link href={es ? "/es" : "/"} className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-g to-p text-sm font-bold text-bg">CE</span>
            <span className="hidden sm:inline">{PERSON.name}</span>
          </Link>
          <nav aria-label="Main" className="flex items-center gap-1 text-sm">
            <a href="#work" className="rounded-md px-3 py-2 text-muted hover:text-fg">{d.nav.work}</a>
            <a href="#about" className="hidden rounded-md px-3 py-2 text-muted hover:text-fg sm:inline">{d.nav.about}</a>
            <a href="#skills" className="hidden rounded-md px-3 py-2 text-muted hover:text-fg md:inline">{d.nav.stack}</a>
            <Link href={d.nav.otherHref} hrefLang={es ? "en" : "es"} aria-label={d.nav.otherLabel} className="rounded-md px-3 py-2 text-xs font-semibold text-muted hover:text-fg">
              {d.nav.other}
            </Link>
            <a href="#contact" className="btn btn-primary ml-1 !px-4 !py-2 text-sm">{d.nav.contact}</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="hero-bg" aria-hidden />
          <div className={`${wrap} relative pb-20 pt-16 sm:pb-28 sm:pt-24`}>
            <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-white/[0.03] px-3.5 py-1.5 text-sm text-muted">
              <span className="pulse h-2 w-2 rounded-full bg-g" aria-hidden />
              {d.badge}
            </p>
            <h1 className="rise mt-7 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl" style={{ ["--d" as string]: "60ms" }}>
              {PERSON.name}
            </h1>
            <p className="rise mt-4 max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl" style={{ ["--d" as string]: "120ms" }}>
              <span className="text-muted">{d.role}. </span>
              <span className="grad-text">{d.headline.join(" ")}</span>
            </p>
            <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted" style={{ ["--d" as string]: "180ms" }}>{d.pitch}</p>
            <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "240ms" }}>
              <a href={`mailto:${PERSON.email}`} className="btn btn-primary">{d.cta.email} <ArrowRight size={16} aria-hidden /></a>
              <a href="#work" className="btn">{d.viewWork}</a>
              <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="btn"><Github size={16} aria-hidden /> GitHub</a>
            </div>

            <dl className="rise mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4" style={{ ["--d" as string]: "300ms" }}>
              {d.status.map(([k, v]) => (
                <div key={k} className="bg-bg-2/90 px-5 py-4">
                  <dt className="text-xs font-medium uppercase tracking-wider text-dim">{k}</dt>
                  <dd className="mt-1 text-[15px] text-fg">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Work */}
        <section className="border-t border-line py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead id="work" eyebrow={d.nav.work} title={d.work.heading} />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {featured.map((p, i) => (
                <article key={p.id} className={`card overflow-hidden ${i === 0 ? "md:col-span-2 md:grid md:grid-cols-[1.25fr_1fr]" : ""}`}>
                  <div className={`shot relative overflow-hidden border-line bg-bg-2 ${i === 0 ? "aspect-[16/10] border-b md:aspect-auto md:min-h-[340px] md:border-b-0 md:border-r" : "aspect-[16/9] border-b"}`}>
                    <Image src={p.image!} alt={`${p.name} screenshot`} fill sizes={i === 0 ? "(min-width: 768px) 640px, 100vw" : "(min-width: 768px) 560px, 100vw"} className="object-cover object-top" />
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <p className="text-xs font-medium uppercase tracking-wider text-p">{p.kind[lang]} · {p.year}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.line[lang]}</p>
                    <ul className="mt-4 space-y-2 text-[14.5px] text-fg/85">
                      {p.points[lang].slice(0, i === 0 ? 3 : 2).map((x) => (
                        <li key={x} className="flex gap-2.5"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-g" aria-hidden />{x}</li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
                      {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                    </div>
                    {p.link && (
                      <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-g hover:underline">
                        {d.work.open} {p.link.label} <ArrowUpRight size={15} aria-hidden />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <article key={p.id} className="card card-lift flex flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-p">{p.kind[lang]} · {p.year}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.line[lang]}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.stack.slice(0, 4).map((s) => <span key={s} className="chip">{s}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="border-t border-line bg-bg-2 py-20 sm:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.4fr]`}>
            <div>
              <SectionHead id="about" eyebrow={d.nav.about} title={d.about.heading} sub={d.about.intro} />
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-dim"><MapPin size={15} aria-hidden /> {PERSON.location}</p>
            </div>
            <div className="grid gap-4">
              {d.about.cards.map((c, i) => {
                const Icon = icons[i];
                return (
                  <div key={c.t} className="card flex gap-5 p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line-2 bg-gradient-to-br from-g-deep/60 to-p-deep/60 text-g">
                      <Icon size={20} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-semibold">{c.t}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{c.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-line py-20 sm:py-28">
          <div className={wrap}>
            <SectionHead id="skills" eyebrow={d.nav.stack} title={d.stackTitle} />
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((s) => (
                <div key={s.dir} className="bg-bg p-6">
                  <h3 className="text-sm font-semibold text-fg">{s.dir}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.items.map((it) => <span key={it} className="chip">{it}</span>)}
                  </div>
                </div>
              ))}
              <div className="hidden bg-bg p-6 lg:block">
                <h3 className="text-sm font-semibold text-fg">{es ? "Idiomas" : "Languages"}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="chip">{es ? "Inglés" : "English"}</span>
                  <span className="chip">{es ? "Español" : "Spanish"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-line py-20 sm:py-28">
          <div className={wrap}>
            <div id="contact" className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-line-2 bg-panel px-6 py-14 text-center sm:px-12 sm:py-20">
              <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-p-deep/70 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-96 rounded-full bg-g-deep/60 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{d.contact.title}</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{d.contact.body}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a href={`mailto:${PERSON.email}`} className="btn btn-primary"><Mail size={16} aria-hidden /> {PERSON.email}</a>
                  <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="btn"><Github size={16} aria-hidden /> GitHub</a>
                </div>
                <p className="mt-8 text-sm text-dim">
                  {d.contact.studio}{" "}
                  <a href={es ? `${PERSON.studio}/es/` : PERSON.studio} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 hover:text-fg hover:underline">wingwrightstudio.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className={`${wrap} flex flex-col gap-2 text-sm text-dim sm:flex-row sm:justify-between`}>
          <span>© {new Date().getFullYear()} {PERSON.name}</span>
          <span>{d.footer}</span>
        </div>
      </footer>
    </>
  );
}
