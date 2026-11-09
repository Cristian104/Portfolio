import type { MetadataRoute } from "next";
import { PERSON } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${PERSON.site}/sitemap.xml` };
}
