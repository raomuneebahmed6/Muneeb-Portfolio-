import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", weight: ["500", "600", "700", "800"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title.en, template: `%s | ${site.name}` },
  description: site.description.en,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: site.name,
    title: site.title.en,
    description: site.description.en,
  },
  twitter: { card: "summary_large_image", title: site.title.en, description: site.description.en },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  // After adding the site to Google Search Console, paste the verification code here:
  // verification: { google: "your-code" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

// Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in Vercel to turn on Google Analytics 4.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable} suppressHydrationWarning>
      <body className={inter.className}>
        {/* Lets CSS hide scroll-reveal elements only when JavaScript is running. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
