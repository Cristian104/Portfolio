"use client";
import { useRef, useState } from "react";
import { PERSON, projects, stack, type Lang } from "@/lib/content";

type Line = { k: "in" | "out" | "err" | "ok"; t: string };

const copy = {
  en: {
    hello: [`Welcome. This is a real (tiny) shell.`, `Try: help · ls · open wingwright · sudo hire-me`],
    help: [
      "whoami          who is this",
      "ls              list projects",
      "open <id>       expand a project",
      "stack           tools I use",
      "contact         ways to reach me",
      "email | github  open them",
      "lang            switch EN/ES",
      "clear           clear the screen",
    ],
    whoami: "Cristian Estrada · full-stack developer · e-commerce, automation & AI · Łódź, PL",
    nf: (c: string) => `command not found: ${c}. Try 'help'.`,
    noP: (id: string) => `no such project: ${id}. Try 'ls'.`,
    opening: (x: string) => `opening ${x}…`,
    hire: ["[sudo] password for recruiter: ********", "access granted ✓ composing an email to Cristian…"],
  },
  es: {
    hello: [`Bienvenido. Esto es una terminal de verdad (pequeña).`, `Prueba: help · ls · open wingwright · sudo hire-me`],
    help: [
      "whoami          quién es",
      "ls              lista de proyectos",
      "open <id>       abrir un proyecto",
      "stack           herramientas que uso",
      "contact         cómo contactarme",
      "email | github  abrirlos",
      "lang            cambiar EN/ES",
      "clear           limpiar la pantalla",
    ],
    whoami: "Cristian Estrada · desarrollador full-stack · e-commerce, automatización e IA · Łódź, PL",
    nf: (c: string) => `comando no encontrado: ${c}. Prueba 'help'.`,
    noP: (id: string) => `no existe el proyecto: ${id}. Prueba 'ls'.`,
    opening: (x: string) => `abriendo ${x}…`,
    hire: ["[sudo] contraseña para reclutador: ********", "acceso concedido ✓ redactando un correo a Cristian…"],
  },
};

export default function Terminal({ lang, hint }: { lang: Lang; hint: string }) {
  const c = copy[lang];
  const [lines, setLines] = useState<Line[]>(c.hello.map((t) => ({ k: "out", t })));
  const [val, setVal] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [hi, setHi] = useState(-1);
  const box = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const push = (add: Line[]) => {
    setLines((l) => [...l, ...add].slice(-60));
    requestAnimationFrame(() => box.current?.scrollTo({ top: box.current.scrollHeight }));
  };

  const go = (sel: string) => document.querySelector(sel)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const run = (raw: string) => {
    const cmd = raw.trim();
    const echo: Line = { k: "in", t: cmd };
    if (!cmd) return push([echo]);
    setHist((h) => [cmd, ...h].slice(0, 30));
    setHi(-1);
    const [name, ...args] = cmd.split(/\s+/);
    const n = name.toLowerCase();
    const out = (t: string | string[], k: Line["k"] = "out") => push([echo, ...([] as string[]).concat(t).map((x) => ({ k, t: x }))]);

    switch (n) {
      case "help": case "?": return out(c.help);
      case "whoami": return out(c.whoami);
      case "ls": case "projects":
        return out(projects.map((p) => `${p.id.padEnd(15)} ${p.year.padEnd(8)} ${p.kind[lang]}`));
      case "open": case "cat": case "cd": {
        const id = (args[0] || "").toLowerCase();
        const p = projects.find((x) => x.id === id || x.name.toLowerCase().startsWith(id));
        if (!id || !p) return out(c.noP(id || "?"), "err");
        const el = document.getElementById(`p-${p.id}`) as HTMLDetailsElement | null;
        if (el) { el.open = true; el.scrollIntoView({ behavior: "smooth", block: "center" }); }
        return out(c.opening(p.name), "ok");
      }
      case "stack": go("#stack"); return out(stack.map((s) => `${(s.dir + "/").padEnd(15)} ${s.items.join(", ")}`));
      case "contact": go("#contact"); return out([`email   ${PERSON.email}`, `github  ${PERSON.githubLabel}`, `studio  wingwrightstudio.com`]);
      case "email": case "mail": out(c.opening("mail"), "ok"); location.href = `mailto:${PERSON.email}`; return;
      case "github": out(c.opening("github"), "ok"); window.open(PERSON.github, "_blank", "noopener"); return;
      case "lang": out(c.opening(lang === "en" ? "/es" : "/"), "ok"); location.href = lang === "en" ? "/es" : "/"; return;
      case "clear": case "cls": setLines([]); return;
      case "date": return out(new Date().toString());
      case "echo": return out(args.join(" "));
      case "pwd": return out(`/home/${PERSON.handle}/portfolio`);
      case "exit": return out("logout? not yet: scroll down, there's more ↓");
      case "rm": return out("nice try.", "err");
      case "sudo":
        if (args.join(" ").toLowerCase().includes("hire")) {
          out(c.hire, "ok");
          setTimeout(() => (location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent("Let's work together")}`), 900);
          return;
        }
        return out("sudo: try 'sudo hire-me'", "err");
      default: return out(c.nf(n), "err");
    }
  };

  const color = { in: "text-fg", out: "text-muted", err: "text-rose", ok: "text-g" } as const;

  return (
    <div className="term-frame" onClick={() => input.current?.focus()}>
      <div className="flex items-center gap-2 border-b border-line px-3 py-2 text-[11px] text-dim">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-2">{PERSON.handle}@portfolio: ~</span>
      </div>
      <div ref={box} className="h-44 overflow-y-auto px-3 py-2 text-[13px] leading-relaxed sm:h-52" aria-live="polite">
        {lines.map((l, i) => (
          <div key={i} className={`whitespace-pre-wrap break-words ${color[l.k]}`}>
            {l.k === "in" ? <><span className="text-p">❯</span> {l.t}</> : l.t}
          </div>
        ))}
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => { e.preventDefault(); run(val); setVal(""); }}
        >
          <label htmlFor="term-in" className="text-p">❯</label>
          <input
            id="term-in"
            ref={input}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp" && hist.length) { e.preventDefault(); const n = Math.min(hi + 1, hist.length - 1); setHi(n); setVal(hist[n]); }
              if (e.key === "ArrowDown") { e.preventDefault(); const n = hi - 1; setHi(n); setVal(n >= 0 ? hist[n] : ""); }
            }}
            aria-label={hint}
            placeholder={hint}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="term-input w-full bg-transparent text-fg caret-g outline-none placeholder:text-dim"
          />
        </form>
      </div>
    </div>
  );
}
