import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { useInView } from "react-intersection-observer";
import landingVideo3 from "../assets/videos/LandingPageAi1.mp4";

function Contact({ lang, t }) {
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
          className="background-video3"
          preload="none"
        >
          <source src={landingVideo3} type="video/webm" />
        </video>
      )}

      {/* <div className="background-overlay" /> */}
      <div className="video-overlay3"></div>
      <h3
        ref={headerRef}
        className={`contact-header ${inView ? "typing6" : ""}`}
      >
        {t.contactTitle}
      </h3>

      {/* Contact Container */}
      {/* ////////////////////////////////////// */}
      <div className="contact-wrapper">
        <div className="contact-container">
          <h3 className="contact-form-header">{t.sendMessageTitle}</h3>
          <p>{t.sendMessageSubtitle}</p>

          {/* CONTACT FORM */}
          {/* ////////////////////////////////////// */}
          <form className="contact-form">
            <input
              id="name"
              type="text"
              name="name"
              placeholder={t.namePlaceholder}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="random@gmail.com"
              required
            />
            <textarea
              name="message"
              placeholder={t.messagePlaceholder}
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="primary-btn"
              aria-label="send message"
            >
              {t.sendMessage}
            </button>
          </form>
        </div>

        {/* CONTACT INFORMATION */}
        {/* ////////////////////////////////////// */}
        <div className="contact-info">
          <div className="contact-email">
            <h3>{t.contactInfoTitle}</h3>
            <div>
              <button aria-label="Send email">
                <ion-icon name="mail-outline"></ion-icon>
              </button>
              <a href="mailto:tarasidisautomatics@gmail.com">
                tarasidisautomatics@gmail.com
              </a>
            </div>
          </div>

          {/* SOCIALS CONTAINER */}
          {/* ////////////////////////////////////// */}
          <div className="socials-container">
            <h3>{t.followUs}</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100013231872326"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="logo-facebook"
                  aria-label="Visit our Facebook page"
                ></ion-icon>
              </a>
              <a
                href="https://www.linkedin.com/company/tarasidisautomatics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="logo-linkedin"
                  aria-label="Visit our Linkedin"
                ></ion-icon>
              </a>
              <a
                href="https://www.instagram.com/tarasidisautomatics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="logo-instagram"
                  aria-label="Visit our Instagram page"
                ></ion-icon>
              </a>
            </div>
          </div>

          {/* WHY CHOOSE TARASIDIS AUTOMATICS LIST */}
          {/* ////////////////////////////////////// */}
          <div className="why-choose-list">
            <h3>{t.whyChooseTitle}</h3>
            <ul>
              {lang === "el" ? (
                <>
                  <li>
                    <span>✓</span>Εξατομικευμένες <strong>λύσεις AI</strong>
                    για εσάς
                  </li>
                  <li>
                    <span>✓</span>Ομάδα ειδικών με
                    <strong>βαθιά εμπειρία στον κλάδο</strong>
                  </li>
                  <li>
                    <span>✓</span>
                    <strong>Αποδεδειγμένα αποτελέσματα</strong> με εφαρμογή
                  </li>
                  <li>
                    <span>✓</span>
                    <strong>Συνεχής</strong> υποστήριξη και εκπαίδευση πελατών
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <span>✓</span>Personalized<strong> AI solutions</strong>
                    for your business
                  </li>
                  <li>
                    <span>✓</span>Expert team with
                    <strong> deep industry experience</strong>
                  </li>
                  <li>
                    <span>✓</span>
                    <strong>Proven results</strong>with seamless implementation
                  </li>
                  <li>
                    <span>✓</span>
                    <strong>Ongoing</strong> support and client education
                  </li>
                </>
              )}
            </ul>
          </div>

          <button className="secondary-btn" aria-label="Book call">
            {t.bookCall}
          </button>
        </div>
      </div>
    </section>
  );
}
export default Contact;
