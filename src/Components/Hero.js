import "./Hero.css";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import landingVideo from "../assets/videos/LandingPageAi4.mp4";

function Hero({ lang, t }) {
  const { ref, inView: inViewVideo } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const headerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Optional: animate only once
        }
      },
      {
        threshold: 1, // Adjust this if needed
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    /* ///////////////////////////////////////////////////
      /////////////////HERO SECTION//////////////////////////
      //////////////////////////////////////////////////// */

    <header className="hero-section" id="about" ref={ref}>
      {/* Background Video */}{" "}
      {inViewVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
          preload="none"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>
      )}
      {/* <div className="background-overlay" /> */}
      <div className="video-overlay"></div>
      {/* HERO HEADERS */}
      {/* ////////////////////////////////////// */}
      <h2 ref={headerRef} className={`${inView ? "typing1" : ""}`}>
        {t.heroTitle}
      </h2>
      <h3>{t.heroSubtitle}</h3>
      <div className="hero-description">
        {/* HERO DESCRIPTION MAIN PARAGRAPHS */}
        {/* ////////////////////////////////////// */}

        {lang === "en" ? (
          <p>
            At <strong>TarasidisAutomatics</strong>, we specialize in{" "}
            <strong>AI voice agents</strong>, <strong>AI automations</strong>,{" "}
            <strong>chatbots</strong>, and <strong>consultation bots</strong>{" "}
            tailored for <strong>healthcare professionals</strong> and{" "}
            <strong>coaches</strong>. Our solutions automate client interactions
            and streamline workflows.
          </p>
        ) : (
          <p>
            Στην <strong>TarasidisAutomatics</strong>, ειδικευόμαστε σε{" "}
            <strong>φωνητικούς πράκτορες AI</strong>,
            <strong>αυτοματισμούς</strong>, <strong>chatbots</strong> και{" "}
            <strong>bots συμβουλευτικής</strong> προσαρμοσμένα για{" "}
            <strong>επαγγελματίες υγείας</strong> και{" "}
            <strong>συμβούλους</strong>. Οι λύσεις μας αυτοματοποιούν την
            επικοινωνία με τους πελάτες και απλοποιούν την εργασία.
          </p>
        )}
        {lang === "en" ? (
          <p>
            Whether you’re a private clinic, wellness coach, or a digital health
            platform, our AI-powered systems are built to{" "}
            <strong>scale your business impact</strong>,{" "}
            <strong>improve your client retention</strong>, and{" "}
            <strong>boost your operational efficiency</strong>. We offer 24/7
            hour support.
          </p>
        ) : (
          <p>
            Είτε είστε ιδιωτικό ιατρείο, σύμβουλος ευεξίας ή ψηφιακή πλατφόρμα
            υγείας, τα συστήματά μας με τεχνητή νοημοσύνη είναι σχεδιασμένα για
            να <strong>επεκτείνουν την επίδρασή σας</strong>,{" "}
            <strong>βελτιώσουν την διατήρηση πελατών</strong> και{" "}
            <strong>να ενισχύσουν την αποδοτικότητα των λειτουργιών σας</strong>
            . Προσφέρουμε υποστήριξη 24/7.
          </p>
        )}
      </div>
      {/*PRIMARY BTN */}
      {/* ////////////////////////////////////// */}
      <a href="#services" className="primary-btn">
        {t.exploreServices}
      </a>
    </header>
  );
}

export default Hero;
