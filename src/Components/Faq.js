import React, { useEffect, useRef, useState } from "react";
import faqData from "../Components/faqData";
import "./Faq.css";

export default function Faq() {
  const faqs = faqData.en;
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
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        <h2 ref={headerRef} className={`faq-header ${inView ? "typing5" : ""}`}>
          Frequently Asked Questions
        </h2>

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
        </div>
      </div>
    </section>
  );
}
