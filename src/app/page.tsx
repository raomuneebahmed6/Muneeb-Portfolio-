import Image from "next/image";
import { site, services, skills, experience, projects, stats } from "@/config/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const faqs = [
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

function JsonLd() {
  const sameAs = Object.values(site.socials);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        image: `${site.url}${site.photo}`,
        email: `mailto:${site.email}`,
        address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
        knowsAbout: skills.flatMap((s) => s.items),
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: `${site.name} — ${site.role}`,
        description: site.description,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        founder: { "@id": `${site.url}/#person` },
        areaServed: [...site.locations.map((c) => ({ "@type": "City", name: c })), { "@type": "Country", name: "Pakistan" }],
        address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
        },
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Muneeb, I found your website and would like to discuss a project.")}`;

  return (
    <>
      <JsonLd />
      <a href="#main" className="skip">Skip to content</a>

      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label={`${site.name} home`}>
            Rao<span>Muneeb</span>
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className="btn btn-sm">Hire me</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="container hero-grid">
            <div>
            <p className="eyebrow">Digital Marketer · Web Developer · {site.locations.join(" & ")}</p>
            <h1>
              I grow businesses online with <span className="grad">SEO, ads</span> and <span className="grad">websites that convert</span>.
            </h1>
            <p className="lead">
              I&apos;m {site.name}, a digital marketer and web developer with {site.yearsExperience}+ years of experience in
              marketing agencies in Lahore and Islamabad. I plan the strategy, build the website and run the campaigns, all in one place.
            </p>
            <div className="cta-row">
              <a href="#contact" className="btn">Get a free consultation</a>
              <a href="#work" className="btn btn-ghost">See my work</a>
            </div>
            <ul className="stats">
              {stats.map((s) => (
                <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
              ))}
            </ul>
            </div>
            <div className="hero-photo">
              <Image
                src={site.photo}
                alt={`${site.name}, ${site.role} in ${site.locations.join(" and ")}`}
                width={640}
                height={800}
                priority
                sizes="(max-width: 860px) 280px, 400px"
              />
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>Services</h2>
            <p className="section-lead">Everything a business needs to be found online and turn visitors into customers.</p>
            <div className="grid grid-3">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container about">
            <div>
              <h2>About me</h2>
              <p>
                For the last {site.yearsExperience} years I have worked inside digital marketing agencies in Lahore and Islamabad,
                handling SEO, paid advertising, social media and web development for clients in e-commerce, real estate,
                education, healthcare and local services.
              </p>
              <p>
                Because I do both marketing and development, the websites I build are fast, SEO-ready and set up with proper
                tracking from day one, and the campaigns I run are backed by landing pages that actually convert.
              </p>
            </div>
            <div className="skills">
              {skills.map((g) => (
                <div key={g.group}>
                  <h3>{g.group}</h3>
                  <ul className="chips">
                    {g.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <h2>Experience</h2>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.period}>
                  <span className="period">{e.period}</span>
                  <h3>{e.role}</h3>
                  <p className="place">{e.place}</p>
                  <p>{e.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="section alt">
          <div className="container">
            <h2>Websites I&apos;ve built</h2>
            <p className="section-lead">
              Live websites for clients in the USA, Europe and the UAE. Click any project to visit the site.
            </p>
            <div className="grid grid-3">
              {projects.map((p) => (
                <a key={p.title} href={p.url} className="card project" target="_blank" rel="noopener">
                  <Image
                    src={p.image}
                    alt={`${p.title} website homepage`}
                    width={800}
                    height={360}
                    loading="lazy"
                    sizes="(max-width: 700px) 100vw, 360px"
                  />
                  <div className="project-body">
                    <span className="tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <span className="visit">Visit {new URL(p.url).hostname.replace(/^www\./, "")} ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container narrow">
            <h2>Frequently asked questions</h2>
            {faqs.map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container narrow center">
            <h2>Let&apos;s grow your business</h2>
            <p className="section-lead">
              Tell me about your project and I&apos;ll get back to you within 24 hours.
            </p>
            <div className="cta-row center">
              <a href={whatsappHref} className="btn" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              <a href={`mailto:${site.email}`} className="btn btn-ghost">{site.email}</a>
            </div>
            <p className="muted">Or call <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {site.name}. {site.role}, {site.locations.join(" & ")}.</p>
          <ul className="socials">
            {Object.entries(site.socials).map(([k, v]) => (
              <li key={k}><a href={v} target="_blank" rel="noopener noreferrer me">{k[0].toUpperCase() + k.slice(1)}</a></li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
