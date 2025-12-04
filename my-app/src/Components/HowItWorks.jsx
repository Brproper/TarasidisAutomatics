import React, { useRef } from "react";
import "./HowItWorks.css";
import { useInView } from "react-intersection-observer";
import useInViewHeader from "./useInViewHeader";

import landingVideo2 from "../assets/videos/LandingPageAi2.mp4";

function HowItWorks({ t }) {
  const { headerRef, inView } = useInViewHeader();

  const { ref, inView: inViewVideo } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
    <section className="how-it-works-section" id="howItWorks" ref={ref}>
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
        >
          <source src={landingVideo2} type="video/mp4" />
        </video>
      )}

      {/* <div className="background-overlay" /> */}
      <div className="video-overlay2"></div>

      <div className="header-container">
        {/* EDUCATION HEADER */}
        <h2
          ref={headerRef}
          className={`section-heading ${inView ? "typing4" : ""}`}
        >
          How It Works
        </h2>
        <p className="section-subheading">
          A simple, <strong>three-step</strong> process: we learn your{" "}
          <strong>workflow</strong>, build your <strong>custom AI</strong>{" "}
          system, and automate your{" "}
          <strong>calls, bookings, and follow-ups</strong>.
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
                <h3>{t.howItWorksStep1}</h3>
                <p>
                  We start with a <strong>30-minute call</strong> to understand
                  your <strong>workflow,</strong> how you handle{" "}
                  <strong>calls, inquiries, bookings, and reminders</strong>.
                  You simply walk us through your process, and we identify where{" "}
                  <strong>AI can save the most time</strong> and{" "}
                  <strong>reduce missed revenue</strong>.
                </p>
                <p className="italic">
                  Takes just <strong>30 minutes</strong>, no{" "}
                  <strong>technical setup</strong> required.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="how-it-works-card">
              <div className="card-inner">
                <h3>{t.howItWorksStep2}</h3>
                <p>
                  We design your{" "}
                  <strong>custom AI Voice Agent and Chatbot</strong> to match
                  your <strong>communication style</strong>,{" "}
                  <strong>tone</strong>, and <strong>workflow</strong>.
                  Everything connects directly to your tools:{" "}
                  <strong>calendar, CRM, or Google Sheets</strong>. Once ready,
                  we test it to ensure it <strong>sounds natural</strong> and{" "}
                  <strong>performs flawlessly</strong>.
                </p>
                <p className="italic">
                  Your system is <strong>ready</strong> within a{" "}
                  <strong>few days</strong> or <strong>weeks</strong> depending
                  on the <strong>project’s complexity</strong>.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="how-it-works-card">
              <div className="card-inner">
                <h3>{t.howItWorksStep3}</h3>
                <p>
                  From here, <strong>MedFit AI takes care of the rest</strong>:
                  <br />– <strong>Every call answered</strong>
                  <br />–{" "}
                  <strong>Leads qualified and booked automatically</strong>
                  <br />– <strong>Appointments confirmed</strong> and{" "}
                  <strong>reminders sent</strong>
                  <br />– <strong>Follow-ups handled seamlessly</strong>
                </p>
                <p className="italic">
                  Fewer <strong>no-shows</strong>, more{" "}
                  <strong>bookings</strong>, and{" "}
                  <strong>10+ hours saved weekly</strong>.
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
