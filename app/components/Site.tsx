import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Github, ArrowLeft } from "lucide-react";
import { PERSON, base, dict, projects, toolbox, type Lang, type Project } from "@/lib/content";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-honey-ink">
      <span className="h-px w-6 bg-honey" aria-hidden />
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{children}</h2>;
}

function BtnPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const t = dict[lang].nav;
  const b = base(lang);
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
        <Link href={b || "/"} className="font-display text-xl tracking-tight sm:text-2xl">
          Cristian Estrada<span className="text-honey">.</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm sm:gap-2">
          <a href={`${b}/#work`} className="hidden rounded-full px-3 py-2 text-ink-soft hover:text-ink sm:inline">{t.work}</a>
          <a href={`${b}/#services`} className="hidden rounded-full px-3 py-2 text-ink-soft hover:text-ink sm:inline">{t.services}</a>
          <a href={`${b}/#process`} className="hidden rounded-full px-3 py-2 text-ink-soft hover:text-ink md:inline">{t.process}</a>
          <Link
            href={t.otherHref}
            hrefLang={lang === "en" ? "es" : "en"}
            aria-label={t.otherLabel}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-medium tracking-wide text-ink-soft hover:border-ink hover:text-ink"
          >
            {t.other}
          </Link>
          <a href={`${b}/#contact`} className="rounded-full bg-ink px-4 py-2 text-paper">{t.contact}</a>
        </nav>
      </div>
    </header>
  );
}

function WorkCard({ p, lang, big }: { p: Project; lang: Lang; big?: boolean }) {
  const t = dict[lang].work;
  return (
    <Link href={`${base(lang)}/work/${p.slug}`} className="group block" data-reveal>
      <div className={`shot relative overflow-hidden rounded-2xl border border-line bg-paper-2 ${big ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
        {p.image && (
          <Image
            src={p.image}
            alt={p.imageAlt?.[lang] ?? p.name}
            fill
            sizes={big ? "(min-width: 1152px) 1104px, 100vw" : "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"}
            className="object-cover object-top"
          />
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted">{p.kind[lang]}</p>
          <h3 className={`mt-1 font-display leading-tight ${big ? "text-4xl" : "text-3xl"}`}>{p.name}</h3>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">{p.summary[lang]}</p>
        </div>
        <span className={`mt-6 hidden shrink-0 items-center gap-1 text-sm text-ink-soft group-hover:text-ink ${big ? "sm:inline-flex" : ""}`}>
          {t.more} <ArrowUpRight size={15} aria-hidden />
        </span>
      </div>
    </Link>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const d = dict[lang];
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const studio = lang === "es" ? PERSON.studioEs : PERSON.studio;

  return (
    <>
      <Header lang={lang} />
      <main id="top">
        {/* Hero */}
        <section className={`${wrap} pb-16 pt-14 sm:pt-20 md:pb-24 md:pt-28`}>
          <p className="hero-line text-sm text-muted" style={{ ["--d" as string]: "0ms" }}>{d.hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-[2.7rem] leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {d.hero.title.map((line, i) => (
              <span key={i} className={`hero-line ${i === 2 ? "italic text-honey-ink" : ""}`} style={{ ["--d" as string]: `${80 + i * 90}ms` }}>
                {line}
              </span>
            ))}
          </h1>
          <div className="hero-line mt-8" style={{ ["--d" as string]: "380ms" }}>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{d.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnPrimary href={PERSON.booking}>{d.hero.primary}</BtnPrimary>
              <a href="#work" className="inline-flex items-center rounded-full border border-line px-6 py-3.5 text-sm font-medium hover:border-ink">
                {d.hero.secondary}
              </a>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-16 border-t border-line py-16 md:py-24">
          <div className={wrap}>
            <div data-reveal>
              <Label>{d.work.label}</Label>
              <H2>{d.work.title}</H2>
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-6">
              {featured.map((p, i) => (
                <div key={p.slug} className={i === 0 ? "md:col-span-6" : "md:col-span-3 lg:col-span-2"}>
                  <WorkCard p={p} lang={lang} big={i === 0} />
                </div>
              ))}
            </div>

            <h3 className="mt-20 text-xs font-medium uppercase tracking-[0.18em] text-muted" data-reveal>{d.work.other}</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {rest.map((p) => (
                <li key={p.slug} data-reveal>
                  <Link href={`${base(lang)}/work/${p.slug}`} className="group grid gap-1 py-6 sm:grid-cols-[1fr_1.6fr_auto] sm:items-baseline sm:gap-8">
                    <span className="font-display text-2xl sm:text-3xl">{p.name}</span>
                    <span className="text-[15px] leading-relaxed text-ink-soft">{p.summary[lang]}</span>
                    <span className="hidden text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-ink sm:block">
                      <ArrowRight size={18} aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-16 bg-navy py-16 text-on-navy md:py-24">
          <div className={wrap}>
            <div data-reveal>
              <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-honey">
                <span className="h-px w-6 bg-honey" aria-hidden />
                {d.services.label}
              </p>
              <H2>{d.services.title}</H2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {d.services.items.map((s, i) => (
                <div key={s.t} className="bg-navy p-7 md:p-9" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
                  <p className="font-display text-sm text-honey">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-3xl">{s.t}</h3>
                  <p className="mt-3 leading-relaxed text-on-navy/75">{s.d}</p>
                </div>
              ))}
            </div>
            <a
              href={studio}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm text-honey hover:underline"
              data-reveal
            >
              {lang === "es" ? "Paquetes y precios en Wingwright Studio" : "Packages and prices at Wingwright Studio"}
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-16 py-16 md:py-24">
          <div className={wrap}>
            <div data-reveal>
              <Label>{d.process.label}</Label>
              <H2>{d.process.title}</H2>
            </div>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {d.process.steps.map((s, i) => (
                <li key={s.t} className="border-t-2 border-ink pt-5" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
                  <span className="font-display text-5xl text-honey-ink">{i + 1}</span>
                  <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About + toolbox */}
        <section className="border-t border-line bg-paper-2 py-16 md:py-24">
          <div className={`${wrap} grid gap-14 lg:grid-cols-2`}>
            <div data-reveal>
              <Label>{d.about.label}</Label>
              <H2>{d.about.title}</H2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                {d.about.body.map((para) => <p key={para}>{para}</p>)}
              </div>
            </div>
            <div data-reveal>
              <Label>{d.stack.label}</Label>
              <h3 className="font-display text-3xl">{d.stack.title}</h3>
              <dl className="mt-6 space-y-6">
                {toolbox.map((g) => (
                  <div key={g.group.en}>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted">{g.group[lang]}</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <span key={it} className="rounded-full border border-line bg-card px-3 py-1 text-sm">{it}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

export function Contact({ lang, title }: { lang: Lang; title?: string }) {
  const c = dict[lang].contact;
  const studio = lang === "es" ? PERSON.studioEs : PERSON.studio;
  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-28">
      <div className={`${wrap} text-center`} data-reveal>
        <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">{title ?? c.title}</h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-ink-soft">{c.body}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <BtnPrimary href={PERSON.booking}>{c.primary}</BtnPrimary>
          <a href={`mailto:${PERSON.email}`} className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium hover:border-ink">
            <Mail size={16} aria-hidden /> {c.email}
          </a>
        </div>
        <p className="mt-6 text-sm text-muted">
          <a href={`mailto:${PERSON.email}`} className="hover:text-ink">{PERSON.email}</a>
          {" · "}
          <a href={studio} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{c.studio}</a>
        </p>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-line py-8">
      <div className={`${wrap} flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row`}>
        <p>© {new Date().getFullYear()} {PERSON.name} · {dict[lang].footer}</p>
        <div className="flex items-center gap-4">
          <a href={PERSON.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink"><Github size={18} /></a>
          <a href={`mailto:${PERSON.email}`} aria-label="Email" className="hover:text-ink"><Mail size={18} /></a>
          <a href={lang === "es" ? PERSON.studioEs : PERSON.studio} target="_blank" rel="noopener noreferrer" className="hover:text-ink">wingwrightstudio.com</a>
        </div>
      </div>
    </footer>
  );
}

export function CaseStudy({ lang, p }: { lang: Lang; p: Project }) {
  const t = dict[lang].cs;
  const b = base(lang);
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  return (
    <>
      <Header lang={lang} />
      <main>
        <article className={`${wrap} pb-8 pt-10 md:pt-16`}>
          <Link href={`${b}/#work`} className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink">
            <ArrowLeft size={15} aria-hidden /> {t.back}
          </Link>
          <p className="hero-line mt-10 text-xs uppercase tracking-[0.16em] text-muted">{p.kind[lang]} · {p.year}</p>
          <h1 className="hero-line mt-3 font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl" style={{ ["--d" as string]: "80ms" }}>{p.name}</h1>
          <p className="hero-line mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft" style={{ ["--d" as string]: "160ms" }}>{p.summary[lang]}</p>
          {p.link && (
            <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="hero-line mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-honey-ink hover:underline" style={{ ["--d" as string]: "220ms" }}>
              {p.link.label[lang]} <ArrowUpRight size={15} aria-hidden />
            </a>
          )}

          {p.image && (
            <div className="hero-line relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-paper-2" style={{ ["--d" as string]: "260ms" }}>
              <Image src={p.image} alt={p.imageAlt?.[lang] ?? p.name} fill priority sizes="(min-width: 1152px) 1104px, 100vw" className="object-cover object-top" />
            </div>
          )}

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_2fr]">
            <aside data-reveal>
              <h2 className="text-xs uppercase tracking-[0.16em] text-muted">{t.stack}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-card px-3 py-1 text-sm">{s}</li>
                ))}
              </ul>
            </aside>
            <div className="space-y-12">
              <section data-reveal>
                <h2 className="font-display text-3xl">{t.problem}</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">{p.problem[lang]}</p>
              </section>
              <section data-reveal>
                <h2 className="font-display text-3xl">{t.built}</h2>
                <ul className="mt-4 space-y-3">
                  {p.built[lang].map((x) => (
                    <li key={x} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" aria-hidden />
                      {x}
                    </li>
                  ))}
                </ul>
              </section>
              {p.notes[lang].length > 0 && (
                <section data-reveal>
                  <h2 className="font-display text-3xl">{t.notes}</h2>
                  {p.notes[lang].map((n) => <p key={n} className="mt-3 text-lg leading-relaxed text-ink-soft">{n}</p>)}
                </section>
              )}
            </div>
          </div>

          <Link href={`${b}/work/${next.slug}`} className="group mt-20 flex items-center justify-between border-y border-line py-8" data-reveal>
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-muted">{t.next}</span>
              <span className="mt-1 block font-display text-3xl sm:text-4xl">{next.name}</span>
            </span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </article>
        <Contact lang={lang} title={t.cta} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
