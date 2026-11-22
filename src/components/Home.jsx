
import { TypeAnimation } from 'react-type-animation'
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTerminal,
} from 'react-icons/fi'

import NetworkBackground from './NetworkBackground'

function Home() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-grid" />
      <NetworkBackground />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">

        <div className="hero-main">

          {/* LEFT SIDE */}

          <div className="hero-content">

            <div className="hero-kicker">
              <span className="status-indicator" />
              OPEN TO REMOTE OPPORTUNITIES
            </div>

            <p className="hero-intro">
              HELLO, I'M
            </p>

            <h1>
              Pierre
              <span>Salameh</span>
            </h1>

            <h2>
              Full-Stack Developer
              <span className="hero-title-divider"> / </span>
              <span className="hero-specialty">
                React.js & Laravel
              </span>
            </h2>

            <div className="hero-typing">
              I build{' '}
              <TypeAnimation
                sequence={[
                  'responsive React interfaces.',
                  1800,
                  'secure Laravel REST APIs.',
                  1800,
                  'role-based dashboards.',
                  1800,
                  'complete web applications.',
                  1800,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </div>

            <p className="hero-description">
              I develop user-focused web applications by combining
              modern frontend experiences with secure backend
              architecture, REST APIs and structured MySQL databases.
            </p>

            <div className="hero-actions">

              <a href="#projects" className="hero-button hero-button-primary">
                Explore My Work
                <FiArrowUpRight />
              </a>

              <a
                href="/cvv.pdf"
                target="_blank"
                rel="noreferrer"
                className="hero-button hero-button-secondary"
              >
                View My CV
                <FiDownload />
              </a>

            </div>

            <div className="hero-socials">

              <a
                href="https://github.com/pierre-salameh"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/pierre-salameh-898177299/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:pierresalam6@gmail.com"
                aria-label="Email"
              >
                <FiMail />
              </a>

              <span className="social-separator" />

              <span className="hero-location">
                <FiMapPin />
                Syria · Remote
              </span>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="hero-visual">

            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <div className="portrait-card">

              <div className="portrait-header">
                <span />
                <span />
                <span />
                <b>developer.profile</b>
              </div>

              <div className="portrait-image">
                <img
                  src="/pierre.jpg"
                  alt="Pierre Salameh - Full Stack Developer"
                  fetchPriority="high"
                />
              </div>

              <div className="portrait-footer">
                <div>
                  <strong>PIERRE SALAMEH</strong>
                  <span>React.js · Laravel · MySQL</span>
                </div>

                <div className="portrait-logo notranslate" translate="no">
                  PS
               </div>
              </div>

            </div>

            {/* FLOATING CODE WINDOW */}

            <div className="floating-code">

              <div className="code-window-header">
                <FiTerminal />
                <span>developer.config.js</span>
                <i>●</i>
              </div>

              <pre>
                <code>
                  <span className="code-purple">const</span> developer = {'{'}
                  {'\n'}
                  {'  '}<span className="code-blue">frontend</span>: <span className="code-green">'React.js'</span>,
                  {'\n'}
                  {'  '}<span className="code-blue">backend</span>: <span className="code-green">'Laravel'</span>,
                  {'\n'}
                  {'  '}<span className="code-blue">database</span>: <span className="code-green">'MySQL'</span>,
                  {'\n'}
                  {'  '}<span className="code-blue">mindset</span>: <span className="code-green">'Problem Solver'</span>
                  {'\n'}
                  {'}'};
                </code>
              </pre>

              <div className="code-window-footer">
                <span className="status-indicator" />
                READY TO BUILD
              </div>

            </div>

            <div className="visual-caption">
              BUILD · SECURE · OPTIMIZE
            </div>

          </div>

        </div>

        {/* ENGINEERING PROOF */}

        <div className="hero-proof">

          <div className="proof-heading">
            <span>ENGINEERING SNAPSHOT</span>
            <strong>Real project metrics.</strong>
          </div>

          <div className="proof-item">
            <strong>27</strong>
            <span>API Endpoints</span>
          </div>

          <div className="proof-item">
            <strong>20</strong>
            <span>Protected Endpoints</span>
          </div>

          <div className="proof-item">
            <strong>23</strong>
            <span>Database Migrations</span>
          </div>

          <div className="proof-item">
            <strong>05</strong>
            <span>Core Entities</span>
          </div>

          <a href="#about" className="hero-scroll" aria-label="Scroll to about">
            <FiArrowDown />
          </a>

        </div>

      </div>

    </section>
  )
}

export default Home
