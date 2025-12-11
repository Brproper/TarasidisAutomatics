import "./Footer.css";

function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} MedFitAi <br />
          All rights reserved.
        </p>

        {/* FOOTER LINKS */}
        <nav className="footer-links" aria-label="Footer navigation">
          <ul>
            <li>
              <button
                className="footer-link-btn"
                onClick={() => scrollTo("#whyMedfitAI")}
              >
                About
              </button>
            </li>

            <li>
              <button
                className="footer-link-btn"
                onClick={() => scrollTo("#who-we-help")}
              >
                Who We Help
              </button>
            </li>

            <li>
              <button
                className="footer-link-btn"
                onClick={() => scrollTo("#services")}
              >
                Services
              </button>
            </li>

            <li>
              <button
                className="footer-link-btn"
                onClick={() => scrollTo("#contact")}
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
