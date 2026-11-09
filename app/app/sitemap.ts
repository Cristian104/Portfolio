import type { MetadataRoute } from "next";
import { PERSON } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${PERSON.site}/`, alternates: { languages: { es: `${PERSON.site}/es` } } },
    { url: `${PERSON.site}/es`, alternates: { languages: { en: `${PERSON.site}/` } } },
  ];
}
