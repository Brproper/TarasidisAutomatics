import React, { useState } from "react";
import "./index.css";

import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Education from "./Components/Education";
import Faq from "./Components/Faq";
import Testimonials from "./Components/Testimonials.js";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import translations from "./Components/translations";

export default function App() {
  const [lang, setLang] = useState("en"); // "el" για ελληνικά
  const [fi, setFi] = useState("fi fi-gb");

  function LanguageSwitcher() {
    setLang((prevLang) => (prevLang === "en" ? "el" : "en"));
  }

  function ToggleLanguage() {
    setFi((prev) => (prev === "fi fi-gr" ? "fi fi-gb" : "fi fi-gr"));
  }

  const t = translations[lang];

  return (
    <>
      {
        ////////////////////////////////////
        /* Navigation / Hero Sections 
      /////////////////////////////////*/
      }
      <Navigation
        lang={lang}
        t={t}
        toggleLanguage={ToggleLanguage}
        switchLanguage={LanguageSwitcher}
        fi={fi}
      />
      <Hero lang={lang} t={t} />

      {
        ////////////////////////////////////
        /* Language Switcher 
      /////////////////////////////////*/
      }
      <div className="language-switcher">
        <button
          className="language-switcher-btn"
<<<<<<< HEAD
          aria-label="language-switcher-btn"
=======
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
          onClick={() => {
            LanguageSwitcher();
            ToggleLanguage();
          }}
        >
          <ion-icon name="swap-horizontal-outline"></ion-icon>

          <span className={fi}></span>
        </button>
      </div>

      {
        ////////////////////////////////////
        /* Services Section
      /////////////////////////////////*/
      }
      <Services lang={lang} t={t} />

      {
        ////////////////////////////////////
        /* Education Section
      /////////////////////////////////*/
      }
      <Education lang={lang} t={t} />

      {
        ////////////////////////////////////
        /* Testimonials Section
      /////////////////////////////////*/
      }
      <Testimonials lang={lang} />

      {
        ////////////////////////////////////
        /* FAQ Section
      /////////////////////////////////*/
      }
      <Faq lang={lang} />

      {
        ////////////////////////////////////
        /* Contact Section
      /////////////////////////////////*/
      }
      <Contact lang={lang} t={t} />

      {
        ////////////////////////////////////
        /* Footer Section
      /////////////////////////////////*/
      }
      <Footer lang={lang} t={t} />
    </>
  );
}
