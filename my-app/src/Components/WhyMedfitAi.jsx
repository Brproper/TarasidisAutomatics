import useInViewHeader from "./useInViewHeader";

import "./WhyMedfitAI.css";

export default function WhyMedfitAI() {
  const { headerRef, inView } = useInViewHeader();

  return (
    <section className="why-medfit-section" id="whyMedfitAI">
      <div className="why-medfit-wrapper">
        <h2 ref={headerRef} className={`${inView ? "typing7" : ""}`}>
          WHY MEDFIT AI
        </h2>

        <div className="why-intro-container">
          <p className="why-intro">
            <strong>MedFit AI</strong> wasn’t built by marketers or generic
            developers, it was founded by a <strong>medical doctor</strong>,
            certified in <strong>fitness coaching</strong>, who learned from
            scratch how to create effective AI solutions.
          </p>

          <p className="why-intro">
            We understand the daily challenges of clinics, doctors, and fitness
            professionals, because we’ve lived close to both worlds.
          </p>

          <p className="why-intro">
            That’s why every AI solution we design is built with{" "}
            <strong>empathy, precision, and measurable impact</strong>, so
            professionals can focus on <strong>people, not paperwork</strong>.
          </p>
        </div>

        <div className="why-quote">
          <p>
            {" "}
            “I created MedFit AI to bridge the gap between care and technology
            and helping professionals focus on people, not paperwork.”
          </p>
        </div>
      </div>
    </section>
  );
}
