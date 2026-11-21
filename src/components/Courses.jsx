import { GraduationCap } from "lucide-react";
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
    <section id="courses" className="crs">
      <div className="crs__wrap">
        <p className="crs__eyebrow">05 / Courses</p>
        <h2 className="crs__title">
          Continuous <span>Learning.</span>
        </h2>
        <p className="crs__sub">
          Courses and certifications that strengthened my technical foundation.
        </p>

        <div className="crs__grid">
          {courses.map((c, i) => (
            <article className="crs__card" key={c.title}>
              <div className="crs__top">
                <span className="crs__icon">
                  <GraduationCap size={20} />
                </span>
                <span className="crs__num">0{i + 1}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.org}</p>
              <span className="crs__year">{c.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}