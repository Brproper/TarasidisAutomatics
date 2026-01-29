import "./Hero.css";
import AnimatedHeader from "./AnimatedHeader";
import LazyVideo from "./LazyVideo";
import landingVideo from "../assets/videos/LandingPageAi4.mp4";

function Hero() {
  return (
    <header className="hero-section" id="about">
      {/* Background Video */}
      <LazyVideo src={landingVideo} type="video/mp4" />

      <div className="video-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* HERO HEADERS */}
        <AnimatedHeader
          as="h1"
          className="gradient-text-hero"
          style={{
            "--typing-width": "39ch",
            "--typing-duration": "5.5s",
            "--typing-steps": "40",
            "--typing-cursor-color": "var(--background-color)",
          }}
        >
          AI Audit for Healthcare & Fitness Businesses
        </AnimatedHeader>
        <h2 className="gradient-text-hero">
          Make the right AI decisions before building anything.
        </h2>

        {/* Hero Description */}
        <div className="hero-description">
          <p>
            We help <strong>healthcare</strong> and{" "}
            <strong>fitness businesses</strong> understand where{" "}
            <strong>AI</strong> fits and where it doesn't, so they can make{" "}
            <strong>informed decisions</strong> before <strong>building</strong>{" "}
            anything.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Free AI Audit
          </button>
          <button
            className="secondary-btn"
            onClick={() => {
              window.open("https://forms.gle/h885zafRyB4YcHAY7", "_blank");
            }}
          >
            Take the Free AI Readiness Questionnaire
          </button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
