import "./Contact.css";
import AnimatedHeader from "./AnimatedHeader";
import LazyVideo from "./LazyVideo";
import landingVideo3 from "../assets/videos/LandingPageAi1.webm";
import React, { useEffect, useRef } from "react";

function Contact() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="contact-section">
      <LazyVideo src={landingVideo3} type="video/webm" />

      <div className="video-overlay3"></div>

      <div className="contact-wrapper">
        <div className="contact-intro-container">
          <AnimatedHeader
            as="h3"
            className="contact-header"
            style={{
              "--typing-width": "27.5ch",
              "--typing-duration": "3.8s",
              "--typing-steps": "27",
              "--typing-cursor-color": "var(--background-color)",
            }}
          >
            Let's Talk About Your AI Use Case
          </AnimatedHeader>
          <p>
            Book a <strong>30-minute</strong> AI Clarity Call to{" "}
            <strong>evaluate</strong> your <strong>workflow</strong> and decide
            <strong> next steps</strong> with <strong>zero obligation</strong>.
          </p>
        </div>

        <div className="contact-flex-container">
          <div
            ref={calendlyRef}
            className="contact-caledly calendly-inline-widget"
            data-url="https://calendly.com/tarasidis17/discovery-call?hide_event_type_details=1"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
