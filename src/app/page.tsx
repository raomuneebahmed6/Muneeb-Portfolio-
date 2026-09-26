import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: site.title.en },
  description: site.description.en,
  alternates: { canonical: "/", languages: { en: "/", "ur-Latn": "/ur", "x-default": "/" } },
};

export default function Home() {
  return <Portfolio lang="en" />;
}
