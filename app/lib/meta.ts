import type { Metadata } from "next";
import { PERSON, type Lang } from "./content";

const desc = {
  en: "Cristian Estrada builds Shopify stores, fast custom sites and the automation behind them for small businesses. English and Spanish.",
  es: "Cristian Estrada crea tiendas Shopify, sitios rápidos a medida y la automatización detrás de ellos para pequeños negocios. Inglés y español.",
};

export function meta(lang: Lang, path = "", title?: string, description?: string): Metadata {
  const t = title ? `${title} · ${PERSON.name}` : `${PERSON.name} · ${lang === "es" ? "Tiendas Shopify y automatización" : "Shopify stores & automation"}`;
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
