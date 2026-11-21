import { FiAward, FiBookOpen, FiArrowUpRight } from "react-icons/fi";
import "./Courses.css";

const courses = [
  {
    title: "Advanced SQL Database Management",
    org: "University of Kalamoon",
    year: "2023",
  },
  {
    title: "Python Programming Certification",
    org: "Coursera · University of Michigan",
    year: "2022",
  },
];

export default function Courses() {
  return (
    <section className="crs-section" id="courses">
      <div className="crs-container">
        <div className="crs-heading">
          <div className="crs-eyebrow">
            <span className="crs-eyebrow-line"></span>
            ACADEMIC LEARNING
          </div>
          <h2>
            Courses & <span>Certifications</span>
          </h2>
          <p>
            Additional training that strengthened my database and programming
            foundations.
          </p>
        </div>

        <div className="crs-dashboard">
          <div className="crs-dashboard-top">
            <div className="crs-label">
              <span className="crs-dot"></span>
              COURSES OVERVIEW
            </div>
            <div className="crs-count">
              <FiBookOpen />
              {courses.length} courses
            </div>
          </div>

          <div className="crs-content">
            <div className="crs-grid">
              {courses.map((c, i) => (
                <article className="crs-card" key={c.title}>
                  <div className="crs-card-top">
                    <span className="crs-card-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <FiArrowUpRight className="crs-card-arrow" />
                  </div>

                  <div className="crs-card-body">
                    <span className="crs-card-icon">
                      <FiAward />
                    </span>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.org}</p>
                    </div>
                  </div>

                  <div className="crs-card-bottom">
                    <span>Course</span>
                    <span className="crs-year">{c.year}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="crs-footer">
            <span>BUILT WITH CONTINUOUS LEARNING</span>
            <span className="crs-footer-code">&lt;courses /&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}