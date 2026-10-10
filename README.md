# Rao Muneeb — Portfolio

Personal portfolio of Rao Muneeb, freelance Web Developer (Islamabad).
Built with Next.js (App Router) and made for Vercel.

## Edit your content

All content (contact details, services, projects, experience, FAQs) is in **`src/config/site.ts`**.
Section headings and the page layout are in `src/components/Portfolio.tsx`.

Client reviews go in `testimonials` in `src/config/site.ts`. Drafts to send to clients for approval
are in `docs/review-drafts.md`.

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

## Google Analytics (optional)

Create a GA4 property, then in Vercel → **Settings → Environment Variables** add
`NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` and redeploy. Without it, no tracking script is loaded.

## After going live

1. Add the site to **Google Search Console**, put the verification code in `src/app/layout.tsx`
   (`verification.google`), and submit `https://yourdomain.com/sitemap.xml`.
2. Create or update your **Google Business Profile** and link it to the site.
3. Add the site URL to your LinkedIn, Instagram and other profiles.
