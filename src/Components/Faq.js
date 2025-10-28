import React, { useEffect, useRef, useState } from "react";
import faqData from "../Components/faqData";
import "./Faq.css";

export default function Faq({ lang }) {
  const faqs = faqData[lang];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const headerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
<<<<<<< HEAD
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
=======
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

>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
    return () => observer.disconnect();
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
<<<<<<< HEAD
        <h2 ref={headerRef} className={`faq-header ${inView ? "typing5" : ""}`}>
=======
        <h2
          ref={headerRef}
          className={`faq-question ${inView ? "typing5" : ""}`}
        >
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
          {lang === "el"
            ? "Συχνές Ερωτήσεις Πελατών"
            : "Frequently Asked Questions"}
        </h2>
<<<<<<< HEAD

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isActive ? "active" : ""}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <span
                    className={`faq-arrow ${isActive ? "down" : ""}`}
                    aria-hidden="true"
                  >
                    ❯
                  </span>
                </button>
                <p
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  hidden={!isActive}
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
=======
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <h3 className="faq-question">
                {faq.question}
                <span
                  className={`faq-arrow ${activeIndex === index ? "down" : ""}`}
                >
                  ❯
                </span>
              </h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
>>>>>>> 37aacfb7b23791eb8e546c149e5c2b292afdc6bd
        </div>
      </div>
    </section>
  );
}
