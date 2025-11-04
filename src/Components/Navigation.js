import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import "./Navigation.css";

const handleLogoClick = (navigate) => {
  navigate("/"); // navigate to homepage
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Navigation({ t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ define navigate here

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScrollToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // navigate to homepage first if not there
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className="navigation-bar"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* LOGO */}
      <h1 className="logo">
        <button
          onClick={() => handleLogoClick(navigate)} // ✅ pass navigate
          aria-label="Go to homepage"
          className="logo-btn"
        >
          MedFitAI
        </button>
      </h1>

      {/* HAMBURGER MENU */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* LINKS */}
      <ul className={`navigation-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            className="navigation-link"
            to="/founder"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <button
            className="navigation-link"
            onClick={() => handleScrollToSection("who-we-help")}
          >
            Who We Help
          </button>
        </li>

        <li>
          <button
            className="navigation-link"
            onClick={() => handleScrollToSection("services")}
          >
            Services
          </button>
        </li>

        <li>
          <button
            className="navigation-link"
            onClick={() => handleScrollToSection("howItWorks")}
          >
            How It Works
          </button>
        </li>

        <li>
          <button
            className="navigation-link"
            onClick={() => handleScrollToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>

      {/* GET STARTED */}
      <button
        className="get-started"
        onClick={() => handleScrollToSection("contact")}
      >
        {t?.getStarted || "Get Started"}
      </button>
    </nav>
  );
}

export default Navigation;
