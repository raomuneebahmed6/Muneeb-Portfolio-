// Edit this file to update everything on the site: text, contact details, links.
// Lines marked TODO are placeholders — replace them with your real details.

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  // Vercel sets this automatically to your production domain.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const site = {
  url: resolveSiteUrl(),
  name: "Rao Muneeb",
  role: "Digital Marketer & Web Developer",
  title: "Rao Muneeb — Digital Marketer & Web Developer in Lahore & Islamabad",
  description:
    "Rao Muneeb is a digital marketer and web developer with 5+ years of agency experience in Lahore and Islamabad. SEO, Google & Meta Ads, social media marketing and fast, conversion-focused websites.",
  keywords: [
    "Rao Muneeb",
    "digital marketer Lahore",
    "digital marketer Islamabad",
    "web developer Lahore",
    "web developer Islamabad",
    "SEO expert Pakistan",
    "Google Ads expert",
    "Meta Ads specialist",
    "social media marketing Pakistan",
    "freelance web developer Pakistan",
  ],
  photo: "/rao-muneeb.webp",
  yearsExperience: 5,
  locations: ["Lahore", "Islamabad"],

  email: "raomuneebahmed6@gmail.com",
  phone: "+92 326 7427474",
  whatsapp: "923267427474", // international format, digits only

  socials: {
    linkedin: "https://www.linkedin.com/in/muneeb-rao-76937a22a",
    instagram: "https://www.instagram.com/muneebdigitalmarketer",
    facebook: "https://www.facebook.com/share/1Gy5gkNw7T/",
    github: "https://github.com/raomuneebahmed6",
  },
} as const;

export const services = [
  {
    title: "Search Engine Optimization",
    text: "Technical audits, keyword research, on-page optimization, local SEO and link building that bring steady organic traffic.",
  },
  {
    title: "Paid Ads (Google & Meta)",
    text: "Search, Display, YouTube, Facebook and Instagram campaigns built around cost per lead and return on ad spend.",
  },
  {
    title: "Social Media Marketing",
    text: "Content calendars, creatives and community management that grow brands on Instagram, Facebook, TikTok and LinkedIn.",
  },
  {
    title: "Website Development",
    text: "Fast, mobile-first websites in WordPress, Shopify, Next.js and React, built to rank and to convert visitors into leads.",
  },
  {
    title: "Landing Pages & CRO",
    text: "High-converting landing pages, A/B testing and funnel fixes so your ad budget turns into real enquiries.",
  },
  {
    title: "Analytics & Tracking",
    text: "GA4, Google Tag Manager, Meta Pixel and conversion API setups, with clear reports on what is working.",
  },
];

export const skills = [
  { group: "Marketing", items: ["SEO", "Google Ads", "Meta Ads", "Social Media", "Content Strategy", "Email Marketing"] },
  { group: "Development", items: ["HTML / CSS", "JavaScript", "React", "Next.js", "WordPress", "Shopify"] },
  { group: "Tools", items: ["GA4", "Tag Manager", "Search Console", "Ahrefs / SEMrush", "Meta Business Suite", "Figma"] },
];

// TODO: adjust roles, agency names and dates to match your real history
export const experience = [
  {
    period: "2023 — Present",
    role: "Senior Digital Marketer & Web Developer",
    place: "Marketing Agency, Islamabad",
    text: "Lead SEO and paid media for agency clients, and build and maintain their websites and landing pages.",
  },
  {
    period: "2021 — 2023",
    role: "Digital Marketing Executive & Web Developer",
    place: "Marketing Agency, Lahore",
    text: "Ran Google and Meta ad campaigns, managed social media accounts and built WordPress websites for local businesses.",
  },
];

// Live client websites. Keep only links that still work.
export const projects = [
  {
    title: "AGC Renovation LLC",
    url: "https://www.agcrenovationllc.pro/",
    image: "/projects/agc-renovation.webp",
    tag: "WordPress · Local SEO",
    text: "Home renovation and remodeling contractor in Chicago, with service pages, project gallery and quote requests.",
  },
  {
    title: "The Pro Movers",
    url: "https://www.thepromovers.com/",
    image: "/projects/the-pro-movers.webp",
    tag: "WordPress · Local SEO",
    text: "New York City moving company website with service areas, location pages and free quote forms.",
  },
  {
    title: "MidlandPCS",
    url: "https://midlandpcs.com/",
    image: "/projects/midlandpcs.webp",
    tag: "WordPress · Business",
    text: "Computer, phone, tablet and console repair shop in Columbia, South Carolina, with service listings and contact forms.",
  },
  {
    title: "Phone 1st Stop",
    url: "https://www.phone1ststop.com/",
    image: "/projects/phone-1st-stop.webp",
    tag: "WordPress · Services",
    text: "Phone, laptop and game console repair business in Fort Worth, Texas, built to turn local searches into calls.",
  },
  {
    title: "Maximus Custom Clothing",
    url: "https://maximuscustomclothing.com/",
    image: "/projects/maximus-custom-clothing.webp",
    tag: "WordPress · E-commerce",
    text: "Custom suits and shirts brand in New York with appointment booking and an online shop.",
  },
  {
    title: "Shop None of Us",
    url: "https://shopnoneofus.de/",
    image: "/projects/shop-none-of-us.webp",
    tag: "WooCommerce · Fashion",
    text: "Streetwear store for hoodies, joggers and tracksuits, with collections, product variations and order tracking.",
  },
  {
    title: "Trendzent",
    url: "https://trendzent.com/",
    image: "/projects/trendzent.webp",
    tag: "WordPress · Events",
    text: "Event management and production company in New Jersey, with services, gallery and enquiry forms.",
  },
  {
    title: "UAE Vibes 360",
    url: "https://uaevibes360.com/",
    image: "/projects/uae-vibes-360.webp",
    tag: "WordPress · News & Blog",
    text: "News and lifestyle magazine covering things to do, culture and cinema in the UAE.",
  },
];

export const stats = [
  { value: `${site.yearsExperience}+`, label: "Years in agencies" },
  { value: "14+", label: "Websites built" },
  { value: "2", label: "Cities: Lahore & Islamabad" },
  // TODO: add real numbers, e.g. { value: "50+", label: "Clients served" }
];
