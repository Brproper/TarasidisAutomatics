import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

// Multilingual testimonials
const testimonialsData = [
  {
    name: "Dr. Elena Papadopoulos",
    role: {
      en: "Integrative Health Coach",
      el: "Σύμβουλος Ολιστικής Υγείας",
    },
    text: {
      en: "TarasidisAutomatics helped me automate 80% of my client interactions. It is amazing!",
      el: "Η TarasidisAutomatics με βοήθησε να αυτοματοποιήσω το 80% των επαφών με πελάτες. Είναι καταπληκτικό!",
    },
  },
  {
    name: "Nikos Antoniou",
    role: {
      en: "Private Clinic Owner",
      el: "Ιδιοκτήτης Ιδιωτικής Κλινικής",
    },
    text: {
      en: "We reduced admin work significantly. Our patients now get 24/7 support without us lifting a finger.",
      el: "Μειώσαμε σημαντικά τη γραφειοκρατία. Οι ασθενείς μας έχουν υποστήριξη 24/7 χωρίς καμία προσπάθεια από εμάς.",
    },
  },
  {
    name: "Maria Kalogirou",
    role: {
      en: "Wellness Consultant",
      el: "Σύμβουλος Ευεξίας",
    },
    text: {
      en: "The AI chatbot is a game changer. It's like having a virtual assistant that never sleeps!",
      el: "Το chatbot αυτό είναι πραγματικά επαναστατικό. Είναι σαν να έχεις έναν βοηθό που δεν κοιμάται ποτέ!",
    },
  },
];

export default function Testimonials({ lang }) {
  const isGreek = lang === "el";

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
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-wrapper">
        <h2 ref={headerRef} className={`${inView ? "typing4" : ""}`}>
          {isGreek ? "Τι λένε οι Πελάτες μας" : "What Our Clients Say"}
        </h2>
        <div className="testimonials-list">
          {testimonialsData.map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">“{item.text[lang]}”</p>
              <h3 className="testimonial-name">{item.name}</h3>
              <p className="testimonial-role">{item.role[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
