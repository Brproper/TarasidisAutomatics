import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import ChatbotsImg from "../assets/imgs/ChatBots.jpg";
import DataImg from "../assets/imgs/Data.jpg";
import Sound from "../assets/imgs/Sound.jpg";
import TechBrainAi from "../assets/imgs/TechBrainAi3.jpg";

function Services({ lang, t }) {
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
      /////////////////Services Section/////////////////////
      //////////////////////////////////////////////////// */
    <section id="services" className="services-section">
      <h3 ref={headerRef} className={`${inView ? "typing3" : ""}`}>
        {t.servicesTitle}
      </h3>
      {lang === "en" ? (
        <p className="services-intro">
          Explore our range of <strong>cutting-edge AI services</strong>{" "}
          tailored to boost efficiency, engagement, and innovation across your
          business.
        </p>
      ) : (
        <p className="services-intro">
          Εξερευνήστε τη γκάμα από{" "}
          <strong>καινοτόμες υπηρεσίες Τεχνητής Νοημοσύνης</strong> που είναι
          σχεδιασμένες για να αυξήσουν την αποδοτικότητα, την αλληλεπίδραση και
          την καινοτομία στην επιχείρησή σας.
        </p>
      )}

      <div className="services-grid">
        {/*SERVICE CARD */}
        {/* ////////////////////////////////////// */}
        <div className="service-card">
          {/* SVG ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="service-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>

          <h4>{t.service1Title}</h4>

          {lang === "en" ? (
            <p>
              Automate support with <strong>intelligent chatbots</strong> that
              respond instantly, learn from <strong>conversations</strong>, and
              deliver <strong>consistent 24/7 service</strong>.
            </p>
          ) : (
            <p>
              Αυτοματοποιήστε την υποστήριξη με <strong>έξυπνα chatbots</strong>{" "}
              που απαντούν άμεσα, μαθαίνουν από <strong>συνομιλίες</strong> και
              παρέχουν <strong>συνεπή εξυπηρέτηση 24/7</strong>.
            </p>
          )}
<<<<<<< HEAD
          <a href="#contact" className="learn-more-btn">
            {t.learnMore}
          </a>
        </div>

        <div className="service-image">
          <img src={ChatbotsImg} alt="Group of Chatbots" />
        </div>

        <div className="service-image">
          <img src={Sound} alt="Voice assistant " />
=======
          <a href="#contact">{t.learnMore}</a>
        </div>

        <div className="service-image">
          <img src={ChatbotsImg} alt="Service visual" />
        </div>

        <div className="service-image">
          <img src={Sound} alt="Service visual" />
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
        </div>

        {/*SERVICE CARD */}
        {/* ////////////////////////////////////// */}
        <div className="service-card">
          {/* SVG ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="service-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>

          <h4>{t.service2Title}</h4>

          {lang === "en" ? (
            <p>
              Power your apps with{" "}
              <strong>conversational voice interfaces</strong>, perfect for{" "}
              <strong>hands-free use cases</strong> and{" "}
              <strong>accessibility-first experiences</strong>.
            </p>
          ) : (
            <p>
              Ενισχύστε τις εφαρμογές σας με{" "}
              <strong>συνομιλιακές φωνητικές διεπαφές</strong>, ιδανικές για{" "}
              <strong>hands-free σενάρια</strong> και{" "}
              <strong>προσβάσιμες-πρώτες εμπειρίες</strong>.
            </p>
          )}
<<<<<<< HEAD
          <a href="#contact" className="learn-more-btn">
            {t.learnMore}
          </a>
=======
          <a href="#contact">{t.learnMore}</a>
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
        </div>

        {/*SERVICE CARD */}
        {/* ////////////////////////////////////// */}
        <div className="service-card">
          {/* SVG ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="service-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>

          <h4>{t.service3Title}</h4>

          {lang === "en" ? (
            <p>
              Uncover <strong>actionable insights</strong> with AI models that{" "}
              <strong>detect patterns</strong>, <strong>forecast trends</strong>
              , and <strong>optimize decisions</strong> in real-time.
            </p>
          ) : (
            <p>
              Ανακαλύψτε <strong>χρήσιμες πληροφορίες</strong> με μοντέλα AI που{" "}
              <strong>εντοπίζουν πρότυπα</strong>,{" "}
              <strong>προβλέπουν τάσεις</strong> και{" "}
              <strong>βελτιστοποιούν αποφάσεις</strong> σε πραγματικό χρόνο.
            </p>
          )}
<<<<<<< HEAD
          <a href="#contact" className="learn-more-btn">
            {t.learnMore}
          </a>
        </div>

        <div className="service-image">
          <img src={DataImg} alt="Data Analytics" />
        </div>

        <div className="service-image">
          <img src={TechBrainAi} alt="Custom Ai" />
=======
          <a href="#contact">{t.learnMore}</a>
        </div>

        <div className="service-image">
          <img src={DataImg} alt="Service visual" />
        </div>

        <div className="service-image">
          <img src={TechBrainAi} alt="Service visual" />
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
        </div>

        {/*SERVICE CARD */}
        {/* ////////////////////////////////////// */}
        <div className="service-card">
          {/* SVG ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="service-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>

          <h4>{t.service4Title}</h4>

          {lang === "en" ? (
            <p>
              Build <strong>tailored AI solutions</strong> like{" "}
              <strong>vision or language models</strong> trained on your data to
              gain <strong>control</strong> and a{" "}
              <strong>competitive edge</strong>.
            </p>
          ) : (
            <p>
              Δημιουργήστε <strong>προσαρμοσμένες λύσεις AI</strong> όπως{" "}
              <strong>μοντέλα εικόνας ή γλώσσας</strong> εκπαιδευμένα στα δικά
              σας δεδομένα για <strong>πλήρη έλεγχο</strong> και{" "}
              <strong>ανταγωνιστικό πλεονέκτημα</strong>.
            </p>
          )}
<<<<<<< HEAD
          <a href="#contact" className="learn-more-btn">
            {t.learnMore}
          </a>
=======
          <a href="#contact">{t.learnMore}</a>
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
        </div>
      </div>
    </section>
  );
}

export default Services;
