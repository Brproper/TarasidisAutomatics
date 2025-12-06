import "./Contact.css";
import { useInView } from "react-intersection-observer";
import useInViewHeader from "./useInViewHeader";
import landingVideo3 from "../assets/videos/LandingPageAi1.webm";
import React, { useEffect, useRef } from "react";

function Contact() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const { ref, inView: inViewVideo } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { headerRef, inView } = useInViewHeader();

  return (
    /* ///////////////////////////////////////////////////
/////////////////CONTACT SECTION/////////////////////////
//////////////////////////////////////////////////// */
    <section id="contact" className="contact-section" ref={ref}>
      {inViewVideo && (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
          preload="none"
        >
          <source src={landingVideo3} type="video/webm" />
        </video>
      )}

      {/* <div className="background-overlay" /> */}
      <div className="video-overlay3"></div>
      {/* Section description text (outside columns) */}
      <div className="contact-intro-container">
        <h3
          ref={headerRef}
          className={`contact-header ${inView ? "typing6" : ""}`}
        >
          CONNECT WITH US
        </h3>
        <p>
          Let’s explore how <strong>AI</strong> can <strong>streamline </strong>{" "}
          your
          <strong> workflow</strong>, <strong>automate communication</strong>,
          and elevate your <strong>client experience</strong>.
        </p>
      </div>

      {/* Contact Container */}
      {/* ////////////////////////////////////// */}
      <div className="contact-flex-container">
        <div className="contact-container">
          {/* RIGHT SIDE — Contact Info */}

          <div>
            <h3 className="contact-form-header">Get in Touch</h3>
            <p>
              We’d love to learn about your business and explore how AI can fit
              your workflow.
            </p>
          </div>

          {/* SOCIALS CONTAINER */}
          {/* ////////////////////////////////////// */}
          <div className="socials-container">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="mailto:info@medfitai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="mail-outline"
                  aria-label="send us an email"
                ></ion-icon>
              </a>
              {/* <a
                href="https://www.facebook.com/profile.php?id=100013231872326"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="logo-facebook"
                  aria-label="Visit our Facebook page"
                ></ion-icon>
              </a> */}
              <a
                href="https://www.linkedin.com/company/109747993/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="logo-linkedin"
                  aria-label="Visit our Linkedin"
                ></ion-icon>
              </a>
            </div>
          </div>

          {/* FORM CONTAINER */}
          {/* ////////////////////////////////////// */}
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder=" Your Full Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company's Name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button id="BookACall" type="submit" className="secondary-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* LEFT SIDE — Caledly */}
        <div
          ref={calendlyRef}
          className="contact-caledly calendly-inline-widget"
          data-url="https://calendly.com/tarasidis17/discovery-call"
          // style={{ minWidth: "500px", height: "550px" }}
        ></div>
      </div>
    </section>
  );
}
export default Contact;
