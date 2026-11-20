
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiBookOpen,
  FiMonitor,
  FiCode,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiGlobe,
} from 'react-icons/fi'

import './Experience.css'

const experiences = [
  {
    id: '01',
    year: '2026',
    period: 'January 2026 – June 2026',
    duration: '6 MONTHS',
    title: 'IT & Programming Trainer',
    company: 'Al Rida Training and Development Institute',
    location: 'Damascus, Syria',
    type: 'PART-TIME',
    icon: <FiUsers />,
    accent: 'blue',

    description:
      'Delivered practical training in programming, computer applications and artificial intelligence, helping trainees strengthen their technical knowledge and problem-solving abilities.',

    highlights: [
      'Trained 10–20 trainees in programming, computer applications and AI.',
      'Delivered 4–8 hours of weekly instruction, totaling 130+ hours over 6 months.',
      'Designed practical coding tasks and technical assessments.',
      'Evaluated trainee progress and developed problem-solving skills.',
    ],

    stats: [
      { value: '10–20', label: 'TRAINEES' },
      { value: '130+', label: 'TRAINING HOURS' },
      { value: '6', label: 'MONTHS' },
    ],
  },

  {
    id: '02',
    year: '2026',
    period: 'March 2026 – April 2026',
    duration: '2 MONTHS',
    title: 'React.js Instructor',
    company: 'Al-Rukn Training Center',
    location: 'Yabroud, Damascus Suburb, Syria',
    type: 'PART-TIME',
    icon: <FiCode />,
    accent: 'cyan',

    description:
      'Delivered hands-on React.js training focused on modern frontend development concepts, while mentoring students through practical application development and graduation projects.',

    highlights: [
      'Taught 12 training sessions covering a total of 24 hours.',
      'Covered React Hooks, state management, props and component architecture.',
      'Mentored 6 students through their graduation projects.',
      'Supported the development of a full-featured accounting web application using React.js.',
    ],

    stats: [
      { value: '12', label: 'SESSIONS' },
      { value: '24', label: 'HOURS' },
      { value: '06', label: 'STUDENTS MENTORED' },
    ],
  },

  {
    id: '03',
    year: '2025',
    period: 'May 2025 – November 2025',
    duration: '7 MONTHS',
    title: 'WordPress Content Intern',
    company: 'GAO TEK Company',
    location: 'New York, USA',
    type: 'ONLINE',
    icon: <FiMonitor />,
    accent: 'purple',

    description:
      'Worked remotely with an international company, managing website content and supporting improvements in website presentation and user experience.',

    highlights: [
      'Managed and published web content using WordPress.',
      'Optimized text, images and videos for responsive display.',
      'Collaborated with the marketing team.',
      'Contributed to website layout and user experience improvements.',
    ],

    stats: [
      { value: '07', label: 'MONTHS' },
      { value: 'REMOTE', label: 'WORK MODE' },
      { value: 'USA', label: 'COMPANY LOCATION' },
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="experience-container">

        {/* SECTION HEADER */}

        <div className="section-heading">

          <span className="section-eyebrow">
            04 / PROFESSIONAL JOURNEY
          </span>

          <h2>
            Experience That <span>Builds Perspective.</span>
          </h2>

          <p>
            Professional experiences that shaped my
            technical skills, teaching abilities and
            approach to solving real-world challenges.
          </p>

        </div>

        {/* EXPERIENCE OVERVIEW */}

        <div className="experience-overview">

          <div className="experience-overview-item">
            <FiBriefcase />
            <div>
              <strong>03</strong>
              <span>PROFESSIONAL ROLES</span>
            </div>
          </div>

          <div className="experience-overview-divider" />

          <div className="experience-overview-item">
            <FiGlobe />
            <div>
              <strong>02</strong>
              <span>WORK ENVIRONMENTS</span>
            </div>
          </div>

          <div className="experience-overview-divider" />

          <div className="experience-overview-item">
            <FiBookOpen />
            <div>
              <strong>01</strong>
              <span>TECHNICAL TEACHING FIELD</span>
            </div>
          </div>

        </div>

        {/* TIMELINE */}

        <div className="experience-timeline">

          <div className="experience-timeline-line" />

          {experiences.map((experience, index) => (

            <article
              className={`experience-item experience-${experience.accent}`}
              key={experience.id}
            >

              {/* TIMELINE NODE */}

              <div className="experience-node">
                <span>{experience.id}</span>
              </div>

              {/* EXPERIENCE CARD */}

              <div className="experience-card">

                <div className="experience-card-header">

                  <div className="experience-card-icon">
                    {experience.icon}
                  </div>

                  <div className="experience-card-meta">

                    <span className="experience-period">
                      <FiCalendar />
                      {experience.period}
                    </span>

                    <span className="experience-duration">
                      {experience.duration}
                    </span>

                  </div>

                </div>

                <div className="experience-role-heading">

                  <div>
                    <span className="experience-index">
                      PROFESSIONAL EXPERIENCE / {experience.id}
                    </span>

                    <h3>{experience.title}</h3>

                    <h4>{experience.company}</h4>
                  </div>

                  <span className="experience-type">
                    {experience.type}
                  </span>

                </div>

                <div className="experience-location">
                  <FiMapPin />
                  {experience.location}
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                {/* ACHIEVEMENTS */}

                <div className="experience-highlights">

                  <span className="experience-subheading">
                    KEY RESPONSIBILITIES & CONTRIBUTIONS
                  </span>

                  {experience.highlights.map((highlight, i) => (

                    <div
                      className="experience-highlight"
                      key={i}
                    >
                      <FiCheckCircle />
                      <span>{highlight}</span>
                    </div>

                  ))}

                </div>

                {/* METRICS */}

                <div className="experience-stats">

                  {experience.stats.map(stat => (

                    <div
                      className="experience-stat"
                      key={stat.label}
                    >
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* BOTTOM STATEMENT */}

        <div className="experience-footer">

          <div className="experience-footer-icon">
            <FiClock />
          </div>

          <div>
            <span>CONTINUOUS GROWTH</span>
            <h3>
              Learning. Building. Sharing knowledge.
            </h3>
            <p>
              Combining practical development experience
              with technical education and continuous learning.
            </p>
          </div>

          <FiArrowUpRight className="experience-footer-arrow" />

        </div>

      </div>

    </section>
  )
}

export default Experience
