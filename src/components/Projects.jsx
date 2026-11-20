
import { useState } from 'react'

import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiDatabase,
  FiShield,
  FiLayers,
  FiCode,
  FiCpu,
  FiClock,
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
} from 'react-icons/fi'

import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'Technology Café',
    category: 'FULL-STACK WEB APPLICATION',
    description:
      'A full-stack café management system designed to automate core restaurant operations through a React interface and a Laravel REST API.',

    image: '/20.png',
    imageAlt: 'Technology Café application interface',

    stack: ['React.js', 'Laravel 11', 'MySQL', 'Sanctum', 'Axios'],

    github:
      'https://github.com/pierre-salameh/Technology-Cafee',

    demo:
      'https://technology-cafee.vercel.app/welcome',

    featured: true,

    metrics: [
      { value: '27', label: 'API Endpoints' },
      { value: '20', label: 'Protected Endpoints' },
      { value: '23', label: 'Migrations' },
      { value: '05', label: 'Core Entities' },
    ],

    architecture: [
      {
        icon: <FiLayers />,
        title: 'Frontend',
        detail: 'React.js responsive interface',
      },
      {
        icon: <FiCode />,
        title: 'API Layer',
        detail: '27 REST API endpoints',
      },
      {
        icon: <FiShield />,
        title: 'Security',
        detail: 'Laravel Sanctum authentication',
      },
      {
        icon: <FiDatabase />,
        title: 'Database',
        detail: 'MySQL · 23 migrations',
      },
    ],

    features: [
      'Authentication and user management',
      'Products and categories management',
      'Order management workflows',
      'Complaint management',
      'Role-based access control',
      'Protected API endpoints using Sanctum',
    ],
  },

  {
    id: '02',
    title: 'Banking Management System',
    category: 'REACT.JS APPLICATION',

    description:
      'A multi-company banking dashboard with dedicated interfaces for different user roles and structured financial operations.',

      image: '/21.png',
    visual: 'banking',

    stack: ['React.js', 'JavaScript', 'Component Architecture'],

    github:
      'https://github.com/pierre-salameh/Banking-System-React-JS',

    demo:
      'https://banking-system-react-js.vercel.app/',

    metrics: [
      { value: '04', label: 'User Roles' },
      { value: '07', label: 'Core Operations' },
      { value: '06', label: 'Reusable Components' },
    ],

    architecture: [
      {
        icon: <FiLayers />,
        title: 'Dashboard',
        detail: 'Multi-company interface',
      },
      {
        icon: <FiShield />,
        title: 'Access Control',
        detail: 'Four role-based interfaces',
      },
      {
        icon: <FiCode />,
        title: 'Operations',
        detail: 'Seven core banking operations',
      },
      {
        icon: <FiDatabase />,
        title: 'Components',
        detail: 'Six reusable components',
      },
    ],

    features: [
      'Super-admin interface',
      'Admin interface',
      'User and customer interfaces',
      'Deposit and withdrawal operations',
      'Request approval workflows',
      'Reusable React components',
    ],
  },

  {
    id: '03',
    title: 'OS Scheduling Simulator',
    category: 'SOFTWARE ENGINEERING · C#',

    description:
      'A desktop simulator that compares CPU scheduling algorithms and visualizes their scheduling behavior.',

    image: '/22.png',
    imageAlt: 'C sharp CPU scheduling simulator',

    stack: ['C#', '.NET', 'FCFS', 'Round Robin'],

    github:
      'https://github.com/pierre-salameh/Pierre_Alogrithms',

    metrics: [
      { value: '02', label: 'Algorithms' },
      { value: 'FCFS', label: 'Scheduling Method' },
      { value: 'RR', label: 'Round Robin' },
    ],

    architecture: [
      {
        icon: <FiCpu />,
        title: 'FCFS',
        detail: 'First Come First Served',
      },
      {
        icon: <FiClock />,
        title: 'Round Robin',
        detail: 'Time-quantum scheduling',
      },
      {
        icon: <FiCode />,
        title: 'Simulation',
        detail: 'Process execution behavior',
      },
      {
        icon: <FiLayers />,
        title: 'Visualization',
        detail: 'Scheduling comparison',
      },
    ],

    features: [
      'FCFS scheduling simulation',
      'Round Robin scheduling simulation',
      'Process arrival time input',
      'Burst time input',
      'Time quantum configuration',
      'Execution behavior visualization',
    ],
  },
]

function BankingPreview() {
  return (
    <div className="banking-preview">

      <div className="banking-sidebar">
        <div className="banking-logo">B.</div>
        <span className="banking-nav-active" />
        <span />
        <span />
        <span />
      </div>

      <div className="banking-dashboard">

        <div className="banking-topbar">
          <div>
            <small>OVERVIEW</small>
            <strong>Banking Dashboard</strong>
          </div>

          <span className="banking-avatar">PS</span>
        </div>

        <div className="banking-balance">
          <small>ACCOUNT OVERVIEW</small>
          <strong>Financial Operations</strong>
          <div className="banking-line" />
          <div className="banking-bars">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="banking-stats">
          <div><small>DEPOSITS</small><strong>01</strong></div>
          <div><small>WITHDRAWALS</small><strong>02</strong></div>
        </div>

        <div className="banking-transactions">
          <span />
          <span />
          <span />
        </div>

      </div>

      <div className="banking-preview-caption">
        MULTI-ROLE BANKING SYSTEM
      </div>

    </div>
  )
}

function Projects() {
  const [expanded, setExpanded] = useState('01')

  const toggleProject = (id) => {
    setExpanded(current => current === id ? null : id)
  }

  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">

        <div className="section-heading">
          <span className="section-eyebrow">
            03 / SELECTED WORK
          </span>

          <h2>
            Projects That <span>Prove It.</span>
          </h2>

          <p>
            A closer look at the applications, systems
            and engineering challenges behind my work.
          </p>
        </div>

        <div className="projects-featured-label">
          <span className="projects-label-line" />
          <span>FEATURED ENGINEERING PROJECTS</span>
          <span className="projects-label-line" />
        </div>

        <div className="projects-list">

          {projects.map(project => {
            const isExpanded = expanded === project.id

            return (
              <article
                key={project.id}
                className={`project-card ${
                  isExpanded ? 'project-expanded' : ''
                }`}
              >

                <div className="project-card-main">

                  <div className="project-cover">

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                      />
                    ) : (
                      <BankingPreview />
                    )}

                    <span className="project-cover-number">
                      PROJECT / {project.id}
                    </span>

                  </div>

                  <div className="project-content">

                    <div className="project-meta">
                      <span>{project.category}</span>

                      {project.featured && (
                        <span className="featured-tag">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-stack">
                      {project.stack.map(technology => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGithub />
                        GitHub
                        <FiArrowUpRight />
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiExternalLink />
                          Live Demo
                          <FiArrowUpRight />
                        </a>
                      )}

                    </div>

                  </div>

                </div>

                <div className="project-metrics">

                  {project.metrics.map(metric => (
                    <div
                      className="project-metric"
                      key={metric.label}
                    >
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}

                </div>

                <button
                  type="button"
                  className="project-expand-button"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded
                    ? 'Hide technical breakdown'
                    : 'Explore technical breakdown'
                  }

                  {isExpanded
                    ? <FiChevronUp />
                    : <FiChevronDown />
                  }
                </button>

                {isExpanded && (

                  <div className="project-details">

                    <div className="project-details-heading">
                      <span>TECHNICAL OVERVIEW</span>
                      <h4>Inside the architecture.</h4>
                    </div>

                    <div className="project-architecture">

                      {project.architecture.map((item, index) => (
                        <div
                          className="architecture-item"
                          key={item.title}
                        >
                          <span className="architecture-index">
                            0{index + 1}
                          </span>

                          <span className="architecture-icon">
                            {item.icon}
                          </span>

                          <strong>{item.title}</strong>
                          <p>{item.detail}</p>
                        </div>
                      ))}

                    </div>

                    <div className="project-features">

                      <h4>Key implementation highlights</h4>

                      <div className="project-feature-list">

                        {project.features.map(feature => (
                          <div key={feature}>
                            <FiCheckCircle />
                            <span>{feature}</span>
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                )}

              </article>
            )
          })}

        </div>

        <div className="projects-footer">

          <div>
            <span>MORE CODE. MORE EXPLORATION.</span>
            <h3>Explore my work on GitHub.</h3>
          </div>

          <a
            href="https://github.com/pierre-salameh"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
            <FiArrowUpRight />
          </a>

        </div>

      </div>

    </section>
  )
}

export default Projects
