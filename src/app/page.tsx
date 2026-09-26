import Image from "next/image";
import { site, services, skills, experience, projects, stats, packages, workSteps } from "@/config/site";
import { Icon } from "@/components/Icon";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#hire", label: "Freelance" },
  { href: "#contact", label: "Contact" },
];

const faqs = [
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

function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

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
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.text },
          })),
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
  const whatsappHref = whatsappLink("Hi Muneeb, I found your website and would like to discuss a project.");

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
          <a href="#contact" className="btn btn-sm header-cta">Hire me</a>
          <details className="mobile-menu">
            <summary aria-label="Open menu">
              <span /><span /><span />
            </summary>
            <ul>
              {nav.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </details>
          <script
            dangerouslySetInnerHTML={{
              __html:
                "document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>a.closest('details').removeAttribute('open')))",
            }}
          />
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="container hero-grid">
            <div>
            <p className="available"><span className="dot" /> Available for freelance projects</p>
            <p className="eyebrow">Digital Marketer · Web Developer · {site.locations.join(" & ")}</p>
            <h1>
              I grow businesses online with <span className="grad">SEO, ads</span> and <span className="grad">websites that convert</span>.
            </h1>
            <p className="lead">
              I&apos;m {site.name}, a digital marketer and web developer with {site.yearsExperience}+ years of experience in
              marketing agencies in Lahore and Islamabad. From websites and SEO to social media, Meta &amp; Google Ads, graphic design
              and video editing, I handle it all in one place.
            </p>
            <div className="cta-row">
              <a href={whatsappHref} className="btn" target="_blank" rel="noopener noreferrer">Get a free consultation</a>
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
            <p className="section-lead">
              Everything a business needs to be found online, stand out on social media and turn visitors into customers.
            </p>
            <div className="grid grid-3">
              {services.map((s) => (
                <article key={s.title} className="card service">
                  <span className="icon"><Icon name={s.icon} /></span>
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
                handling web development, SEO, social media, Meta and Google Ads, graphic design and video editing for clients
                in e-commerce, healthcare, construction, real estate and local services across Pakistan, the USA and the Gulf.
              </p>
              <p>
                Because I do both marketing and development, the websites I build are fast, SEO-ready and set up with proper
                tracking from day one, and the campaigns I run are backed by creatives, videos and landing pages that actually convert.
              </p>
              <p>
                I also work with clients directly as a freelancer, so you get agency-level experience with the speed and
                personal attention of working with one person.
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
              Live websites for clients in Pakistan, the USA, Europe, Saudi Arabia and the UAE. Click any project to visit the site.
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

        <section id="hire" className="section">
          <div className="container">
            <h2>Hire me as a freelancer</h2>
            <p className="section-lead">
              Pick what fits your business. Every project starts with a free consultation and a clear quote.
            </p>
            <div className="grid grid-3">
              {packages.map((p) => (
                <article key={p.title} className={`card package${"featured" in p && p.featured ? " featured" : ""}`}>
                  {"featured" in p && p.featured && <span className="badge">Most popular</span>}
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul className="checks">
                    {p.items.map((i) => (
                      <li key={i}><Icon name="check" size={18} />{i}</li>
                    ))}
                  </ul>
                  <a href={whatsappLink(p.message)} className={`btn${"featured" in p && p.featured ? "" : " btn-ghost"}`} target="_blank" rel="noopener noreferrer">
                    Get a quote
                  </a>
                </article>
              ))}
            </div>

            <h3 className="steps-title">How we&apos;ll work together</h3>
            <ol className="steps">
              {workSteps.map((st, i) => (
                <li key={st.title}>
                  <span className="step-num">{i + 1}</span>
                  <h4>{st.title}</h4>
                  <p>{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="section alt">
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

      <a href={whatsappHref} className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
        </svg>
      </a>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {site.name}. Freelance {site.role}, {site.locations.join(" & ")}.</p>
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
