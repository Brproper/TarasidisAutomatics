import React from "react";
import "./Footer.css";

function Footer({ lang, t }) {
  return (
    /* ///////////////////////////////////////////////////
/////////////////Footer Section/////////////////////////
//////////////////////////////////////////////////// */
    <footer className="footer-section">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} TarasidisAutomatics <br />
          {lang === "en"
            ? "All rights reserved."
            : "Όλα τα δικαιώματα διατηρούνται."}
        </p>

        {/* FOOTER LINKS */}
        {/* ////////////////////////////////////// */}
        <div className="footer-links">
          <a href="#about">{t.about}</a>
          <a href="#services">{t.services}</a>
          <a href="#contact">{t.contact}</a>
          <a
            href="mailto:tarasidisautomatics@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "en" ? "Email Us" : "Στείλτε Email"}
          </a>
        </div>

        {/* SOCIAL MEDIA LINKS */}
        {/* ////////////////////////////////////// */}
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/profile.php?id=100013231872326"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/company/tarasidisautomatics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/tarasidisautomatics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
