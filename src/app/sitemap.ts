import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: site.url, "ur-Latn": `${site.url}/ur` };
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${site.url}/ur`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
