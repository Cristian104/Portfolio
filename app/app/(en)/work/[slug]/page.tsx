import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/Site";
import { projects } from "@/lib/content";
import { meta } from "@/lib/meta";

const LANG = "en" as const;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? meta(LANG, `/work/${p.slug}`, p.name, p.summary[LANG]) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return <CaseStudy lang={LANG} p={p} />;
}
