import "./Hero.css";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import landingVideo from "../assets/videos/LandingPageAi4.mp4";

function Hero({ t }) {
  const { ref, inView: inViewVideo } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const headerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Stop observing permanently
        }
      },
      { threshold: 0.5 } // triggers when 50% is visible
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []); // ✅ empty deps — only run once

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
          aria-hidden="true"
          loading="lazy"
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
          <>
            <p>
              At <strong>MedFit AI</strong>, we specialize in{" "}
              <strong>AI voice agents, chatbots, and automations</strong> built
              specifically for <strong>healthcare</strong> and{" "}
              <strong>fitness professionals</strong>. Our solutions{" "}
              <strong>reduce admin time</strong>,{" "}
              <strong>increase bookings</strong>, and deliver{" "}
              <strong>smoother client experiences</strong>.
            </p>
            <p>
              Whether you run a <strong>private clinic</strong> or a{" "}
              <strong>fitness business</strong>, our{" "}
              <strong>AI-powered systems</strong> help you{" "}
              <strong>answer every call</strong>,{" "}
              <strong>boost client retention</strong>, and{" "}
              <strong>grow effortlessly</strong> — with{" "}
              <strong>24/7 support</strong>.
            </p>
          </>
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
