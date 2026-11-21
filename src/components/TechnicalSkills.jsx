import { useMemo, useState } from "react";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
  FiLayers,
  FiTerminal,
  FiArrowUpRight,
  FiCommand,
} from "react-icons/fi";
import "./TechnicalSkills.css";

const skillGroups = [
  {
    id: "all",
    label: "All Skills",
    icon: FiLayers,
  },
  {
    id: "frontend",
    label: "Front-End",
    icon: FiCode,
  },
  {
    id: "backend",
    label: "Back-End",
    icon: FiServer,
  },
  {
    id: "databases",
    label: "Databases",
    icon: FiDatabase,
  },
  {
    id: "tools",
    label: "Tools",
    icon: FiTool,
  },
  {
    id: "familiar",
    label: "Familiar With",
    icon: FiTerminal,
  },
];

const skills = [
  { name: "React.js", category: "frontend", level: "Advanced", featured: true },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },

  { name: "Laravel", category: "backend", featured: true },
  { name: "Node.js", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "REST API", category: "backend" },

  { name: "MySQL", category: "databases" },
  { name: "MongoDB", category: "databases" },

  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Axios", category: "tools" },
  { name: "JWT", category: "tools" },
  { name: "Postman", category: "tools" },

  { name: "Python", category: "familiar" },
  { name: "TypeScript", category: "familiar" },
  { name: "C#", category: "familiar" },
  { name: "C++", category: "familiar" },
];

const categoryNames = {
  frontend: "Front-End",
  backend: "Back-End",
  databases: "Databases",
  tools: "Tools & Technologies",
  familiar: "Familiar Technologies",
};

function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  const activeLabel =
    skillGroups.find((group) => group.id === activeCategory)?.label || "All Skills";

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            TECHNICAL EXPERTISE
          </div>

          <h2>
            My <span>Technology Stack</span>
          </h2>

          <p>
            Technologies and tools I use to build, develop, and deliver
            modern software solutions.
          </p>
        </div>

        <div className="skills-dashboard">
          <div className="skills-dashboard-top">
            <div className="dashboard-label">
              <span className="dashboard-status-dot" />
              <span>TECH STACK OVERVIEW</span>
            </div>

            <div className="dashboard-count">
              <FiCommand />
              <span>{skills.length} technologies</span>
            </div>
          </div>

          <div className="skills-filter">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <button
                  key={group.id}
                  className={`skill-filter-btn ${
                    activeCategory === group.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(group.id)}
                  type="button"
                >
                  <Icon />
                  <span>{group.label}</span>
                </button>
              );
            })}
          </div>

          <div className="skills-content">
            <div className="skills-content-heading">
              <div>
                <span className="skills-small-label">CURRENT VIEW</span>
                <h3>{activeLabel}</h3>
              </div>

              <span className="skills-results-count">
                {filteredSkills.length.toString().padStart(2, "0")} ITEMS
              </span>
            </div>

            <div className="skills-grid">
              {filteredSkills.map((skill, index) => (
                <div
                  className={`skill-card ${skill.featured ? "featured" : ""}`}
                  key={skill.name}
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <div className="skill-card-top">
                    <span className="skill-card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <FiArrowUpRight className="skill-card-arrow" />
                  </div>

                  <h4 className="notranslate" translate="no">
                    {skill.name}
                  </h4>

                  <div className="skill-card-bottom">
                    <span>{categoryNames[skill.category]}</span>

                    {skill.level && (
                      <span className="skill-level">{skill.level}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-dashboard-footer">
            <span>BUILT WITH CONTINUOUS LEARNING</span>
            <span className="footer-code notranslate" translate="no">
              {"<developer />"}
            </span>
          </div>
        </div>

        <div className="skills-note">
          <div className="skills-note-icon">
            <FiCode />
          </div>
          <div>
            <h3>Beyond the tools</h3>
            <p>
              I focus on connecting front-end interfaces, back-end logic,
              and database structures to build complete web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;