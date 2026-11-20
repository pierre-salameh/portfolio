
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiSend,
  FiCode,
  FiHeart,
} from "react-icons/fi";
import "./Contact.css";

const contactItems = [
  {
    label: "EMAIL",
    value: "pierresalam6@gmail.com",
    href: "mailto:pierresalam6@gmail.com",
    icon: FiMail,
    action: "Send an email",
  },
  {
    label: "PHONE",
    value: "+963 984 552 701",
    href: "tel:+963984552701",
    icon: FiPhone,
    action: "Call me",
  },
  {
    label: "GITHUB",
    value: "github.com/pierre-salameh",
    href: "https://github.com/pierre-salameh",
    icon: FiGithub,
    action: "Explore my code",
  },
  {
  icon: FiLinkedin,
  label: "LinkedIn",
  value: "Connect with me",
  href: "https://www.linkedin.com/in/pierre-salameh/",
  external: true,
},
];

function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-heading">
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              GET IN TOUCH
            </div>

            <h2>
              Let's build something <span>meaningful.</span>
            </h2>

            <p>
              Have a project in mind, an opportunity, or just want to connect?
              I'd be happy to hear from you.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-message-card">
              <div className="contact-card-decoration">
                <span />
                <span />
                <span />
              </div>

              <div className="contact-message-icon">
                <FiSend />
              </div>

              <span className="contact-overline">OPEN TO OPPORTUNITIES</span>

              <h3>
                Let's turn your
                <br />
                ideas into <span>reality.</span>
              </h3>

              <p>
                I'm interested in full-stack development, React.js
                opportunities, and projects where I can create useful
                digital experiences.
              </p>

              <a
                className="contact-primary-btn"
                href="mailto:pierresalam6@gmail.com?subject=Let's%20Connect"
              >
                <span>Start a conversation</span>
                <FiArrowUpRight />
              </a>

              <div className="contact-card-code">
                <span className="code-muted">const</span> nextProject{" "}
                <span className="code-muted">=</span>{" "}
                <span className="code-highlight">"Let's talk"</span>;
              </div>
            </div>

            <div className="contact-details">
              <div className="contact-details-heading">
                <span>CONTACT INFORMATION</span>
                <span className="contact-live-indicator">
                  <i />
                  AVAILABLE TO CONNECT
                </span>
              </div>

              <div className="contact-links">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      className="contact-link-card"
                      href={item.href}
                      target={item.label === "GITHUB" ? "_blank" : undefined}
                      rel={
                        item.label === "GITHUB"
                          ? "noreferrer"
                          : undefined
                      }
                      key={item.label}
                    >
                      <div className="contact-link-icon">
                        <Icon />
                      </div>

                      <div className="contact-link-info">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                        <small>{item.action}</small>
                      </div>

                      <FiArrowUpRight className="contact-link-arrow" />
                    </a>
                  );
                })}
              </div>

              <div className="contact-social-note">
                <FiCode />
                <span>
                  Focused on building clean, practical, and user-centered
                  web applications.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <a href="#home" className="footer-brand">
            <span className="footer-brand-mark">P.</span>
            <span>PIERRE SALAMEH</span>
          </a>

          <p className="footer-copyright">
            © {new Date().getFullYear()} Pierre Salameh. All rights reserved.
          </p>

          <a href="#home" className="footer-back-top">
            Back to top
            <FiArrowUpRight />
          </a>
        </div>

        <div className="footer-bottom-line">
          <span>DESIGNED & BUILT WITH</span>
          <FiHeart />
          <span>AND CODE</span>
        </div>
      </footer>
    </>
  );
}

export default Contact;
