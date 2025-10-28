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
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="hero-section" id="about" ref={ref}>
      {/* Background Video */}
      {inViewVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
          preload="none"
          aria-hidden="true" // Accessibility: hide video from screen readers
          poster="/assets/images/hero-poster.jpg" // Optional fallback image
        >
          <source src={landingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="video-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* HERO HEADERS */}
        <h1 ref={headerRef} className={`${inView ? "typing1" : ""}`}>
          {t.heroTitle}
        </h1>
        <h2>{t.heroSubtitle}</h2>

        {/* Hero Description */}
        <div className="hero-description">
          {lang === "en" ? (
            <>
              <p>
                At <strong>TarasidisAutomatics</strong>, we specialize in{" "}
                <strong>AI voice agents</strong>,{" "}
                <strong>AI automations</strong>,<strong> chatbots</strong>, and{" "}
                <strong>consultation bots</strong> tailored for{" "}
                <strong>healthcare professionals</strong> and{" "}
                <strong>coaches</strong>. Our solutions automate client
                interactions and streamline workflows.
              </p>
              <p>
                Whether you’re a private clinic, wellness coach, or a digital
                health platform, our AI-powered systems are built to{" "}
                <strong>scale your business impact</strong>,{" "}
                <strong>improve client retention</strong>, and{" "}
                <strong>boost operational efficiency</strong>. We offer 24/7
                support.
              </p>
            </>
          ) : (
            <>
              <p>
                Στην <strong>TarasidisAutomatics</strong>, ειδικευόμαστε σε{" "}
                <strong>φωνητικούς πράκτορες AI</strong>,{" "}
                <strong>αυτοματισμούς</strong>,<strong> chatbots</strong> και{" "}
                <strong>bots συμβουλευτικής</strong> για{" "}
                <strong>επαγγελματίες υγείας</strong> και{" "}
                <strong>συμβούλους</strong>. Οι λύσεις μας αυτοματοποιούν την
                επικοινωνία με τους πελάτες και απλοποιούν τη δουλειά.
              </p>
              <p>
                Είτε είστε ιδιωτικό ιατρείο, σύμβουλος ευεξίας ή ψηφιακή
                πλατφόρμα υγείας, τα συστήματά μας AI είναι σχεδιασμένα{" "}
                <strong>να επεκτείνουν την επίδρασή σας</strong>,{" "}
                <strong>να βελτιώσουν τη διατήρηση πελατών</strong> και{" "}
                <strong>να ενισχύσουν την αποδοτικότητα σας</strong>.
                Προσφέρουμε υποστήριξη 24/7.
              </p>
            </>
          )}
        </div>

        {/* Primary CTA */}
        <a href="#services" className="primary-btn" role="button">
          {t.exploreServices}
        </a>
      </div>
    </header>
  );
}

export default Hero;
