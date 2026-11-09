import type { Lang } from "@/lib/content";

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
