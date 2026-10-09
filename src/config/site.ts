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
  role: "Digital Marketer & Web Developer",
  title: "Rao Muneeb — Freelance Digital Marketer & Web Developer | Lahore & Islamabad",
  description: "Rao Muneeb is a freelance digital marketer and web developer with 5+ years of experience in Lahore and Islamabad. Websites, SEO, social media marketing, Meta Ads, Google Ads, graphic design and video editing.",
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
    "social media manager Islamabad",
    "graphic designer Islamabad",
    "video editor Pakistan",
    "freelance digital marketer Pakistan",
    "freelance web developer Pakistan",
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
  { icon: "code", title: "Websites & Online Stores", text: "WordPress, WooCommerce, Shopify or Next.js. Fast, mobile-friendly and built to sell." },
  { icon: "search", title: "SEO", text: "Getting you found on Google, so customers come to you without paying for every click." },
  { icon: "social", title: "Social Media", text: "Posting, page management and content that keeps your brand active and growing." },
  { icon: "meta", title: "Meta Ads", text: "Facebook and Instagram campaigns that bring leads and sales, not just likes." },
  { icon: "ads", title: "Google Ads", text: "Search, Shopping and YouTube ads in front of people already looking for you." },
  { icon: "design", title: "Graphic Design", text: "Posts, ad creatives, logos and banners that look clean and on brand." },
  { icon: "video", title: "Video Editing", text: "Reels, TikToks and video ads with captions, music and motion that stop the scroll." },
  { icon: "chart", title: "Tracking & Reports", text: "GA4, Pixel and Tag Manager set up properly, with simple reports you can understand." },
];

// "Work with me" cards. `message` pre-fills the WhatsApp chat.
export const workWithMe = [
  {
    emoji: "💻",
    title: "Need a website?",
    text: "A new site, an online store or a redesign of your old one. I'll handle design, build, SEO and launch.",
    message: "Hi Muneeb, I need a website. Can we talk?",
  },
  {
    emoji: "📈",
    title: "Need more customers?",
    text: "Monthly social media, Meta Ads and Google Ads, managed by me with a clear report every month.",
    message: "Hi Muneeb, I want help with ads and social media for my business.",
  },
  {
    emoji: "🎨",
    title: "Need design or video?",
    text: "Ad creatives, social posts, logos, reels and video ads. Quick turnaround, no long contracts.",
    message: "Hi Muneeb, I have a design / video task for you.",
  },
];

export const skills = [
  { group: "Marketing", items: ["SEO", "Google Ads", "Meta Ads", "Social Media", "Content Strategy", "Email Marketing"] },
  { group: "Websites", items: ["WordPress CMS", "WooCommerce", "Shopify", "Next.js", "E-commerce", "HTML / CSS / JS"] },
  { group: "Design & Video", items: ["Photoshop", "Illustrator", "Canva", "Premiere Pro", "After Effects", "CapCut"] },
  { group: "Tools", items: ["GA4", "Tag Manager", "Search Console", "Ahrefs / SEMrush", "Meta Business Suite", "Figma"] },
];

export const experience = [
  {
    period: "2025 — Present",
    role: "Senior Web Developer & Manager",
    place: "Swiftwave Digital, Bahria Town Phase 4, Islamabad",
    text: "Lead website development and manage projects end to end, from planning and design to launch, SEO and client handover.",
  },
  {
    period: "2022 — 2025",
    role: "Digital Marketer & Web Developer",
    place: "Logico Info Tech, Lahore",
    text: "Three years building WordPress and WooCommerce websites and running SEO, Google Ads and social media campaigns for local and international clients.",
  },
  {
    period: "2021 — 2022",
    role: "Freelance Web Developer & Digital Marketer",
    place: "Self-employed",
    text: "Started out building WordPress websites, managing social media pages and running first ad campaigns for small businesses.",
  },
];

// Highlighted project shown in a large spotlight above the project grid.
export const featuredProject = {
  title: "Nibaha Haq",
  url: "https://nibahahaq.com/",
  image: "/projects/nibaha-haq.webp",
  tag: "Next.js · Agency Website",
  text: "A complete website for Nibaha Haq, a digital marketing and technology agency. It presents the agency's services, training courses, portfolio and blog in one fast, modern site built to turn visitors into clients.",
  points: [
      "Built with Next.js: fast, SEO-ready and mobile-friendly",
      "8 service areas: SEO, social media, web development, Meta & Google Ads, YouTube automation, graphic design",
      "Courses, portfolio and blog sections",
      "Clear calls to action for free consultations and quotes",
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
    text: "Marketing site for a Pakistani business app covering POS, inventory, customer udhaar, expenses and reports.",
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

export const faqs = [
  {
    q: "Are you available for freelance projects?",
    a: "Yes. Alongside my agency role I take on freelance clients for websites, social media marketing, Meta Ads, Google Ads, graphic design and video editing, either as one-off projects or monthly retainers.",
  },
  {
    q: "Do you also design ad creatives and edit videos?",
    a: "Yes. I design social media posts and ad creatives and edit reels and video ads myself, so your campaigns, content and website all match.",
  },
  {
    q: "Do you work with clients outside Lahore and Islamabad?",
    a: "Yes. I work with businesses across Pakistan and internationally. Most projects run fully online.",
  },
  {
    q: "Can you handle both the website and the marketing?",
    a: "Yes. I build the website with SEO and tracking in place from day one, then run SEO and ad campaigns on top of it, so nothing gets lost between teams.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Technical fixes can help within weeks. Steady growth in rankings and organic traffic usually takes 3 to 6 months, depending on competition.",
  },
];
