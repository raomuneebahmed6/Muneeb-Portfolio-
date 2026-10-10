import { portraitPath } from "./portraitPath";

// Static portrait illustration in the hero.
export function HeroPortrait() {
  return (
    <div className="portrait">
      <svg viewBox="140 0 390 386" role="img" aria-label="Illustrated portrait of Rao Muneeb">
        <path d={portraitPath} />
      </svg>
    </div>
  );
}
