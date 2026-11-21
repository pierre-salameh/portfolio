
import {
  FiActivity,
  FiArrowDown,
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiLayers,
  FiLock,
  FiServer,
} from 'react-icons/fi'

function Profile() {
  const principles = [
    {
      icon: <FiLayers />,
      title: 'Component Architecture',
      description:
        'Organizing interfaces into reusable React components with clear responsibilities.',
    },
    {
      icon: <FiServer />,
      title: 'API Communication',
      description:
        'Connecting frontend applications to backend services through structured REST APIs.',
    },
    {
      icon: <FiLock />,
      title: 'Authentication & Access',
      description:
        'Implementing protected endpoints, token authentication and role-based access control.',
    },
    {
      icon: <FiDatabase />,
      title: 'Data Management',
      description:
        'Structuring database entities and organizing application data through migrations.',
    },
  ]

  const workflow = [
    'Understand the requirements',
    'Design the application structure',
    'Build frontend and backend',
    'Connect APIs and database',
    'Validate the complete workflow',
  ]

  return (
    <section id="engineering" className="engineering-section">

      <div className="about-container">

        <div className="section-heading">
          <span className="section-eyebrow">
            04 / ENGINEERING MINDSET
          </span>

          <h2>
            How I Think. <span>How I Build.</span>
          </h2>

          <p>
            Good software is not just about writing code.
            It is about understanding how every layer works together.
          </p>
        </div>

        <div className="engineering-intro">

          <div className="engineering-intro-icon">
            <FiActivity />
          </div>

          <div>
            <span>MY DEVELOPMENT APPROACH</span>
            <h3>
              From individual components
              <br />
              to <span>connected systems.</span>
            </h3>
          </div>

        </div>

        <div className="engineering-grid">

          {principles.map((item, index) => (
            <article
              className="engineering-card"
              key={item.title}
            >

              <div className="engineering-card-header">
                <span className="engineering-icon">
                  {item.icon}
                </span>

                <span className="engineering-index">
                  0{index + 1}
                </span>
              </div>

              <h4>{item.title}</h4>

              <p>{item.description}</p>

              <div className="engineering-card-line" />

            </article>
          ))}

        </div>

        <div className="workflow-panel">

          <div className="workflow-heading">
            <div>
              <span className="section-eyebrow">
                DEVELOPMENT WORKFLOW
              </span>

              <h3>
                A structured approach to building software.
              </h3>
            </div>

            <FiCode className="workflow-main-icon" />
          </div>

          <div className="workflow-steps">

            {workflow.map((step, index) => (
              <div className="workflow-step" key={step}>

                <span className="workflow-step-number">
                  0{index + 1}
                </span>

                <span className="workflow-step-title">
                  {step}
                </span>

                {index !== workflow.length - 1 && (
                  <FiArrowRight className="workflow-arrow" />
                )}

              </div>
            ))}

          </div>

          <div className="workflow-note">
            <FiCheckCircle />
            <span>
              Focused on structured development and
              user-centered solutions.
            </span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Profile
