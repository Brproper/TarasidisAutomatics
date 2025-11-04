import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} TarasidisAutomatics <br />
          All rights reserved.
        </p>

        {/* FOOTER LINKS */}
        <nav className="footer-links" aria-label="Footer navigation">
          <ul>
            <li>
              <a href="#whyMedfitAI">About</a>
            </li>
            <li>
              <a href="#who-we-help">Who We help</a>
            </li>
            {/* <li>
              <a href="#who-we-help">Who We Help</a>
            </li> */}
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* SOCIAL MEDIA LINKS */}
        <div className="footer-socials">
          {/* <a
            href="https://www.facebook.com/profile.php?id=100013231872326"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a> */}
          <a
            href="https://www.linkedin.com/company/tarasidisautomatics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="mailto:hello@medfitai.com"
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
