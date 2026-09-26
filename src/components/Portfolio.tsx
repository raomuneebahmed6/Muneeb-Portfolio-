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
  type Lang,
} from "@/config/site";
import { ui } from "@/config/ui";
import { Icon } from "@/components/Icon";

function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

function JsonLd({ lang }: { lang: Lang }) {
  const sameAs = Object.values(site.socials);
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

  return (
    <div lang={lang === "en" ? "en" : "ur-Latn"}>
      <JsonLd lang={lang} />
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
              <p className="available"><span className="dot" /> {t.available}</p>
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>
                {h1}<span className="grad">{h2}</span>{h3}<span className="grad">{h4}</span>{h5}
              </h1>
              <p className="lead">{t.lead(site.yearsExperience)}</p>
              <div className="cta-row">
                <a href={whatsappHref} className="btn" target="_blank" rel="noopener noreferrer">{t.consult}</a>
                <a href="#work" className="btn btn-ghost">{t.seeWork}</a>
              </div>
              <ul className="stats">
                {stats.map((s) => (
                  <li key={s.label.en}><strong>{s.value}</strong><span>{s.label[lang]}</span></li>
                ))}
              </ul>
            </div>
            <div className="hero-photo">
              <Image src={site.photo} alt={t.photoAlt} width={640} height={800} priority sizes="(max-width: 860px) 280px, 400px" />
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>{t.servicesTitle}</h2>
            <p className="section-lead">{t.servicesLead}</p>
            <div className="grid grid-3">
              {services.map((s) => (
                <article key={s.title.en} className="card service">
                  <span className="icon"><Icon name={s.icon} /></span>
                  <h3>{s.title[lang]}</h3>
                  <p>{s.text[lang]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container about">
            <div>
              <h2>{t.aboutTitle}</h2>
              {t.about(site.yearsExperience).map((p) => <p key={p}>{p}</p>)}
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
            <h2>{t.experienceTitle}</h2>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.period.en}>
                  <span className="period">{e.period[lang]}</span>
                  <h3>{e.role}</h3>
                  <p className="place">{e.place}</p>
                  <p>{e.text[lang]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="section alt">
          <div className="container">
            <h2>{t.workTitle}</h2>
            <p className="section-lead">{t.workLead}</p>
            <div className="grid grid-3">
              {projects.map((p) => (
                <a key={p.title} href={p.url} className="card project" target="_blank" rel="noopener">
                  <Image
                    src={p.image}
                    alt={`${p.title} ${t.screenshotAlt}`}
                    width={800}
                    height={360}
                    loading="lazy"
                    sizes="(max-width: 700px) 100vw, 360px"
                  />
                  <div className="project-body">
                    <span className="tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text[lang]}</p>
                    <span className="visit">{t.visit} {new URL(p.url).hostname.replace(/^www\./, "")} ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {testimonials.length > 0 && (
          <section id="reviews" className="section">
            <div className="container">
              <h2>{t.reviewsTitle}</h2>
              <div className="grid grid-3">
                {testimonials.map((r) => (
                  <figure key={r.name + r.company} className="card review">
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

        <section id="hire" className={`section${testimonials.length > 0 ? " alt" : ""}`}>
          <div className="container">
            <h2>{t.hireTitle}</h2>
            <p className="section-lead">{t.hireLead}</p>
            <div className="grid grid-3">
              {packages.map((p) => {
                const featured = "featured" in p && p.featured;
                return (
                  <article key={p.title.en} className={`card package${featured ? " featured" : ""}`}>
                    {featured && <span className="badge">{t.popular}</span>}
                    <h3>{p.title[lang]}</h3>
                    <p>{p.text[lang]}</p>
                    <ul className="checks">
                      {p.items[lang].map((i) => (
                        <li key={i}><Icon name="check" size={18} />{i}</li>
                      ))}
                    </ul>
                    <a href={whatsappLink(p.message)} className={`btn${featured ? "" : " btn-ghost"}`} target="_blank" rel="noopener noreferrer">
                      {t.quote}
                    </a>
                  </article>
                );
              })}
            </div>

            <h3 className="steps-title">{t.stepsTitle}</h3>
            <ol className="steps">
              {workSteps.map((st, i) => (
                <li key={st.title.en}>
                  <span className="step-num">{i + 1}</span>
                  <h4>{st.title[lang]}</h4>
                  <p>{st.text[lang]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className={`section${testimonials.length > 0 ? "" : " alt"}`}>
          <div className="container narrow">
            <h2>{t.faqTitle}</h2>
            {faqs.map((f) => (
              <details key={f.q.en} className="faq">
                <summary>{f.q[lang]}</summary>
                <p>{f.a[lang]}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container narrow center">
            <h2>{t.contactTitle}</h2>
            <p className="section-lead">{t.contactLead}</p>
            <div className="cta-row center">
              <a href={whatsappHref} className="btn" target="_blank" rel="noopener noreferrer">{t.whatsapp}</a>
              <a href={`mailto:${site.email}`} className="btn btn-ghost">{site.email}</a>
            </div>
            <p className="muted">{t.orCall} <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>
          </div>
        </section>
      </main>

      <a href={whatsappHref} className="wa-float" target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp}>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
        </svg>
      </a>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {site.name}. {t.footer}</p>
          <ul className="socials">
            {Object.entries(site.socials).map(([k, v]) => (
              <li key={k}><a href={v} target="_blank" rel="noopener noreferrer me">{k[0].toUpperCase() + k.slice(1)}</a></li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
