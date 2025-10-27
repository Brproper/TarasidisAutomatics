import React from "react";
import "./Navigation.css";

const handleLogoClick = () => window.location.reload();

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
            {t.about}
          </a>
        </li>
        <li>
          <a className="navigation-link" href="#services">
            {t.services}
          </a>
        </li>
        <li>
          <a className="navigation-link" href="#education">
            {t.learning}
          </a>
        </li>
        <li>
          <a className="navigation-link" href="#contact">
            {t.contact}
          </a>
        </li>
      </ul>
      {/* GET STARTED BUTTON */}
      {/* ////////////////////////////////////// */}
      <a href="#contact" className="get-started">
        {t.getStarted}
      </a>
    </nav>
  );
}

export default Navigation;
