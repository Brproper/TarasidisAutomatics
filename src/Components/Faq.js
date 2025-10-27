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
    <section className="faq-section">
      <div className="faq-wrapper">
        <h2
          ref={headerRef}
          className={`faq-question ${inView ? "typing5" : ""}`}
        >
          {lang === "el"
            ? "Συχνές Ερωτήσεις Πελατών"
            : "Frequently Asked Questions"}
        </h2>
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
        </div>
      </div>
    </section>
  );
}
