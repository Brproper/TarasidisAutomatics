import useScrollToSection from "./useScrollToSection";
import "./Footer.css";
import logo from "../assets/imgs/logo.png";

function Footer() {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="MedFitAI Logo" className="footer-logo" />
          <p>
            &copy; {new Date().getFullYear()} MedFitAi <br />
            All rights reserved.
          </p>
        </div>

        {/* FOOTER LINKS */}
        <nav className="footer-links" aria-label="Footer navigation">
          <ul>
            <li>
              <button
                className="footer-link-btn"
                onClick={() => scrollToSection("whyMedfitAI")}
              >
                About
              </button>
            </li>

            <li>
              <button
                className="footer-link-btn"
                onClick={() => scrollToSection("who-we-help")}
              >
                Who We Help
              </button>
            </li>

            <li>
              <button
                className="footer-link-btn"
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
            </li>

            <li>
              <button
                className="footer-link-btn"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* SOCIAL MEDIA LINKS */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/company/109747993/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="mailto:info@medfitai.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="send us an email"
          >
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
