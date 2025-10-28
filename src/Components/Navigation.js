import React, { useState } from "react";
import "./Navigation.css";

const handleLogoClick = () => window.location.reload();

function Navigation({ lang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    /* ///////////////////////////////////////////////////
      /////////////////NAVIGATION SECTION//////////////////
      //////////////////////////////////////////////////// */
    <nav
      className="navigation-bar"
      role="navigation"
      aria-label={lang === "en" ? "Main Navigation" : "Κύρια Πλοήγηση"}
    >
      {/* LOGO */}
      <h1 className="logo">
        <button
          onClick={handleLogoClick}
          aria-label={lang === "en" ? "Reload page" : "Ανανέωση σελίδας"}
          className="logo-btn"
        >
          TarasidisAutomatics
        </button>
      </h1>

      {/* HAMBURGER BUTTON FOR MOBILE */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="navigation-menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAVIGATION LINKS */}
      <ul
        className={`navigation-links ${menuOpen ? "active" : ""}`}
        id="navigation-menu"
      >
        <li>
          <a
            className="navigation-link"
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            {t.about}
          </a>
        </li>
        <li>
          <a
            className="navigation-link"
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            {t.services}
          </a>
        </li>
        <li>
          <a
            className="navigation-link"
            href="#education"
            onClick={() => setMenuOpen(false)}
          >
            {t.learning}
          </a>
        </li>
        <li>
          <a
            className="navigation-link"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            {t.contact}
          </a>
        </li>
      </ul>

      {/* GET STARTED BUTTON (hidden on mobile) */}
      <a
        href="#contact"
        className="get-started"
        role="button"
        aria-label={
          lang === "en" ? "Get started with us" : "Ξεκινήστε μαζί μας"
        }
      >
        {t.getStarted}
      </a>
    </nav>
  );
}

export default Navigation;
