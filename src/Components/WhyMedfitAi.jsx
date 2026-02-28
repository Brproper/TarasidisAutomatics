import AnimatedHeader from "./AnimatedHeader";
import "./WhyMedfitAI.css";

export default function WhyMedfitAI() {
  return (
    <section className="why-medfit-section" id="whyMedfitAI">
      <div className="why-medfit-wrapper">
        <AnimatedHeader
          as="h2"
          style={{
            "--typing-width": "12ch",
            "--typing-duration": "1.8s",
            "--typing-steps": "12",
            "--typing-cursor-color": "var(--highlight-color)",
          }}
        >
          Why MedFit AI Exists
        </AnimatedHeader>

        <div className="why-intro-container">
          <p className="why-intro">
            <strong>MedFit AI</strong> was founded by a{" "}
            <strong>medical doctor</strong> with a background in{" "}
            <strong>fitness coaching</strong> not to sell AI tools, but to help
            professionals make <strong>better decisions</strong> about them.
          </p>

          <p className="why-intro">
            Having worked closely with both{" "}
            <strong>healthcare and fitness professionals</strong>, we understand
            the <strong>operational pressure</strong>,{" "}
            <strong>compliance concerns</strong>, and{" "}
            <strong>communication overload</strong> they face daily.
          </p>

          <p className="why-intro">
            That's why we focus on <strong>education and audit first</strong>,
            ensuring AI is applied <strong>responsibly</strong>,{" "}
            <strong>ethically</strong>, and only where it creates{" "}
            <strong>real value</strong>.
          </p>
        </div>

        <div className="why-quote">
          <p>
            "I created MedFit AI to bridge the gap between care and technology,
            so professionals can focus on people, not paperwork."
          </p>
        </div>
      </div>
    </section>
  );
}
