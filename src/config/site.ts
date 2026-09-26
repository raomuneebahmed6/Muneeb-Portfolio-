// Edit this file to update everything on the site: text, contact details, links.
// Text shown to visitors has two versions: `en` (English) and `ur` (Roman Urdu, shown at /ur).

export type Lang = "en" | "ur";
export type L = { en: string; ur: string };

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
  title: {
    en: "Rao Muneeb — Freelance Digital Marketer & Web Developer | Lahore & Islamabad",
    ur: "Rao Muneeb — Freelance Digital Marketer aur Web Developer | Lahore aur Islamabad",
  },
  description: {
    en: "Rao Muneeb is a freelance digital marketer and web developer with 5+ years of experience in Lahore and Islamabad. Websites, SEO, social media marketing, Meta Ads, Google Ads, graphic design and video editing.",
    ur: "Rao Muneeb Lahore aur Islamabad mein 5+ saal ke tajurbe wale freelance digital marketer aur web developer hain. Websites, SEO, social media marketing, Meta Ads, Google Ads, graphic design aur video editing.",
  },
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

export const services = [
  {
    icon: "code",
    title: { en: "Website Development", ur: "Website Development" },
    text: {
      en: "Fast, mobile-first websites and online stores in WordPress, WooCommerce, Shopify and Next.js, built to rank and to turn visitors into leads.",
      ur: "WordPress, WooCommerce, Shopify aur Next.js mein fast aur mobile-friendly websites aur online stores, jo Google par rank karein aur visitors ko customers banayein.",
    },
  },
  {
    icon: "search",
    title: { en: "Search Engine Optimization", ur: "SEO (Search Engine Optimization)" },
    text: {
      en: "Technical audits, keyword research, on-page optimization, local SEO and link building that bring steady organic traffic.",
      ur: "Technical audit, keyword research, on-page optimization, local SEO aur link building, taake Google se musalsal free traffic aaye.",
    },
  },
  {
    icon: "social",
    title: { en: "Social Media Marketing", ur: "Social Media Marketing" },
    text: {
      en: "Content calendars, posting and page management that grow brands on Facebook, Instagram, TikTok and LinkedIn.",
      ur: "Content calendar, posting aur page management jo Facebook, Instagram, TikTok aur LinkedIn par aapke brand ko grow kare.",
    },
  },
  {
    icon: "meta",
    title: { en: "Meta Ads (Facebook & Instagram)", ur: "Meta Ads (Facebook aur Instagram)" },
    text: {
      en: "Lead generation, sales and awareness campaigns with sharp targeting, retargeting and Pixel tracking, built around cost per result.",
      ur: "Leads, sales aur awareness ki campaigns, sahi targeting, retargeting aur Pixel tracking ke sath, taake har result kam kharche mein mile.",
    },
  },
  {
    icon: "ads",
    title: { en: "Google Ads", ur: "Google Ads" },
    text: {
      en: "Search, Display, Shopping and YouTube campaigns that put your business in front of people already searching for it.",
      ur: "Search, Display, Shopping aur YouTube campaigns jo aapka business un logon ke samne laayein jo pehle se wohi cheez dhoond rahe hain.",
    },
  },
  {
    icon: "design",
    title: { en: "Graphic Design", ur: "Graphic Design" },
    text: {
      en: "Social media posts, ad creatives, logos, banners, flyers and brand kits that look professional and stay on brand.",
      ur: "Social media posts, ad creatives, logo, banners, flyers aur brand kits jo professional lagein aur aapke brand ke mutabiq hon.",
    },
  },
  {
    icon: "video",
    title: { en: "Video Editing", ur: "Video Editing" },
    text: {
      en: "Reels, TikToks, YouTube videos and video ads with clean cuts, captions, music and motion graphics that stop the scroll.",
      ur: "Reels, TikToks, YouTube videos aur video ads, saaf editing, captions, music aur motion graphics ke sath jo log scroll karte hue ruk kar dekhein.",
    },
  },
  {
    icon: "funnel",
    title: { en: "Landing Pages & CRO", ur: "Landing Pages aur CRO" },
    text: {
      en: "High-converting landing pages and funnel fixes so your ad budget turns into real enquiries and sales.",
      ur: "Aise landing pages aur funnel jo aapke ads ke paise ko asli enquiries aur sales mein badlein.",
    },
  },
  {
    icon: "chart",
    title: { en: "Analytics & Tracking", ur: "Analytics aur Tracking" },
    text: {
      en: "GA4, Google Tag Manager, Meta Pixel and Conversions API setups, with clear monthly reports on what is working.",
      ur: "GA4, Google Tag Manager, Meta Pixel aur Conversions API ka setup, aur har mahine saaf report ke kya kaam kar raha hai.",
    },
  },
];

// Ways to work together as a freelancer. `message` pre-fills the WhatsApp chat.
export const packages = [
  {
    title: { en: "Website Project", ur: "Website Project" },
    text: {
      en: "A new website, online store or redesign, delivered ready to rank and convert.",
      ur: "Nayi website, online store ya purani website ka naya design, jo rank bhi kare aur sales bhi laaye.",
    },
    items: {
      en: ["Design & development", "Mobile-first & fast", "On-page SEO & tracking setup", "Training and support after launch"],
      ur: ["Design aur development", "Mobile-friendly aur fast", "On-page SEO aur tracking setup", "Launch ke baad training aur support"],
    },
    message: "Hi Muneeb, I need a website. Can we discuss?",
  },
  {
    title: { en: "Monthly Marketing", ur: "Monthly Marketing" },
    text: {
      en: "Ongoing growth for your brand, managed end to end every month.",
      ur: "Har mahine aapke brand ki growth, shuru se aakhir tak main sambhalta hoon.",
    },
    items: {
      en: ["Social media management", "Meta Ads & Google Ads", "Ad creatives & reels", "Monthly performance report"],
      ur: ["Social media management", "Meta Ads aur Google Ads", "Ad creatives aur reels", "Har mahine performance report"],
    },
    message: "Hi Muneeb, I'm interested in monthly social media and ads management.",
    featured: true,
  },
  {
    title: { en: "Creative & One-off Tasks", ur: "Creative aur Single Tasks" },
    text: {
      en: "Quick, high-quality work when you just need one thing done well.",
      ur: "Jab sirf ek kaam achi quality mein aur jaldi chahiye.",
    },
    items: {
      en: ["Graphic design & branding", "Video editing & reels", "SEO audit", "Ad account or Pixel setup"],
      ur: ["Graphic design aur branding", "Video editing aur reels", "SEO audit", "Ad account ya Pixel setup"],
    },
    message: "Hi Muneeb, I have a design / video / one-off task for you.",
  },
];

export const workSteps = [
  {
    title: { en: "Free consultation", ur: "Free consultation" },
    text: {
      en: "We talk about your business, goals and budget on a call or WhatsApp.",
      ur: "Call ya WhatsApp par aapke business, goals aur budget ki baat hoti hai.",
    },
  },
  {
    title: { en: "Strategy & proposal", ur: "Strategy aur proposal" },
    text: {
      en: "You get a clear plan with scope, timeline and price. No surprises.",
      ur: "Aapko kaam, time aur price ka saaf plan milta hai. Koi chhupi baat nahi.",
    },
  },
  {
    title: { en: "Build & launch", ur: "Kaam aur launch" },
    text: {
      en: "I design, build and launch, sharing progress with you at every step.",
      ur: "Main design, development aur launch karta hoon, aur har qadam par aapko update deta hoon.",
    },
  },
  {
    title: { en: "Grow & report", ur: "Growth aur report" },
    text: {
      en: "I track results, send reports and keep improving what works.",
      ur: "Main results track karta hoon, report bhejta hoon aur jo kaam kar raha hai use aur behtar karta hoon.",
    },
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
    period: { en: "2025 — Present", ur: "2025 — Ab tak" },
    role: "Senior Web Developer & Manager",
    place: "Swiftwave Digital, Bahria Town Phase 4, Islamabad",
    text: {
      en: "Lead website development and manage projects end to end, from planning and design to launch, SEO and client handover.",
      ur: "Website development ko lead karta hoon aur projects shuru se aakhir tak manage karta hoon: planning, design, launch, SEO aur client handover.",
    },
  },
  {
    period: { en: "2022 — 2025", ur: "2022 — 2025" },
    role: "Digital Marketer & Web Developer",
    place: "Logico Info Tech, Lahore",
    text: {
      en: "Three years building WordPress and WooCommerce websites and running SEO, Google Ads and social media campaigns for local and international clients.",
      ur: "Teen saal tak local aur international clients ke liye WordPress aur WooCommerce websites banayi aur SEO, Google Ads aur social media campaigns chalayi.",
    },
  },
  {
    period: { en: "2021 — 2022", ur: "2021 — 2022" },
    role: "Freelance Web Developer & Digital Marketer",
    place: "Self-employed",
    text: {
      en: "Started out building WordPress websites, managing social media pages and running first ad campaigns for small businesses.",
      ur: "Choti businesses ke liye WordPress websites, social media pages aur pehli ad campaigns se kaam ka aaghaz kiya.",
    },
  },
];

// Highlighted project shown in a large spotlight above the project grid.
export const featuredProject = {
  title: "Nibaha Haq",
  url: "https://nibahahaq.com/",
  image: "/projects/nibaha-haq.webp",
  tag: "Next.js · Agency Website",
  text: {
    en: "A complete website for Nibaha Haq, a digital marketing and technology agency. It presents the agency's services, training courses, portfolio and blog in one fast, modern site built to turn visitors into clients.",
    ur: "Nibaha Haq, ek digital marketing aur technology agency, ki mukammal website. Is mein agency ki services, training courses, portfolio aur blog ek hi fast aur modern website mein hain, jo visitors ko clients banane ke liye bani hai.",
  },
  points: {
    en: [
      "Built with Next.js: fast, SEO-ready and mobile-friendly",
      "8 service areas: SEO, social media, web development, Meta & Google Ads, YouTube automation, graphic design",
      "Courses, portfolio and blog sections",
      "Clear calls to action for free consultations and quotes",
    ],
    ur: [
      "Next.js se bani: fast, SEO-ready aur mobile-friendly",
      "8 services: SEO, social media, web development, Meta aur Google Ads, YouTube automation, graphic design",
      "Courses, portfolio aur blog ke sections",
      "Free consultation aur quote ke liye saaf buttons",
    ],
  },
};

// Live client websites. Keep only links that still work.
export const projects = [
  {
    title: "AGC Renovation LLC",
    url: "https://www.agcrenovationllc.pro/",
    image: "/projects/agc-renovation.webp",
    tag: "WordPress · Local SEO",
    text: {
      en: "Home renovation and remodeling contractor in Chicago, with service pages, project gallery and quote requests.",
      ur: "Chicago ki home renovation company, service pages, projects gallery aur quote form ke sath.",
    },
  },
  {
    title: "Bilal Hospital Rawalpindi",
    url: "https://bilal-hospital-site.vercel.app/",
    image: "/projects/bilal-hospital.webp",
    tag: "Next.js · Healthcare",
    text: {
      en: "Multispecialty hospital website with 24/7 emergency info, specialist clinics, diagnostics and English/Urdu support.",
      ur: "Rawalpindi ke hospital ki website: 24/7 emergency, specialist clinics, diagnostics aur English/Urdu dono zabanein.",
    },
  },
  {
    title: "Zoom Haier Store",
    url: "https://zoomhaierstore.com/",
    image: "/projects/zoom-haier-store.webp",
    tag: "WooCommerce · E-commerce",
    text: {
      en: "Online store for an authorized Haier dealer in Lahore, selling ACs, LEDs, fridges and washing machines.",
      ur: "Lahore mein Haier ke authorized dealer ka online store: AC, LED, fridge aur washing machines.",
    },
  },
  {
    title: "The Pro Movers",
    url: "https://www.thepromovers.com/",
    image: "/projects/the-pro-movers.webp",
    tag: "WordPress · Local SEO",
    text: {
      en: "New York City moving company website with service areas, location pages and free quote forms.",
      ur: "New York ki moving company ki website, service areas, location pages aur free quote form ke sath.",
    },
  },
  {
    title: "eKarobar360",
    url: "https://www.ekarobar360.com/",
    image: "/projects/ekarobar360.webp",
    tag: "Custom Website · SaaS",
    text: {
      en: "Marketing site for a Pakistani business app covering POS, inventory, customer udhaar, expenses and reports.",
      ur: "Pakistani business app ki website: POS, inventory, customer udhaar, expenses aur reports.",
    },
  },
  {
    title: "Aroma Curls",
    url: "https://aromacurls.com/",
    image: "/projects/aroma-curls.webp",
    tag: "Custom Website · E-commerce",
    text: {
      en: "Curly hair care brand store with collections, bundle builder, hair quiz and order tracking.",
      ur: "Curly hair products ka online store: collections, bundle builder, hair quiz aur order tracking.",
    },
  },
  {
    title: "OPS-Automate",
    url: "https://ops-automate.com/",
    image: "/projects/ops-automate.webp",
    tag: "Custom Website · B2B",
    text: {
      en: "Lead generation site for a company placing offshore junior accountants with US CPA firms.",
      ur: "US ki CPA firms ko offshore accountants dene wali company ki lead generation website.",
    },
  },
  {
    title: "EIQAN",
    url: "https://www.eiqan.com/",
    image: "/projects/eiqan.webp",
    tag: "Next.js · Transport",
    text: {
      en: "Student transportation, corporate shuttle and bus rental company in Riyadh, Jeddah and Dammam, Saudi Arabia.",
      ur: "Saudi Arabia (Riyadh, Jeddah, Dammam) ki student transport, corporate shuttle aur bus rental company.",
    },
  },
  {
    title: "Little Explorers World",
    url: "https://littleexplorersworld.com/",
    image: "/projects/little-explorers-world.webp",
    tag: "Custom Website · Local SEO",
    text: {
      en: "Kids indoor play zone in Bahria Town, Islamabad, with play zones, birthday party packages and bookings.",
      ur: "Bahria Town Islamabad ka bachon ka indoor play zone: play zones, birthday party packages aur booking.",
    },
  },
  {
    title: "Maximus Custom Clothing",
    url: "https://maximuscustomclothing.com/",
    image: "/projects/maximus-custom-clothing.webp",
    tag: "WordPress · E-commerce",
    text: {
      en: "Custom suits and shirts brand in New York with appointment booking and an online shop.",
      ur: "New York ka custom suits aur shirts brand, appointment booking aur online shop ke sath.",
    },
  },
  {
    title: "ACM Asia Cosmetics",
    url: "https://acmpvtltd.com/",
    image: "/projects/acm-cosmetics.webp",
    tag: "Custom Website · Manufacturing",
    text: {
      en: "Private label cosmetics manufacturer in Pakistan, showcasing 100+ products across 10 categories.",
      ur: "Pakistan ki private label cosmetics manufacturing company, 10 categories mein 100+ products.",
    },
  },
  {
    title: "Goodwill Build",
    url: "https://goodwillbuild.com/",
    image: "/projects/goodwill-build.webp",
    tag: "WordPress · Construction",
    text: {
      en: "Construction and luxury renovation company in Islamabad, with services, projects and video showcase.",
      ur: "Islamabad ki construction aur luxury renovation company, services, projects aur videos ke sath.",
    },
  },
  {
    title: "Nasir Oil Expert",
    url: "https://www.nasiroilexpert.com/",
    image: "/projects/nasir-oil-expert.webp",
    tag: "Custom Website · E-commerce",
    text: {
      en: "Herbal hair oil and shampoo brand with nationwide delivery and an English/Urdu storefront.",
      ur: "Herbal hair oil aur shampoo ka brand, poore Pakistan mein delivery aur English/Urdu store.",
    },
  },
  {
    title: "MidlandPCS",
    url: "https://midlandpcs.com/",
    image: "/projects/midlandpcs.webp",
    tag: "WordPress · Business",
    text: {
      en: "Computer, phone, tablet and console repair shop in Columbia, South Carolina, with service listings and contact forms.",
      ur: "Columbia, South Carolina (USA) ki computer, phone aur console repair shop ki website.",
    },
  },
  {
    title: "Phone 1st Stop",
    url: "https://www.phone1ststop.com/",
    image: "/projects/phone-1st-stop.webp",
    tag: "WordPress · Services",
    text: {
      en: "Phone, laptop and game console repair business in Fort Worth, Texas, built to turn local searches into calls.",
      ur: "Fort Worth, Texas (USA) ka phone aur laptop repair business, jo local searches se calls laane ke liye bana.",
    },
  },
  {
    title: "Punjab Auto Stores",
    url: "https://punjabautostores.com/",
    image: "/projects/punjab-auto-stores.webp",
    tag: "WooCommerce · Auto Parts",
    text: {
      en: "Genuine truck spare parts store with brand catalogues for Hino, Isuzu, Bedford and more.",
      ur: "Truck ke genuine spare parts ka store, Hino, Isuzu, Bedford aur baqi brands ke catalogue ke sath.",
    },
  },
  {
    title: "Pioneer Group of Companies",
    url: "https://pioneerdeltagroup.com/",
    image: "/projects/pioneer-delta-group.webp",
    tag: "WordPress · Industrial",
    text: {
      en: "Industrial valve supplier and seamless pipe distributor based in Karachi, with product catalogue and quote requests.",
      ur: "Karachi ki industrial valves aur pipes supply karne wali company, product catalogue aur quote form ke sath.",
    },
  },
  {
    title: "Shop None of Us",
    url: "https://shopnoneofus.de/",
    image: "/projects/shop-none-of-us.webp",
    tag: "WooCommerce · Fashion",
    text: {
      en: "Streetwear store for hoodies, joggers and tracksuits, with collections, product variations and order tracking.",
      ur: "Hoodies, joggers aur tracksuits ka streetwear store, collections aur order tracking ke sath.",
    },
  },
  {
    title: "Trendzent",
    url: "https://trendzent.com/",
    image: "/projects/trendzent.webp",
    tag: "WordPress · Events",
    text: {
      en: "Event management and production company in New Jersey, with services, gallery and enquiry forms.",
      ur: "New Jersey (USA) ki event management company, services, gallery aur enquiry form ke sath.",
    },
  },
  {
    title: "UAE Vibes 360",
    url: "https://uaevibes360.com/",
    image: "/projects/uae-vibes-360.webp",
    tag: "WordPress · News & Blog",
    text: {
      en: "News and lifestyle magazine covering things to do, culture and cinema in the UAE.",
      ur: "UAE ki news aur lifestyle magazine: ghoomne ki jagahein, culture aur cinema.",
    },
  },
];

// Client reviews. Only add reviews your clients actually gave or approved.
// The Reviews section appears automatically once this list has entries.
// Drafts to send to clients for approval are in docs/review-drafts.md.
export const testimonials: { name: string; company: string; url?: string; quote: string }[] = [];

export const stats = [
  { value: `${site.yearsExperience}+`, label: { en: "Years of experience", ur: "Saal ka tajurba" } },
  { value: "25+", label: { en: "Websites built", ur: "Websites banayi" } },
  { value: "2", label: { en: "Cities: Lahore & Islamabad", ur: "Shehar: Lahore aur Islamabad" } },
];

export const faqs = [
  {
    q: { en: "Are you available for freelance projects?", ur: "Kya aap freelance projects lete hain?" },
    a: {
      en: "Yes. Alongside my agency role I take on freelance clients for websites, social media marketing, Meta Ads, Google Ads, graphic design and video editing, either as one-off projects or monthly retainers.",
      ur: "Ji haan. Agency job ke sath main freelance clients ke liye websites, social media marketing, Meta Ads, Google Ads, graphic design aur video editing ka kaam karta hoon, chahe ek project ho ya monthly kaam.",
    },
  },
  {
    q: { en: "Do you also design ad creatives and edit videos?", ur: "Kya aap ad creatives aur videos bhi banate hain?" },
    a: {
      en: "Yes. I design social media posts and ad creatives and edit reels and video ads myself, so your campaigns, content and website all match.",
      ur: "Ji haan. Social media posts, ad creatives, reels aur video ads main khud banata hoon, is liye aapki campaigns, content aur website sab ek jaisa professional lagta hai.",
    },
  },
  {
    q: { en: "Do you work with clients outside Lahore and Islamabad?", ur: "Kya aap Lahore aur Islamabad se bahar ke clients ke sath kaam karte hain?" },
    a: {
      en: "Yes. I work with businesses across Pakistan and internationally. Most projects run fully online.",
      ur: "Ji haan. Main poore Pakistan aur bahar ke mulkon ke clients ke sath kaam karta hoon. Zyada tar kaam online hi hota hai.",
    },
  },
  {
    q: { en: "Can you handle both the website and the marketing?", ur: "Kya website aur marketing dono aap sambhal sakte hain?" },
    a: {
      en: "Yes. I build the website with SEO and tracking in place from day one, then run SEO and ad campaigns on top of it, so nothing gets lost between teams.",
      ur: "Ji haan. Main website pehle din se SEO aur tracking ke sath banata hoon, phir usi par SEO aur ads chalata hoon, is liye kuch bhi beech mein nahi rehta.",
    },
  },
  {
    q: { en: "How long does SEO take to show results?", ur: "SEO ka result kitne time mein aata hai?" },
    a: {
      en: "Technical fixes can help within weeks. Steady growth in rankings and organic traffic usually takes 3 to 6 months, depending on competition.",
      ur: "Technical fixes ka faida kuch hafton mein nazar aa jata hai. Rankings aur traffic mein pakki growth aam taur par 3 se 6 mahine leti hai, competition ke hisaab se.",
    },
  },
];
