import { FiGlobe, FiMessageCircle } from "react-icons/fi";
import "./Languages.css";

const languages = [
  { name: "Arabic", level: "Native", score: 5 },
  { name: "English", level: "Advanced", score: 4 },
  { name: "German", level: "Elementary", score: 2 },
];

export default function Languages() {
  return (
    <section className="lang-section" id="languages">
      <div className="lang-container">
        <div className="lang-heading">
          <div className="lang-eyebrow">
            <span className="lang-eyebrow-line"></span>
            COMMUNICATION
          </div>
          <h2>
            Languages I <span>Speak</span>
          </h2>
          <p>
            Working across languages to collaborate with teams, trainees and
            clients.
          </p>
        </div>

        <div className="lang-dashboard">
          <div className="lang-dashboard-top">
            <div className="lang-label">
              <span className="lang-dot"></span>
              LANGUAGES OVERVIEW
            </div>
            <div className="lang-count">
              <FiMessageCircle />
              {languages.length} languages
            </div>
          </div>

          <div className="lang-content">
            <div className="lang-grid">
              {languages.map((l, i) => (
                <article
                  className={`lang-card ${l.score >= 4 ? "featured" : ""}`}
                  key={l.name}
                >
                  <div className="lang-card-top">
                    <span className="lang-card-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <FiGlobe className="lang-card-icon" />
                  </div>

                  <h4>{l.name}</h4>

                  <div className="lang-card-bottom">
                    <div
                      className="lang-bar"
                      role="img"
                      aria-label={`${l.name}: ${l.level}`}
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <i key={n} className={n <= l.score ? "on" : ""} />
                      ))}
                    </div>
                    <span className="lang-level">{l.level}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lang-footer">
            <span>BUILT WITH CLEAR COMMUNICATION</span>
            <span className="lang-footer-code">&lt;languages /&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}