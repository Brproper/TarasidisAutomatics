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

        <p className="why-intro">
          <strong>MedFit AI</strong> wasn’t built by marketers or generic
          developers — it was founded by a <strong>medical doctor</strong>,
          certified in <strong>fitness coaching</strong>, who learned from
          scratch how to create effective AI solutions.
        </p>

        <p className="why-intro">
          We understand the daily challenges of clinics, doctors, and fitness
          professionals — because we’ve lived close to both worlds.
        </p>

        <p className="why-intro">
          That’s why every AI solution we design is built with{" "}
          <strong>empathy, precision, and measurable impact</strong> — so
          professionals can focus on <strong>people, not paperwork</strong>.
        </p>

        <div className="why-quote">
          <p>
            {" "}
            “I created MedFit AI to bridge the gap between care and technology —
            helping professionals focus on people, not paperwork.”
          </p>
        </div>

        <h3 className="why-subheading">Why Businesses Choose MedFit AI:</h3>

        <ul className="why-list">
          <li>
            <span>✓</span> <strong>Healthcare-first perspective</strong> — built
            by <strong>a doctor</strong> who understands care and trust
          </li>
          <li>
            <span>✓</span> Designed for real-world professionals —{" "}
            <strong>clinics, dental practices, </strong> and{" "}
            <strong>fitness studios </strong>
          </li>
          <li>
            <span>✓</span> <strong>Human-like communication</strong> — no
            robotic voices or generic scripts
          </li>
          <li>
            <span>✓</span> Quick setup, measurable results— save
            <strong> 10+ hours weekly</strong>, cut no-shows
            <strong> 30–40%</strong>
          </li>
          <li>
            <span>✓</span> <strong>You’re always in control</strong> — workflows
            match your
            <strong> brand and tone</strong>
          </li>
          <li>
            <span>✓</span> <strong>Continuous optimization</strong> — your AI
            <strong> evolves over time</strong>
          </li>
        </ul>
      </div>
    </section>
  );
}
