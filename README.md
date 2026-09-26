# Rao Muneeb — Portfolio

Personal portfolio of Rao Muneeb, Digital Marketer & Web Developer (Lahore & Islamabad).
Built with Next.js (App Router) and made for Vercel.

## Edit your content

All text, contact details and links are in **`src/config/site.ts`**. Replace every `TODO` item
(email, phone, WhatsApp, social links, experience, projects).

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## SEO included

- Title, description, keywords, canonical URL, Open Graph and Twitter cards
- Auto-generated social share image (`/opengraph-image`)
- `sitemap.xml`, `robots.txt`, web manifest, favicon
- JSON-LD structured data: Person, ProfessionalService (Lahore/Islamabad), WebSite, FAQPage
- Fully static page, so it loads fast (good for Core Web Vitals)

## Deploy on Vercel

1. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**.
2. Import this repository. Vercel detects Next.js automatically, so click **Deploy**.
3. You get a free `*.vercel.app` URL.

## Connect your domain

1. Vercel → Project → **Settings → Domains** → add `yourdomain.com` (and `www.yourdomain.com`).
2. At your domain registrar, add the DNS records Vercel shows you
   (usually an `A` record `@ → 76.76.21.21` and a `CNAME` record `www → cname.vercel-dns.com`).
3. Vercel → **Settings → Environment Variables**: set `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com`,
   then redeploy so the sitemap and canonical URLs use your domain.

## After going live

1. Add the site to **Google Search Console**, put the verification code in `src/app/layout.tsx`
   (`verification.google`), and submit `https://yourdomain.com/sitemap.xml`.
2. Create or update your **Google Business Profile** and link it to the site.
3. Add the site URL to your LinkedIn, Instagram and other profiles.
