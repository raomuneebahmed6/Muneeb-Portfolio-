"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./Icon";

type Project = { title: string; url: string; image: string; tag: string; text: string };

// Project cards with platform filter tabs (WordPress, WooCommerce, Next.js, ...).
export function ProjectGrid({
  projects,
  allLabel,
  visitLabel,
  altSuffix,
  showAllLabel,
}: {
  projects: Project[];
  allLabel: string;
  visitLabel: string;
  altSuffix: string;
  showAllLabel: string;
}) {
  const platform = (p: Project) => p.tag.split(" · ")[0];
  const filters = [allLabel, ...Array.from(new Set(projects.map(platform)))];
  const [active, setActive] = useState(allLabel);
  // Only the first few cards show until "show all" is pressed. The rest stay in the HTML
  // (hidden with CSS) so search engines still see every project.
  const [expanded, setExpanded] = useState(false);
  const limit = 6;
  const shown = active === allLabel ? projects : projects.filter((p) => platform(p) === active);

  return (
    <>
      <div className="filters" role="tablist" data-reveal>
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            className={active === f ? "active" : ""}
            onClick={() => {
              setActive(f);
              setExpanded(false);
            }}
          >
            {f}
            <span>{f === allLabel ? projects.length : projects.filter((p) => platform(p) === f).length}</span>
          </button>
        ))}
      </div>
      <div className={`grid grid-3 projects${expanded || shown.length <= limit ? "" : " collapsed"}`}>
        {shown.map((p) => (
          <a key={p.title} href={p.url} className="card project" target="_blank" rel="noopener">
            <div className="shot">
              <Image src={p.image} alt={`${p.title} ${altSuffix}`} width={800} height={360} sizes="(max-width: 700px) 100vw, 380px" />
              <span className="shot-overlay">
                {visitLabel} <Icon name="arrow" size={18} />
              </span>
            </div>
            <div className="project-body">
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="visit">
                {new URL(p.url).hostname.replace(/^www\./, "")} <Icon name="arrow" size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>
      {!expanded && shown.length > limit && (
        <div className="show-all">
          <button className="btn btn-ghost btn-lg" onClick={() => setExpanded(true)}>
            {showAllLabel} ({shown.length})
          </button>
        </div>
      )}
    </>
  );
}
