import Image from "next/image";
import {
  site,
  services,
  skills,
  experience,
  projects,
  stats,
  packages,
  workSteps,
  testimonials,
  faqs,
  featuredProject,
  type Lang,
} from "@/config/site";
import { ui } from "@/config/ui";
import { Icon } from "@/components/Icon";
import { Effects } from "@/components/Effects";
import { RoleRotator } from "@/components/RoleRotator";
import { ProjectGrid } from "@/components/ProjectGrid";

function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

function JsonLd({ lang }: { lang: Lang }) {
  const sameAs = Object.values(site.socials).filter(Boolean);
  const pageUrl = lang === "en" ? site.url : `${site.url}/ur`;
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
        address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
        knowsAbout: skills.flatMap((s) => s.items),
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: `${site.name} — ${site.role}`,
        description: site.description.en,
        url: site.url,
        image: `${site.url}${site.photo}`,
        telephone: site.phone,
        email: site.email,
        founder: { "@id": `${site.url}/#person` },
        areaServed: [...site.locations.map((c) => ({ "@type": "City", name: c })), { "@type": "Country", name: "Pakistan" }],
        address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title.en, description: s.text.en },
          })),
        },
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: ["en", "ur-Latn"],
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "FAQPage",
        url: pageUrl,
        inLanguage: lang === "en" ? "en" : "ur-Latn",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q[lang],
          acceptedAnswer: { "@type": "Answer", text: f.a[lang] },
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

export function Portfolio({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const whatsappHref = whatsappLink(t.waMessage);
  const nav = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#work", label: t.nav.work },
    { href: "#hire", label: t.nav.hire },
    { href: "#contact", label: t.nav.contact },
  ];
  const [h1, h2, h3, h4, h5] = t.headline;
  const socials = Object.entries(site.socials).filter(([, v]) => v) as [string, string][];
  const brands = [featuredProject.title, ...projects.map((p) => p.title)];

  return (
    <div lang={lang === "en" ? "en" : "ur-Latn"}>
      <JsonLd lang={lang} />
      <Effects />
      <a href="#main" className="skip">Skip to content</a>
      <div className="progress" aria-hidden="true" />

      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label={`${site.name} home`}>
            <span className="logo-mark">RM</span>
            <span className="logo-text">Rao <b>Muneeb</b></span>
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <a href={t.switchLang.href} className="lang-switch" hrefLang={lang === "en" ? "ur-Latn" : "en"}>
              {t.switchLang.label}
            </a>
            <a href="#contact" className="btn btn-sm">{t.hireMe}</a>
            <details className="mobile-menu">
              <summary aria-label={t.menu}>
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
            <span className="grid-lines" />
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="available anim-up"><span className="dot" /> {t.available}</p>
              <p className="role-line anim-up d1">
                {t.iAm} <RoleRotator roles={t.roles} />
                <span className="sr-only">{t.roles.join(", ")}</span>
              </p>
              <h1 className="anim-up d2">
                {h1}<span className="grad">{h2}</span>{h3}<span className="grad">{h4}</span>{h5}
              </h1>
              <p className="lead anim-up d3">{t.lead(site.yearsExperience)}</p>
              <div className="cta-row anim-up d4">
                <a href={whatsappHref} className="btn btn-lg" target="_blank" rel="noopener noreferrer">
                  {t.consult} <Icon name="arrow" size={18} />
                </a>
                <a href="#work" className="btn btn-lg btn-ghost">{t.seeWork}</a>
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
              <div className="photo-frame">
                <span className="ring" aria-hidden="true" />
                <Image src={site.photo} alt={t.photoAlt} width={640} height={800} priority sizes="(max-width: 860px) 300px, 420px" />
              </div>
              <div className="float-card fc1">
                <strong><Counter value={`${site.yearsExperience}+`} /></strong>
                <span>{t.badges.years}</span>
              </div>
              <div className="float-card fc2">
                <strong><Counter value="25+" /></strong>
                <span>{t.badges.sites}</span>
              </div>
              <div className="float-card fc3">
                <span className="fc-icon"><Icon name="ads" size={20} /></span>
                <span>{t.badges.ads}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Brands marquee */}
        <section className="marquee-band" aria-label={t.brandsTitle}>
          <p className="marquee-title">{t.brandsTitle}</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...brands, ...brands].map((b, i) => (
                <span key={i} aria-hidden={i >= brands.length}>{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="kicker">{t.servicesTitle}</span>
              <h2>{t.servicesLead}</h2>
            </div>
            <div className="grid grid-3 services-grid">
              {services.map((s, i) => (
                <article key={s.title.en} className="card service" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <span className="icon"><Icon name={s.icon} size={26} /></span>
                  <h3>{s.title[lang]}</h3>
                  <p>{s.text[lang]}</p>
                  <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section soft">
          <div className="container about">
            <div data-reveal>
              <span className="kicker">{t.aboutTitle}</span>
              <h2>{site.name}</h2>
              {t.about(site.yearsExperience).map((p) => <p key={p}>{p}</p>)}
              <ul className="stats">
                {stats.map((s) => (
                  <li key={s.label.en}>
                    <strong><Counter value={s.value} /></strong>
                    <span>{s.label[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills" data-reveal>
              {skills.map((g) => (
                <div key={g.group} className="skill-group">
                  <h3>{g.group}</h3>
                  <ul className="chips">
                    {g.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="container narrow">
            <div className="section-head center" data-reveal>
              <h2>{t.experienceTitle}</h2>
            </div>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.period.en} data-reveal>
                  <span className="period">{e.period[lang]}</span>
                  <h3>{e.role}</h3>
                  <p className="place"><Icon name="pin" size={16} /> {e.place}</p>
                  <p>{e.text[lang]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section soft">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="kicker">{t.nav.work}</span>
              <h2>{t.workTitle}</h2>
              <p className="section-lead">{t.workLead}</p>
            </div>
            <a href={featuredProject.url} className="featured-project" target="_blank" rel="noopener" data-reveal>
              <div className="fp-shot">
                <span className="fp-browser" aria-hidden="true"><i /><i /><i /></span>
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.title} ${t.screenshotAlt}`}
                  width={1200}
                  height={675}
                  sizes="(max-width: 900px) 100vw, 640px"
                />
              </div>
              <div className="fp-body">
                <span className="fp-label">★ {t.featuredLabel}</span>
                <h3>{featuredProject.title}</h3>
                <span className="tag">{featuredProject.tag}</span>
                <p>{featuredProject.text[lang]}</p>
                <ul className="checks">
                  {featuredProject.points[lang].map((pt) => (
                    <li key={pt}><span className="check"><Icon name="check" size={14} /></span>{pt}</li>
                  ))}
                </ul>
                <span className="btn">
                  {t.visitSite} <Icon name="arrow" size={16} />
                </span>
              </div>
            </a>

            <ProjectGrid
              projects={projects.map((p) => ({ title: p.title, url: p.url, image: p.image, tag: p.tag, text: p.text[lang] }))}
              allLabel={t.filterAll}
              visitLabel={t.visitSite}
              altSuffix={t.screenshotAlt}
              showAllLabel={t.showAll}
            />
          </div>
        </section>

        {testimonials.length > 0 && (
          <section id="reviews" className="section">
            <div className="container">
              <div className="section-head center" data-reveal>
                <h2>{t.reviewsTitle}</h2>
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

        {/* Freelance packages + process */}
        <section id="hire" className="section">
          <div className="container">
            <div className="section-head center" data-reveal>
              <span className="kicker">{t.nav.hire}</span>
              <h2>{t.hireTitle}</h2>
              <p className="section-lead">{t.hireLead}</p>
            </div>
            <div className="grid grid-3 packages">
              {packages.map((p, i) => {
                const featured = "featured" in p && p.featured;
                return (
                  <article
                    key={p.title.en}
                    className={`card package${featured ? " featured" : ""}`}
                    data-reveal
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {featured && <span className="badge">{t.popular}</span>}
                    <h3>{p.title[lang]}</h3>
                    <p>{p.text[lang]}</p>
                    <ul className="checks">
                      {p.items[lang].map((item) => (
                        <li key={item}><span className="check"><Icon name="check" size={14} /></span>{item}</li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(p.message)}
                      className={`btn${featured ? " btn-light" : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.quote} <Icon name="arrow" size={16} />
                    </a>
                  </article>
                );
              })}
            </div>

            <h3 className="steps-title" data-reveal>{t.stepsTitle}</h3>
            <ol className="steps">
              {workSteps.map((st, i) => (
                <li key={st.title.en} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{st.title[lang]}</h4>
                  <p>{st.text[lang]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section soft">
          <div className="container narrow">
            <div className="section-head center" data-reveal>
              <span className="kicker">FAQ</span>
              <h2>{t.faqTitle}</h2>
            </div>
            <div data-reveal>
              {faqs.map((f) => (
                <details key={f.q.en} className="faq">
                  <summary>{f.q[lang]}<span className="plus" aria-hidden="true" /></summary>
                  <p>{f.a[lang]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="section contact">
          <div className="container">
            <div className="cta-card" data-reveal>
              <div>
                <h2>{t.contactTitle}</h2>
                <p>{t.contactLead}</p>
              </div>
              <div className="contact-list">
                <a href={whatsappHref} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <span className="ci-icon"><Icon name="phone" size={20} /></span>
                  <span><small>WhatsApp</small>{t.whatsapp}</span>
                </a>
                <a href={`mailto:${site.email}`} className="contact-item">
                  <span className="ci-icon"><Icon name="mail" size={20} /></span>
                  <span><small>Email</small>{site.email}</span>
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="contact-item">
                  <span className="ci-icon"><Icon name="phone" size={20} /></span>
                  <span><small>{t.orCall}</small>{site.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href={whatsappHref} className="wa-float" target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp}>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
        </svg>
      </a>

      <footer className="footer">
        <div className="container">
          <div className="footer-cta">
            <div>
              <h2>{t.ctaBandTitle}</h2>
              <p>{t.ctaBandText}</p>
            </div>
            <a href={whatsappHref} className="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer">
              {t.consult} <Icon name="arrow" size={18} />
            </a>
          </div>

          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="logo logo-light">
                <span className="logo-mark">RM</span>
                <span className="logo-text">Rao <b>Muneeb</b></span>
              </a>
              <p>{t.footerBio}</p>
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
            <div>
              <h3>{t.footerLinks}</h3>
              <ul className="footer-links">
                {nav.map((n) => (
                  <li key={n.href}><a href={n.href}>{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{t.footerServices}</h3>
              <ul className="footer-links">
                {services.slice(0, 7).map((s) => (
                  <li key={s.title.en}><a href="#services">{s.title[lang]}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{t.footerContact}</h3>
              <ul className="footer-contact">
                <li><Icon name="phone" size={18} /><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
                <li><Icon name="mail" size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><Icon name="pin" size={18} /><span>{t.location}</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {site.name}. {t.rights}</p>
            <a href="#top" className="to-top">
              {t.backToTop} <Icon name="arrowUp" size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
