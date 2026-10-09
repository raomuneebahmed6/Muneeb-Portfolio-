import Image from "next/image";
import {
  site,
  services,
  skills,
  experience,
  projects,
  stats,
  workWithMe,
  testimonials,
  faqs,
  featuredProject,
} from "@/config/site";
import { Icon } from "@/components/Icon";
import { Effects } from "@/components/Effects";
import { RoleRotator } from "@/components/RoleRotator";
import { ProjectGrid } from "@/components/ProjectGrid";

const roles = ["Web Developer", "SEO Expert", "Meta Ads Specialist", "Google Ads Expert", "Social Media Marketer", "Graphic Designer", "Video Editor"];

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "What I do" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

function JsonLd() {
  const sameAs = Object.values(site.socials).filter(Boolean);
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
        telephone: site.phone,
        address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
        knowsAbout: [...services.map((s) => s.title), ...skills.flatMap((s) => s.items)],
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
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// Splits "25+" into 25 and "+" so the number can count up.
function Counter({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  if (!m) return <>{value}</>;
  return (
    <span data-count={m[1]} data-suffix={m[2]}>
      {value}
    </span>
  );
}

export function Portfolio() {
  const whatsappHref = whatsappLink("Hi Muneeb! I saw your portfolio and would like to talk about a project.");
  const socials = Object.entries(site.socials).filter(([, v]) => v) as [string, string][];
  const current = experience[0];
  const tools = ["WordPress", "WooCommerce", "Shopify", "Next.js", "Meta Ads", "Google Ads", "GA4", "Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Canva", "CapCut", "Figma"];
  const marqueeA = ["Websites", "SEO", "Meta Ads", "Google Ads", "Social Media", "Graphic Design", "Video Editing", "Online Stores"];
  const marqueeB = ["WordPress", "Shopify", "Next.js", "WooCommerce", "Photoshop", "Premiere Pro", "After Effects", "GA4"];

  return (
    <>
      <JsonLd />
      <Effects />
      <a href="#main" className="skip">Skip to content</a>
      <div className="progress" aria-hidden="true" />

      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label={`${site.name}, back to top`}>
            muneeb<span>.</span>
          </a>
          <nav aria-label="Main" className="nav-pill">
            <ul className="nav-links">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <a href={whatsappHref} className="btn btn-sm" target="_blank" rel="noopener noreferrer">
              Let&apos;s talk <span className="wave-sm">👋</span>
            </a>
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
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="blob b1" />
            <span className="blob b2" />
            <span className="dots" />
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="available anim-up"><span className="dot" /> Available for freelance work</p>
              <p className="hello anim-up d1">
                Hey there! <span className="wave" aria-hidden="true">👋</span> I&apos;m
              </p>
              <h1 className="anim-up d2">
                Rao <span className="name-hl">Muneeb</span>
              </h1>
              <p className="role-line anim-up d3">
                a freelance <RoleRotator roles={roles} />
                <span className="sr-only">{roles.join(", ")}</span>
              </p>
              <p className="lead anim-up d4">
                I help small businesses and brands grow online with <strong>websites</strong>, <strong>ads</strong> and{" "}
                <strong>content</strong> that actually bring customers. {site.yearsExperience}+ years in the game, working
                from Islamabad with clients all over the world.
              </p>
              <div className="cta-row anim-up d5">
                <a href={whatsappHref} className="btn btn-lg" target="_blank" rel="noopener noreferrer">
                  Let&apos;s work together <Icon name="arrow" size={18} />
                </a>
                <a href="#work" className="btn btn-lg btn-ghost">See my work ↓</a>
              </div>
              {socials.length > 0 && (
                <ul className="hero-socials anim-up d5">
                  {socials.map(([k, v]) => (
                    <li key={k}>
                      <a href={v} target="_blank" rel="noopener noreferrer me" aria-label={k}>
                        <Icon name={k} size={20} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="hero-visual anim-zoom">
              <div className="polaroid">
                <span className="tape" aria-hidden="true" />
                <Image
                  src={site.photo}
                  alt={`${site.name}, freelance digital marketer and web developer`}
                  width={640}
                  height={800}
                  priority
                  sizes="(max-width: 900px) 260px, 380px"
                />
                <span className="polaroid-caption">Islamabad, PK 📍</span>
              </div>
              <span className="note" aria-hidden="true">
                that&apos;s me!
                <svg viewBox="0 0 80 50" width="70" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M4 6c18 2 40 10 52 30" />
                  <path d="M46 34l10 3 2-11" />
                </svg>
              </span>
              <div className="spin-badge" aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path id="circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                  </defs>
                  <text>
                    <textPath href="#circle" textLength="286" lengthAdjust="spacing">FREELANCER • OPEN TO WORK • </textPath>
                  </text>
                </svg>
                <span>✦</span>
              </div>
              <span className="sticker s1" aria-hidden="true">🚀</span>
              <span className="sticker s2" aria-hidden="true">📈</span>
              <span className="sticker s3" aria-hidden="true">💡</span>
            </div>
          </div>
        </section>

        {/* Skills tape */}
        <section className="tape-band" aria-label="What I work with">
          <div className="tape-row">
            <div className="marquee-track">
              {[...marqueeA, ...marqueeA].map((m, i) => (
                <span key={i} aria-hidden={i >= marqueeA.length}>{m}</span>
              ))}
            </div>
          </div>
          <div className="tape-row alt" aria-hidden="true">
            <div className="marquee-track reverse">
              {[...marqueeB, ...marqueeB].map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
          </div>
        </section>

        {/* About (bento grid) */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="kicker">About me</span>
              <h2>A bit about me <span className="hand-inline">(the short version)</span></h2>
            </div>
            <div className="bento">
              <article className="bento-card b-intro" data-reveal>
                <p className="big">
                  Hi! I&apos;m Muneeb. I started freelancing in 2021, building WordPress sites and running small ad campaigns
                  for local businesses. Since then I&apos;ve worked in agencies in Lahore and Islamabad and built 25+ websites
                  for clients in Pakistan, the USA, Europe, Saudi Arabia and the UAE.
                </p>
                <p>
                  What makes me different? I do <b>both</b> sides: I build your website <i>and</i> bring people to it with
                  SEO, ads, design and video. One person, one plan, no back-and-forth between five different teams.
                </p>
              </article>

              <article className="bento-card b-location" data-reveal>
                <span className="b-emoji">📍</span>
                <h3>Based in Islamabad</h3>
                <p>Bahria Town, Pakistan. Working with clients worldwide, mostly online.</p>
              </article>

              <article className="bento-card b-now" data-reveal>
                <span className="b-label"><span className="dot" /> Currently</span>
                <h3>{current.role}</h3>
                <p>at {current.place.split(",")[0]}, and taking freelance projects on the side.</p>
              </article>

              <article className="bento-card b-stats" data-reveal>
                {stats.map((s) => (
                  <div key={s.label}>
                    <strong><Counter value={s.value} /></strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </article>

              <article className="bento-card b-tools" data-reveal>
                <h3>My toolbox 🧰</h3>
                <ul className="chips">
                  {tools.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>

              <a href={whatsappHref} className="bento-card b-cta" target="_blank" rel="noopener noreferrer" data-reveal>
                <span className="hand">I reply fast on WhatsApp ⚡</span>
                <span className="b-cta-row">Say hi <Icon name="arrow" size={18} /></span>
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section soft">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="kicker">What I do</span>
              <h2>Everything you need to grow online, from one person</h2>
            </div>
            <div className="grid services-grid">
              {services.map((s, i) => (
                <article key={s.title} className="card service" data-reveal style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
                  <span className="icon"><Icon name={s.icon} size={24} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="kicker">Selected work</span>
              <h2>Websites I&apos;ve built</h2>
              <p className="section-lead">Real, live websites for real clients. Click any of them and have a look around.</p>
            </div>

            <a href={featuredProject.url} className="featured-project" target="_blank" rel="noopener" data-reveal>
              <div className="fp-shot">
                <span className="fp-browser" aria-hidden="true"><i /><i /><i /></span>
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.title} website homepage`}
                  width={1200}
                  height={675}
                  sizes="(max-width: 900px) 100vw, 640px"
                />
              </div>
              <div className="fp-body">
                <span className="fp-label">★ Featured project</span>
                <h3>{featuredProject.title}</h3>
                <span className="tag">{featuredProject.tag}</span>
                <p>{featuredProject.text}</p>
                <ul className="checks">
                  {featuredProject.points.map((pt) => (
                    <li key={pt}><span className="check"><Icon name="check" size={14} /></span>{pt}</li>
                  ))}
                </ul>
                <span className="btn">
                  Visit website <Icon name="arrow" size={16} />
                </span>
              </div>
            </a>

            <ProjectGrid
              projects={projects}
              allLabel="All"
              visitLabel="Visit website"
              altSuffix="website homepage"
              showAllLabel="Show all projects"
            />
          </div>
        </section>

        {testimonials.length > 0 && (
          <section id="reviews" className="section soft">
            <div className="container">
              <div className="section-head center" data-reveal>
                <span className="kicker">Kind words</span>
                <h2>What clients say</h2>
              </div>
              <div className="grid grid-3">
                {testimonials.map((r) => (
                  <figure key={r.name + r.company} className="card review" data-reveal>
                    <blockquote>“{r.quote}”</blockquote>
                    <figcaption>
                      <strong>{r.name}</strong>
                      <span>{r.company}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Journey */}
        <section id="journey" className="section soft">
          <div className="container narrow">
            <div className="section-head center" data-reveal>
              <span className="kicker">My journey</span>
              <h2>Where I&apos;ve been</h2>
            </div>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.period} data-reveal>
                  <span className="period">{e.period}</span>
                  <h3>{e.role}</h3>
                  <p className="place"><Icon name="pin" size={16} /> {e.place}</p>
                  <p>{e.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Work with me */}
        <section id="hire" className="section">
          <div className="container">
            <div className="section-head center" data-reveal>
              <span className="kicker">Work with me</span>
              <h2>How can I help you?</h2>
              <p className="section-lead">Pick what sounds like you, send me a message, and we&apos;ll figure out the rest together.</p>
            </div>
            <div className="grid grid-3">
              {workWithMe.map((w, i) => (
                <a
                  key={w.title}
                  href={whatsappLink(w.message)}
                  className="card help-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="help-emoji" aria-hidden="true">{w.emoji}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                  <span className="visit">Let&apos;s talk <Icon name="arrow" size={16} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section soft">
          <div className="container narrow">
            <div className="section-head center" data-reveal>
              <span className="kicker">FAQ</span>
              <h2>Questions people ask me</h2>
            </div>
            <div data-reveal>
              {faqs.map((f) => (
                <details key={f.q} className="faq">
                  <summary>{f.q}<span className="plus" aria-hidden="true" /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-card" data-reveal>
              <span className="hand contact-hand">Got a project in mind?</span>
              <h2>Let&apos;s make it happen <span className="rocket">🚀</span></h2>
              <p>Tell me a little about your business and what you need. I&apos;ll get back to you within 24 hours, usually much sooner.</p>
              <a href={`mailto:${site.email}`} className="big-email">{site.email}</a>
              <div className="contact-actions">
                <a href={whatsappHref} className="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp <Icon name="arrow" size={18} />
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-outline-light btn-lg">
                  <Icon name="phone" size={18} /> {site.phone}
                </a>
              </div>
            </div>
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
          <a href="#top" className="logo logo-light">muneeb<span>.</span></a>
          <ul className="footer-links">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
          {socials.length > 0 && (
            <ul className="footer-socials">
              {socials.map(([k, v]) => (
                <li key={k}>
                  <a href={v} target="_blank" rel="noopener noreferrer me" aria-label={k}>
                    <Icon name={k} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}. Designed &amp; built by me in Islamabad.</p>
          <a href="#top" className="to-top">
            Back to top <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
