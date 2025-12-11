import "./Contact.css";
import { useInView } from "react-intersection-observer";
import useInViewHeader from "./useInViewHeader";
import landingVideo3 from "../assets/videos/LandingPageAi1.webm";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef(null);
  const calendlyRef = useRef(null);

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = (form) => {
    let newErrors = {};

    if (!form.name.value.trim()) newErrors.name = "Full Name is required.";
    if (!form.email.value.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email.value))
      newErrors.email = "Invalid email.";
    if (form.message.value.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage("Please fix the errors in the form.");
      setStatusType("error");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_3ybbdhq",
        "template_j9ihhvr",
        formRef.current,
        "JgUF4zEBRoIWxSQEZ"
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setStatusType("success");
          formRef.current.reset();
          setErrors({});
          setTimeout(() => setStatusMessage(""), 5000);
        },
        () => {
          setStatusMessage("Failed to send message. Please try again.");
          setStatusType("error");
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  useEffect(() => {
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

      <div className="video-overlay3"></div>

      <div className="contact-intro-container">
        <h3
          ref={headerRef}
          className={`contact-header ${inView ? "typing6" : ""}`}
        >
          CONNECT WITH US
        </h3>
        <p>
          Let’s explore how <strong>AI</strong> can <strong>streamline</strong>{" "}
          your workflow, <strong>automate communication</strong>, and elevate
          your <strong>client experience</strong>.
        </p>
      </div>

      <div className="contact-flex-container">
        <div className="contact-container">
          <div>
            <h3 className="contact-form-header">Get in Touch</h3>
            <p>
              We’d love to learn about your business and explore how AI can fit
              your workflow.
            </p>
          </div>

          <div className="socials-container">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="mailto:info@medfitai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="mail-outline"></ion-icon>
              </a>
              <a
                href="https://www.linkedin.com/company/109747993/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            {/* Status message */}
            {statusMessage && (
              <div className={`form-status ${statusType}`}>{statusMessage}</div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
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
                placeholder="How can we help you?"
                className={errors.message ? "input-error" : ""}
              ></textarea>
              {errors.message && (
                <span className="error-text">{errors.message}</span>
              )}
            </div>

            <button id="BookACall" type="submit" className="secondary-btn">
              Send Message
            </button>
          </form>
        </div>

        <div
          ref={calendlyRef}
          className="contact-caledly calendly-inline-widget"
          data-url="https://calendly.com/tarasidis17/discovery-call"
        ></div>
      </div>
    </section>
  );
}

export default Contact;
