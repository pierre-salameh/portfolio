import {
  FiCode,
  FiDatabase,
  FiBookOpen,
  FiLayers,
  FiServer,
  FiTarget,
} from 'react-icons/fi'

import './AboutProfile.css'

const highlights = [
  {
    icon: <FiCode />,
    title: 'Full-Stack Development',
    description:
      'Building complete web applications, connecting responsive interfaces with structured backend services.',
  },
  {
    icon: <FiServer />,
    title: 'Backend Engineering',
    description:
      'Developing REST APIs with Laravel, handling authentication and organizing application logic.',
  },
  {
    icon: <FiDatabase />,
    title: 'Database Design',
    description:
      'Working with MySQL and MongoDB, designing structured data models and managing application data.',
  },
  {
    icon: <FiLayers />,
    title: 'Frontend Architecture',
    description:
      'Creating reusable React components, managing application state and building responsive interfaces.',
  },
]

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        <div className="section-heading">
          <span className="section-eyebrow">
            03 / ABOUT ME
          </span>

          <h2>
            Beyond Writing <span>Code.</span>
          </h2>

          <p>
            Engineering complete digital experiences,
            from interface design to backend architecture.
          </p>
        </div>

        <div className="about-main-grid">

          <div className="about-story">

            <div className="about-label">
              <span className="about-label-dot" />
              MY BACKGROUND
            </div>

            <h3>
              A software engineer with a
              <span> full-stack mindset.</span>
            </h3>

            <p>
              I'm Pierre Salameh, a Full-Stack Developer
              specializing in React.js and Laravel, with a
              Bachelor's Degree in Information Technology
              Engineering, specialized in Software Engineering.
            </p>

            <p>
              My work focuses on developing responsive web
              applications, secure REST APIs, role-based
              dashboards and structured database systems.
              I enjoy understanding how different parts of
              an application work together to create reliable
              and user-focused solutions.
            </p>

            <p>
              Alongside development, I have experience teaching
              programming and React.js, helping students
              understand technical concepts and apply them
              through practical projects.
            </p>

            <div className="about-education">

              <div className="education-icon">
                <FiBookOpen />
              </div>

              <div>
                <span>ACADEMIC BACKGROUND</span>
                <strong>
                  Bachelor's Degree in Information Technology
                  Engineering – Software Engineering
                </strong>
                <p>
                  University of Kalamoon · Damascus Suburb, Syria
                </p>
                <p className="education-period">
                  February 2020 – June 2025
                </p>
              </div>

            </div>

          </div>

          <div className="about-highlights">

            <div className="about-label">
              <span className="about-label-dot" />
              WHAT I WORK ON
            </div>

            <div className="highlight-grid">

              {highlights.map((item, index) => (
                <article
                  className="highlight-card"
                  key={item.title}
                >
                  <div className="highlight-card-top">
                    <span className="highlight-icon">
                      {item.icon}
                    </span>

                    <span className="highlight-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </article>
              ))}

            </div>

          </div>

        </div>

        <div className="about-bottom-line">
          <FiTarget />
          <p>
            My focus: <strong>Clean code. Clear architecture.
            Meaningful user experiences.</strong>
          </p>
        </div>

      </div>

    </section>
  )
}

export default About