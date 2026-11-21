import { Globe } from "lucide-react";
import "./Languages.css";

const languages = [
  { name: "Arabic", level: "Native", score: 5 },
  { name: "English", level: "Advanced", score: 4 },
  { name: "German", level: "Elementary", score: 2 },
];

export default function Languages() {
  return (
    <section id="languages" className="lng">
      <div className="lng__wrap">
        <p className="lng__eyebrow">06 / Languages</p>
        <h2 className="lng__title">
          Languages I <span>Speak.</span>
        </h2>
        <p className="lng__sub">
          Comfortable communicating with teams and clients across languages.
        </p>

        <div className="lng__grid">
          {languages.map((l, i) => (
            <article className="lng__card" key={l.name}>
              <div className="lng__top">
                <span className="lng__icon">
                  <Globe size={20} />
                </span>
                <span className="lng__num">0{i + 1}</span>
              </div>
              <h3>{l.name}</h3>
              <span className="lng__level">{l.level}</span>
              <div
                className="lng__bar"
                role="img"
                aria-label={`${l.name}: ${l.level}`}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <i key={n} className={n <= l.score ? "on" : ""} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}