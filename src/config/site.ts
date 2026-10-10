// Edit this file to update everything on the site: text, contact details, links.

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  // Vercel sets this automatically to your production domain.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const site = {
  url: resolveSiteUrl(),
  name: "Rao Muneeb",
  role: "Web Developer",
  title: "Rao Muneeb — Freelance Web Developer | Websites, E-commerce, CRM & CMS | Islamabad",
  description: "Rao Muneeb is a freelance web developer in Islamabad with 5+ years of experience and 25+ websites built. Business websites, online stores, custom CRM and CMS for every niche: education, e-commerce, restaurants, marquees, healthcare and more.",
  keywords: [
    "Rao Muneeb",
    "web developer Islamabad",
    "web developer Lahore",
    "freelance web developer Pakistan",
    "WordPress developer Pakistan",
    "WooCommerce developer",
    "Shopify developer Pakistan",
    "Next.js developer",
    "ecommerce website developer",
    "website design Islamabad",
    "custom CRM development Pakistan",
    "custom CMS development",
    "restaurant website Pakistan",
    "marquee website design",
    "school website development",
  ],
  photo: "/rao-muneeb.webp",
  yearsExperience: 5,
  locations: ["Lahore", "Islamabad"],

  email: "raomuneebahmed6@gmail.com",
  phone: "+92 326 7427474",
  whatsapp: "923267427474", // international format, digits only

  // Social profiles. Icons appear in the hero and footer only for links added here.
  // Supported keys: linkedin, instagram, facebook. Example:
  //   linkedin: "https://www.linkedin.com/in/your-profile",
  socials: {} as Partial<Record<"linkedin" | "instagram" | "facebook", string>>,
} as const;

// What I do. Short and friendly, one line each.
export const services = [
  { icon: "code", title: "Business Websites", text: "Clean, professional websites that explain what you do and turn visitors into enquiries." },
  { icon: "cart", title: "E-commerce Stores", text: "WooCommerce and Shopify stores with products, payments, delivery and order tracking." },
  { icon: "layers", title: "Custom Web Apps", text: "Fast, modern sites and web apps built with Next.js and React." },
  { icon: "users", title: "Custom CRM", text: "Manage leads, customers, bookings and sales in one dashboard built around how your business works." },
  { icon: "dashboard", title: "Custom CMS & Admin Panels", text: "Update your website, products and content yourself, no developer needed." },
  { icon: "funnel", title: "Landing Pages", text: "Focused one-page sites for a product, offer or campaign, built to convert." },
  { icon: "refresh", title: "Website Redesign", text: "Old or slow website? I rebuild it with a fresh design without losing your content." },
  { icon: "search", title: "Speed & SEO Setup", text: "Fast loading, mobile-friendly and set up properly for Google from day one." },
  { icon: "server", title: "Hosting & Migration", text: "Domain, hosting, SSL and moving your site to a new server without downtime." },
  { icon: "wrench", title: "Maintenance & Support", text: "Updates, backups, security and quick fixes whenever you need them." },
];

// Niches I build for. `example` points to a real project from the list below.
export const industries = [
  { icon: "book", name: "Education & Schools", example: "LMS Handling" },
  { icon: "cart", name: "E-commerce & Retail", example: "Zoom Haier Store" },
  { icon: "utensils", name: "Restaurants & Cafés" },
  { icon: "rings", name: "Marquees & Events", example: "Trendzent" },
  { icon: "heart", name: "Hospitals & Clinics", example: "Bilal Hospital" },
  { icon: "building", name: "Construction & Real Estate", example: "AGC Renovation" },
  { icon: "sparkle", name: "Beauty & Cosmetics", example: "ACM Cosmetics" },
  { icon: "truck", name: "Transport & Moving", example: "EIQAN" },
  { icon: "wrench", name: "Repair & Local Services", example: "MidlandPCS" },
  { icon: "smile", name: "Kids & Entertainment", example: "Little Explorers World" },
  { icon: "dashboard", name: "SaaS & Business Software", example: "eKarobar360" },
  { icon: "briefcase", name: "Corporate & B2B", example: "Pioneer Group" },
];

export const skills = [
  { group: "Development", items: ["WordPress", "WooCommerce", "Shopify", "Next.js", "React", "HTML / CSS", "JavaScript", "PHP", "Elementor", "CRM", "CMS"] },
  { group: "Tools", items: ["Figma", "Git", "Vercel", "cPanel", "Search Console", "GA4"] },
];

export const experience = [
  {
    period: "2025 — Present",
    role: "Senior Web Developer & Manager",
    place: "Swiftwave Digital, Bahria Town Phase 4, Islamabad",
    text: "Lead website development and manage projects end to end, from planning and design to launch and client handover.",
  },
  {
    period: "2022 — 2025",
    role: "Web Developer",
    place: "Logico Info Tech, Lahore",
    text: "Three years building WordPress and WooCommerce websites for local and international clients.",
  },
  {
    period: "2021 — 2022",
    role: "Freelance Web Developer",
    place: "Self-employed",
    text: "Started out building WordPress websites for small businesses.",
  },
];

// Highlighted project shown in a large spotlight above the project grid.
export const featuredProject = {
  title: "LMS Handling",
  url: "https://lmshandling.com/",
  image: "/projects/lms-handling.webp",
  tag: "Custom Website · Education",
  text: "A complete student support website for Virtual University (VU) students, built for Nibaha Haq. Students pick a service, find their degree and course code, and reach the team on WhatsApp in one tap.",
  points: [
    "Custom-built, fast and mobile-friendly",
    "Degree-wise pages and course-code tables for 600+ VU courses",
    "Handy tools like a CGPA calculator and study scheme",
    "Notes, blog, reviews and one-tap WhatsApp contact",
  ],
};

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
    title: "Bilal Hospital Rawalpindi",
    url: "https://bilal-hospital-site.vercel.app/",
    image: "/projects/bilal-hospital.webp",
    tag: "Next.js · Healthcare",
    text: "Multispecialty hospital website with 24/7 emergency info, specialist clinics, diagnostics and English/Urdu support.",
  },
  {
    title: "Zoom Haier Store",
    url: "https://zoomhaierstore.com/",
    image: "/projects/zoom-haier-store.webp",
    tag: "WooCommerce · E-commerce",
    text: "Online store for an authorized Haier dealer in Lahore, selling ACs, LEDs, fridges and washing machines.",
  },
  {
    title: "The Pro Movers",
    url: "https://www.thepromovers.com/",
    image: "/projects/the-pro-movers.webp",
    tag: "WordPress · Local SEO",
    text: "New York City moving company website with service areas, location pages and free quote forms.",
  },
  {
    title: "eKarobar360",
    url: "https://www.ekarobar360.com/",
    image: "/projects/ekarobar360.webp",
    tag: "Custom Website · SaaS",
    text: "Website for a Pakistani business app covering POS, inventory, customer udhaar, expenses and reports.",
  },
  {
    title: "Aroma Curls",
    url: "https://aromacurls.com/",
    image: "/projects/aroma-curls.webp",
    tag: "Custom Website · E-commerce",
    text: "Curly hair care brand store with collections, bundle builder, hair quiz and order tracking.",
  },
  {
    title: "OPS-Automate",
    url: "https://ops-automate.com/",
    image: "/projects/ops-automate.webp",
    tag: "Custom Website · B2B",
    text: "Lead generation site for a company placing offshore junior accountants with US CPA firms.",
  },
  {
    title: "EIQAN",
    url: "https://www.eiqan.com/",
    image: "/projects/eiqan.webp",
    tag: "Next.js · Transport",
    text: "Student transportation, corporate shuttle and bus rental company in Riyadh, Jeddah and Dammam, Saudi Arabia.",
  },
  {
    title: "Little Explorers World",
    url: "https://littleexplorersworld.com/",
    image: "/projects/little-explorers-world.webp",
    tag: "Custom Website · Local SEO",
    text: "Kids indoor play zone in Bahria Town, Islamabad, with play zones, birthday party packages and bookings.",
  },
  {
    title: "Maximus Custom Clothing",
    url: "https://maximuscustomclothing.com/",
    image: "/projects/maximus-custom-clothing.webp",
    tag: "WordPress · E-commerce",
    text: "Custom suits and shirts brand in New York with appointment booking and an online shop.",
  },
  {
    title: "ACM Asia Cosmetics",
    url: "https://acmpvtltd.com/",
    image: "/projects/acm-cosmetics.webp",
    tag: "Custom Website · Manufacturing",
    text: "Private label cosmetics manufacturer in Pakistan, showcasing 100+ products across 10 categories.",
  },
  {
    title: "Goodwill Build",
    url: "https://goodwillbuild.com/",
    image: "/projects/goodwill-build.webp",
    tag: "WordPress · Construction",
    text: "Construction and luxury renovation company in Islamabad, with services, projects and video showcase.",
  },
  {
    title: "Nasir Oil Expert",
    url: "https://www.nasiroilexpert.com/",
    image: "/projects/nasir-oil-expert.webp",
    tag: "Custom Website · E-commerce",
    text: "Herbal hair oil and shampoo brand with nationwide delivery and an English/Urdu storefront.",
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
    title: "Punjab Auto Stores",
    url: "https://punjabautostores.com/",
    image: "/projects/punjab-auto-stores.webp",
    tag: "WooCommerce · Auto Parts",
    text: "Genuine truck spare parts store with brand catalogues for Hino, Isuzu, Bedford and more.",
  },
  {
    title: "Pioneer Group of Companies",
    url: "https://pioneerdeltagroup.com/",
    image: "/projects/pioneer-delta-group.webp",
    tag: "WordPress · Industrial",
    text: "Industrial valve supplier and seamless pipe distributor based in Karachi, with product catalogue and quote requests.",
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

// Client reviews. Only add reviews your clients actually gave or approved.
// The Reviews section appears automatically once this list has entries.
// Drafts to send to clients for approval are in docs/review-drafts.md.
export const testimonials: { name: string; company: string; url?: string; quote: string }[] = [];

export const stats = [
  { value: `${site.yearsExperience}+`, label: "Years of experience" },
  { value: "25+", label: "Websites built" },
  { value: "5", label: "Countries served" },
];

