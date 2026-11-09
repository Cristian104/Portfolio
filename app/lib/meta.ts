import type { Metadata } from "next";
import { PERSON, type Lang } from "./content";

const desc = {
  en: "Cristian Estrada, full-stack developer in e-commerce, automation and AI. Storefronts, AI pipelines and self-hosted infrastructure, built and shipped solo.",
  es: "Cristian Estrada, desarrollador full-stack en e-commerce, automatización e IA. Tiendas, flujos con IA e infraestructura propia, de principio a fin.",
};

export function meta(lang: Lang, path = "", title?: string, description?: string): Metadata {
  const t = title ? `${title} · ${PERSON.name}` : `${PERSON.name} · ${lang === "es" ? "Desarrollador full-stack" : "Full-stack developer"}`;
  const d = description ?? desc[lang];
  const en = path || "/";
  const es = `/es${path}`;
  return {
    metadataBase: new URL(PERSON.site),
    title: t,
    description: d,
    alternates: { canonical: lang === "es" ? es : en, languages: { en, es } },
    openGraph: { title: t, description: d, type: "website", url: lang === "es" ? es : en, locale: lang === "es" ? "es_ES" : "en_US", images: [{ url: "/og.png", width: 1200, height: 630, alt: PERSON.name }] },
    twitter: { card: "summary_large_image", title: t, description: d, images: ["/og.png"] },
  };
}
