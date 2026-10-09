import Image from "next/image";
import { site, services, skills, experience, projects, stats, testimonials, featuredProject } from "@/config/site";
import { Icon } from "@/components/Icon";
import { Effects } from "@/components/Effects";
import { RoleRotator } from "@/components/RoleRotator";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Avatar } from "@/components/Avatar";
import { ScrollText } from "@/components/ScrollText";
import { ScrollStatement } from "@/components/ScrollStatement";

const roles = ["Web Developer", "SEO Expert", "Meta Ads Specialist", "Google Ads Expert", "Social Media Marketer", "Graphic Designer", "Video Editor"];

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
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
                I build websites and run ads that bring customers. {site.yearsExperience}+ years, 25+ websites, clients
                all over the world.
              </p>
              <div className="cta-row anim-up d5">
                <a href={whatsappHref} className="btn btn-lg" target="_blank" rel="noopener noreferrer">
                  Let&apos;s work together <Icon name="arrow" size={18} />
                </a>
                <a href="#work" className="btn btn-lg btn-ghost">See my work ↓</a>
              </div>
            </div>

            <div className="hero-visual anim-zoom">
              <div className="avatar-ring" aria-hidden="true" />
              <Avatar />
              <span className="avatar-hint hand" aria-hidden="true">
                <span className="on-mouse">move your mouse 👀</span>
                <span className="on-touch">tap anywhere 👆</span>
              </span>
            </div>
          </div>
        </section>

        <ScrollText
          top={["Websites", "SEO", "Meta Ads", "Google Ads", "Social Media"]}
          bottom={["Graphic Design", "Video Editing", "Online Stores", "Branding"]}
        />

        {/* About */}
        <section id="about" className="section about">
          <div className="container">
            <span className="kicker" data-reveal>About me</span>
            <ScrollStatement
              text="I started freelancing in 2021. Since then I have worked in agencies in Lahore and Islamabad and built websites for brands in Pakistan, the USA, Europe and the Gulf. I do both sides: I build your website and bring people to it with SEO, ads, design and video."
              highlight={["websites", "both", "SEO", "ads", "design", "video"]}
            />
            <div className="about-row">
              <ul className="stats-row">
                {stats.map((s) => (
                  <li key={s.label} data-reveal>
                    <strong><Counter value={s.value} /></strong>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
              <p className="now" data-reveal>
                <span className="dot" /> Currently {current.role} at {current.place.split(",")[0]}
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section soft">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="kicker">What I do</span>
              <h2>Services</h2>
            </div>
            <ul className="service-list">
              {services.map((s, i) => (
                <li key={s.title} className="service-row" data-reveal>
                  <span className="sr-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="sr-icon"><Icon name={s.icon} size={22} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="sr-arrow" aria-hidden="true"><Icon name="arrow" size={20} /></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="kicker">Selected work</span>
              <h2>Websites I&apos;ve built</h2>
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
              <div className="section-head" data-reveal>
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
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="kicker">My journey</span>
              <h2>Where I&apos;ve been</h2>
            </div>
            <ol className="journey">
              {experience.map((e, i) => (
                <li key={e.role + e.period} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="period">{e.period}</span>
                  <h3>{e.role}</h3>
                  <p className="place"><Icon name="pin" size={15} /> {e.place.split(",")[0]}</p>
                </li>
              ))}
            </ol>
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
