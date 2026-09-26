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
  yearsExperience: 5,
  locations: ["Lahore", "Islamabad"],

  // TODO: replace with your real contact details
  email: "hello@example.com",
  phone: "+92 300 0000000",
  whatsapp: "923000000000", // international format, digits only

  // TODO: replace with your real profiles (delete any you don't use)
  socials: {
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/raomuneebahmed6",
    instagram: "https://www.instagram.com/your-handle",
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

// TODO: replace with your real projects and results. Only publish numbers you can back up.
export const projects = [
  {
    title: "E-commerce SEO growth",
    tag: "SEO",
    text: "Technical fixes, category page optimization and content plan for an online store.",
    result: "Add your result, e.g. +X% organic traffic",
  },
  {
    title: "Lead generation campaign",
    tag: "Google & Meta Ads",
    text: "Full-funnel ad campaign with landing page and conversion tracking for a service business.",
    result: "Add your result, e.g. X leads at Rs Y each",
  },
  {
    title: "Business website rebuild",
    tag: "Web Development",
    text: "New fast, mobile-first website with on-page SEO and lead forms.",
    result: "Add your result, e.g. PageSpeed score, more enquiries",
  },
];

export const stats = [
  { value: `${site.yearsExperience}+`, label: "Years in agencies" },
  { value: "2", label: "Cities: Lahore & Islamabad" },
  // TODO: add real numbers, e.g. { value: "50+", label: "Clients served" }
];
