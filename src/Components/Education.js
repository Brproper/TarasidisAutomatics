import React, { useEffect, useRef, useState } from "react";
import "./Education.css";
import { useInView } from "react-intersection-observer";
import landingVideo2 from "../assets/videos/LandingPageAi2.mp4";

function Education({ lang, t }) {
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

  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const cardWidth =
      carouselRef.current.querySelector(".education-card").offsetWidth;
    carouselRef.current.scrollBy({
      left: direction * (cardWidth + 32), // Assuming the gap between cards is 32px
      behavior: "smooth",
    });
  };

  return (
    /* ///////////////////////////////////////////////////
    /////////////////EDUCATION SECTION/////////////////////////
    //////////////////////////////////////////////////// */
    <section className="education-section" id="education" ref={ref}>
      {/* Background Video */}
      {inViewVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video2"
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
          className={`section-heading ${inView ? "typing2" : ""}`}
        >
          {t.educationTitle}
        </h2>
        {lang === "en" ? (
          <p className="section-subheading">
            Learn how to apply <strong>AI in real-world care settings</strong>
            —from health clinics and coaching practices to mental wellness
            platforms.
          </p>
        ) : (
          <p className="section-subheading">
            Μάθετε πώς να εφαρμόζετε{" "}
            <strong>
              την Τεχνητή Νοημοσύνη σε πραγματικά περιβάλλοντα φροντίδας
            </strong>{" "}
            — από ιατρικές κλινικές και πρακτικές coaching έως πλατφόρμες
            ψυχικής ευεξίας.
          </p>
        )}
      </div>

      <div className="carousel-wrapper">
        {/* CAROUSEL LEFT BUTTON */}
        <button
          aria-label="Scroll carousel left"
          className="carousel-btn left"
          onClick={() => scrollCarousel(-1)}
        >
          <span>&#10094;</span>
        </button>

        <div className="carousel" id="education-carousel" ref={carouselRef}>
          {/* EDUCATION CARD */}
          <div className="education-card">
            <div className="card-inner">
              <h3>{t.educationCard1Title}</h3>
              {lang === "en" ? (
                <p>
                  Discover how <strong>AI-powered voice agents</strong> can
                  streamline your clinic’s operations—from handling appointments
                  and patient inquiries to automating reminders and follow-ups.{" "}
                  <strong>Reduce administrative burden</strong> and focus more
                  on care and less on logistics.
                </p>
              ) : (
                <p>
                  Ανακαλύψτε πώς οι{" "}
                  <strong>φωνητικοί πράκτορες με Τεχνητή Νοημοσύνη</strong>{" "}
                  μπορούν να απλοποιήσουν τη λειτουργία της κλινικής σας — από
                  τη διαχείριση ραντεβού και ερωτήσεις ασθενών, έως την
                  αυτοματοποίηση υπενθυμίσεων και παρακολούθησης.
                  <strong> Μειώστε το διοικητικό φόρτο</strong> και
                  επικεντρωθείτε περισσότερο στη φροντίδα και λιγότερο στη
                  διαχείριση.
                </p>
              )}
              <a
                href="#contact"
                aria-label={`Learn more about ${t.educationCard1Title}`}
                className="learn-more-btn"
              >
                {t.learnMore}
              </a>
            </div>
          </div>

          {/* EDUCATION CARD */}
          <div className="education-card">
            <div className="card-inner">
              <h3>{t.educationCard2Title}</h3>
              {lang === "en" ? (
                <p>
                  Learn how to design and deploy{" "}
                  <strong>intelligent coaching assistants</strong> that engage
                  clients 24/7, assist with scheduling,{" "}
                  <strong>track progress toward goals</strong>, and deliver
                  personalized support. Discover tools and frameworks tailored
                  for <strong>life, fitness, and executive coaching</strong>{" "}
                  professionals.
                </p>
              ) : (
                <p>
                  Μάθετε πώς να σχεδιάζετε και να υλοποιείτε
                  <strong> έξυπνους βοηθούς coaching</strong> που αλληλεπιδρούν
                  με πελάτες 24/7, βοηθούν στον προγραμματισμό ραντεβού,
                  <strong>
                    παρακολουθούν την πρόοδο προς τους στόχους
                  </strong>{" "}
                  και προσφέρουν εξατομικευμένη υποστήριξη. Ανακαλύψτε εργαλεία
                  και πλαίσια ειδικά σχεδιασμένα για
                  <strong>
                    {" "}
                    coaching ζωής, φυσικής κατάστασης και στελεχών
                  </strong>
                  .
                </p>
              )}
              <a
                href="#contact"
                aria-label={`Learn more about ${t.educationCard2Title}`}
                className="learn-more-btn"
              >
                {t.learnMore}
              </a>
            </div>
          </div>

          {/* EDUCATION CARD */}
          <div className="education-card">
            <div className="card-inner">
              <h3>{t.educationCard3Title}</h3>
              {lang === "en" ? (
                <p>
                  Explore how <strong>practice automation</strong>—from billing
                  to intake forms—saves time, reduces error, and lets clinicians
                  and coaches <strong>focus more on care</strong> than admin
                  tasks. Includes integration tips for small teams.
                </p>
              ) : (
                <p>
                  Εξερευνήστε πώς η <strong>αυτοματοποίηση πρακτικών</strong>—
                  από τη χρέωση έως τις φόρμες εγγραφής — εξοικονομεί χρόνο,
                  μειώνει τα λάθη και επιτρέπει σε κλινικούς και coaches να
                  <strong>
                    {" "}
                    επικεντρώνονται περισσότερο στη φροντίδα
                  </strong>{" "}
                  παρά στις διοικητικές εργασίες. Περιλαμβάνει συμβουλές
                  ενσωμάτωσης για μικρές ομάδες.
                </p>
              )}
              <a
                href="#contact"
                aria-label={`Learn more about ${t.educationCard3Title}`}
                className="learn-more-btn"
              >
                {t.learnMore}
              </a>
            </div>
          </div>

          {/* EDUCATION CARD */}
          <div className="education-card">
            <div className="card-inner">
              <h3>{t.educationCard4Title}</h3>
              {lang === "en" ? (
                <p>
                  Discover <strong>AI tools</strong> that support mental health
                  professionals with features like mood tracking, personalized
                  journaling, and emotional support bots—all while maintaining{" "}
                  <strong>privacy and empathy</strong> at the core.
                </p>
              ) : (
                <p>
                  Ανακαλύψτε <strong>εργαλεία Τεχνητής Νοημοσύνης</strong> που
                  υποστηρίζουν επαγγελματίες ψυχικής υγείας με λειτουργίες όπως
                  παρακολούθηση διάθεσης, εξατομικευμένο ημερολόγιο και bots
                  συναισθηματικής υποστήριξης — όλα με βασική προτεραιότητα την
                  <strong> ιδιωτικότητα και ενσυναίσθηση</strong>.
                </p>
              )}
              <a
                href="#contact"
                aria-label={`Learn more about ${t.educationCard4Title}`}
                className="learn-more-btn"
              >
                {t.learnMore}
              </a>
            </div>
          </div>
        </div>

        {/* CAROUSEL RIGHT BUTTON */}
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
export default Education;
