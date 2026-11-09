import type { MetadataRoute } from "next";
import { PERSON, projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...projects.map((p) => `/work/${p.slug}`)];
  return paths.flatMap((p) => [
    { url: `${PERSON.site}${p || "/"}`, alternates: { languages: { es: `${PERSON.site}/es${p}` } } },
    { url: `${PERSON.site}/es${p}` },
  ]);
}
