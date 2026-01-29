import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useScrollToSection from "./useScrollToSection";
import "./Navigation.css";
import logo from "../assets/imgs/logo.png";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => window.location.reload(), 100);
  };

  const handleScrollToSection = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className="navigation-bar"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* LOGO */}
      <div className="logo">
        <button
          onClick={handleLogoClick}
          aria-label="Go to homepage"
          className="logo-btn"
        >
          <img src={logo} alt="MedFitAI Logo" className="logo-img" />
        </button>
      </div>

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
        onClick={() => handleScrollToSection("contact")}
      >
        Book a Call
      </button>
    </nav>
  );
}

export default Navigation;
