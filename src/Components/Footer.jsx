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
            <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 37.94-18.1 37.94-38.39V66.89C482.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.93 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v134.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
            </svg>
          </a>
          <a
            href="mailto:info@medfitai.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="send us an email"
          >
            <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" aria-hidden="true" focusable="false">
              <rect x="48" y="96" width="416" height="320" rx="40" ry="40" stroke="currentColor" strokeWidth="32" strokeLinejoin="round"/>
              <path d="M112 160l144 112 144-112" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
