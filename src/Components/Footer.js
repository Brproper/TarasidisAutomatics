import React from "react";
import "./Footer.css";

function Footer({ lang, t }) {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} TarasidisAutomatics <br />
          {lang === "en"
            ? "All rights reserved."
            : "Όλα τα δικαιώματα διατηρούνται."}
        </p>

        {/* FOOTER LINKS */}
        <nav
          className="footer-links"
          aria-label={
            lang === "en" ? "Footer navigation" : "Πλοήγηση υποσέλιδου"
          }
        >
          <ul>
            <li>
              <a href="#about">{t.about}</a>
            </li>
            <li>
              <a href="#services">{t.services}</a>
            </li>
            <li>
              <a href="#contact">{t.contact}</a>
            </li>
            <li>
              <a href="mailto:tarasidisautomatics@gmail.com">
                {lang === "en" ? "Email Us" : "Στείλτε Email"}
              </a>
            </li>
          </ul>
        </nav>

        {/* SOCIAL MEDIA LINKS */}
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/profile.php?id=100013231872326"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/company/tarasidisautomatics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/tarasidisautomatics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
