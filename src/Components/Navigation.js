<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
import "./Navigation.css";

const handleLogoClick = () => window.location.reload();

<<<<<<< HEAD
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
=======
function Navigation({ lang, t, toggleLanguage, switchLanguage, fi }) {
  return (
    /* ///////////////////////////////////////////////////
      /////////////////NAVIGATION SECTION//////////////////////////
      //////////////////////////////////////////////////// /*/

    <nav className="navigation-bar">
      {/* LOGO */}
      {/* ////////////////////// */}
      <h1 className="logo cursor-pointer" onClick={handleLogoClick}>
        TarasidisAutomatics
      </h1>
      {/* NAVIGATION LINKS */}
      {/* ////////////////////////////////////// */}
      <ul className="navigation-links">
        <li>
          <a className="navigation-link" href="#about">
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
            {t.about}
          </a>
        </li>
        <li>
<<<<<<< HEAD
          <a
            className="navigation-link"
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
=======
          <a className="navigation-link" href="#services">
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
            {t.services}
          </a>
        </li>
        <li>
<<<<<<< HEAD
          <a
            className="navigation-link"
            href="#education"
            onClick={() => setMenuOpen(false)}
          >
=======
          <a className="navigation-link" href="#education">
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
            {t.learning}
          </a>
        </li>
        <li>
<<<<<<< HEAD
          <a
            className="navigation-link"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
=======
          <a className="navigation-link" href="#contact">
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
            {t.contact}
          </a>
        </li>
      </ul>
<<<<<<< HEAD

      {/* GET STARTED BUTTON (hidden on mobile) */}
      <a
        href="#contact"
        className="get-started"
        role="button"
        aria-label={
          lang === "en" ? "Get started with us" : "Ξεκινήστε μαζί μας"
        }
      >
=======
      {/* GET STARTED BUTTON */}
      {/* ////////////////////////////////////// */}
      <a href="#contact" className="get-started">
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
        {t.getStarted}
      </a>
    </nav>
  );
}

export default Navigation;
