import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return <Portfolio />;
}
