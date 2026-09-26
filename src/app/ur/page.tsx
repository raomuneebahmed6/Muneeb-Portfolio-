import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: site.title.ur },
  description: site.description.ur,
  alternates: { canonical: "/ur", languages: { en: "/", "ur-Latn": "/ur", "x-default": "/" } },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/ur",
    title: site.title.ur,
    description: site.description.ur,
    locale: "ur_PK",
    images: ["/opengraph-image"],
  },
};

export default function RomanUrduHome() {
  return <Portfolio lang="ur" />;
}
