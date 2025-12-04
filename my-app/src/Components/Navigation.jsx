import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollToSection = (id) => {
    setMenuOpen(false);

    const scroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      // Go home first, then scroll
      navigate("/");
      setTimeout(scroll, 400);
    } else {
      scroll();
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
          onClick={handleLogoClick}
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
        {/* ✅ Use navigate instead of Link to avoid reloads on GitHub Pages */}
        <li>
          <button
            className="navigation-link"
            onClick={() => {
              setMenuOpen(false);
              navigate("/founder");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            About
          </button>
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
        onClick={() => {
          const element = document.getElementById("getStarted");
          if (element) {
            const yOffset = -500; // adjust this value to move up (negative = higher)
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
      >
        Book a Call
      </button>
    </nav>
  );
}

export default Navigation;
