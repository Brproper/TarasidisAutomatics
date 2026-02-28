import React, { useRef } from "react";
import "./HowItWorks.css";
import AnimatedHeader from "./AnimatedHeader";
import LazyVideo from "./LazyVideo";
import landingVideo2 from "../assets/videos/LandingPageAi2.mp4";

function HowItWorks() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.querySelector(".how-it-works-card");
    if (!card) return;

    const scrollAmount = card.offsetWidth + 32;
    const newScroll = el.scrollLeft + direction * scrollAmount;

    el.scrollTo({
      left: Math.max(0, Math.min(newScroll, el.scrollWidth)),
      behavior: "smooth",
    });
  };

  return (
    /* ///////////////////////////////////////////////////
      /////////////////EDUCATION SECTION/////////////////////////
      //////////////////////////////////////////////////// */
    <section className="how-it-works-section" id="howItWorks">
      {/* Background Video */}
      <LazyVideo src={landingVideo2} type="video/mp4" />

      {/* <div className="background-overlay" /> */}
      <div className="video-overlay2"></div>

      <div className="header-container">
        {/* EDUCATION HEADER */}
        <AnimatedHeader
          as="h2"
          className="section-heading"
          style={{
            "--typing-width": "10.5ch",
            "--typing-duration": "1.7s",
            "--typing-steps": "11",
            "--typing-cursor-color": "var(--background-color)",
          }}
        >
          How It Works
        </AnimatedHeader>
        <p className="section-subheading">
          A clear, <strong>structured process</strong>, focused on{" "}
          <strong>understanding first</strong>, before deciding if and how{" "}
          <strong>AI should be implemented</strong>.
        </p>
      </div>

      <div className="carousel-wrapper">
        {/* LEFT BUTTON outside carousel */}
        <button
          aria-label="Scroll carousel left"
          className="carousel-btn left"
          onClick={() => scrollCarousel(-1)}
        >
          <span>&#10094;</span>
        </button>

        {/* CAROUSEL */}
        <div className="carousel" id="education-carousel" ref={carouselRef}>
          <div className="cards-container">
            {/* STEP 1 */}
            <div className="how-it-works-card">
              <div className="card-inner">
                <h3>Step 1 — AI Readiness & Workflow Understanding</h3>
                <p>
                  We start by understanding how your business{" "}
                  <strong>actually operates</strong>. We assess{" "}
                  <strong>communication</strong>, <strong>workflows</strong>,{" "}
                  <strong>bottlenecks</strong>, and{" "}
                  <strong>decision points</strong>. This step may include a{" "}
                  <strong>short call</strong>, a <strong>questionnaire</strong>,
                  or both, depending on your setup.
                </p>
                <p className="micro-line-how">
                  No <strong>tools</strong>. No <strong>implementation</strong>.
                  Just <strong>clarity</strong>.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="how-it-works-card">
              <div className="card-inner">
                <h3>Step 2 — AI Audit & Opportunity Assessment</h3>
                <p>
                  We analyze where AI can create <strong>real value</strong> and
                  where it may add <strong>risk</strong>, <strong>cost</strong>,
                  or <strong>unnecessary complexity</strong>. You receive{" "}
                  <strong>clear recommendations</strong>,{" "}
                  <strong>priorities</strong>, and <strong>boundaries</strong>,
                  not a sales pitch for tools.
                </p>
                <p className="micro-line-how">
                  Many <strong>businesses stop</strong> here — and that's{" "}
                  <strong>perfectly fine</strong>.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="how-it-works-card">
              <div className="card-inner">
                <h3>Step 3 — Responsible AI Implementation</h3>
                <p>
                  Only after <strong>clarity</strong> and{" "}
                  <strong>alignment</strong>, we design and implement the{" "}
                  <strong>right AI solution</strong> — if implementation is
                  truly justified. This may include <strong>automations</strong>
                  , <strong>intelligent systems</strong>, or{" "}
                  <strong>custom AI projects</strong> — always tailored to your
                  real needs.
                </p>
                <p className="micro-line-how">
                  No <strong>unnecessary tools</strong>. No{" "}
                  <strong>over-automation</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BUTTON outside carousel */}
        <button
          aria-label="Scroll carousel right"
          className="carousel-btn right"
          onClick={() => scrollCarousel(1)}
        >
          <span>&#10095;</span>
        </button>
      </div>
    </section>
  );
}
export default HowItWorks;
