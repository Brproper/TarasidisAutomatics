// import React, { useState } from "react";
// import faqData from "./faqData";
// import useInViewHeader from "./useInViewHeader";

// import "./Faq.css";

// export default function Faq() {
//   const faqs = faqData.en;
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFaq = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const { headerRef, inView } = useInViewHeader();

//   return (
//     <section className="faq-section">
//       <div className="faq-wrapper">
//         <h2 ref={headerRef} className={`faq-header ${inView ? "typing5" : ""}`}>
//           Frequently Asked Questions
//         </h2>

//         <div className="faq-list">
//           {faqs.map((faq, index) => {
//             const isActive = activeIndex === index;
//             return (
//               <div
//                 key={index}
//                 className={`faq-item ${isActive ? "active" : ""}`}
//               >
//                 <button
//                   className="faq-question-btn"
//                   onClick={() => toggleFaq(index)}
//                   aria-expanded={isActive}
//                   aria-controls={`faq-answer-${index}`}
//                 >
//                   {faq.question}
//                   <span
//                     className={`faq-arrow ${isActive ? "down" : ""}`}
//                     aria-hidden="true"
//                   >
//                     ❯
//                   </span>
//                 </button>
//                 <p
//                   id={`faq-answer-${index}`}
//                   className="faq-answer"
//                   hidden={!isActive}
//                 >
//                   {faq.answer}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
