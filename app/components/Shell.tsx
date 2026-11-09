import Script from "next/script";
import Reveal from "./Reveal";
import type { Lang } from "@/lib/content";

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        {/* Opt in to reveal animations only when JS runs, so content never hides without it. */}
        <Script id="js-flag" strategy="beforeInteractive">{`document.documentElement.classList.add('js')`}</Script>
      </head>
      <body className="min-h-dvh">
        {children}
        <Reveal />
      </body>
    </html>
  );
}
