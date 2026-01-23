import AnimatedHeader from "./AnimatedHeader";
import "./WhoWeHelp.css";

function WhoWeHelp() {
  return (
    <section className="who-we-help-section" id="who-we-help">
      <div>
        <AnimatedHeader
          as="h2"
          className="who-header gradient-text"
          style={{
            "--typing-width": "10.5ch",
            "--typing-duration": "1.5s",
            "--typing-steps": "11",
            "--typing-cursor-color": "var(--highlight-color)",
          }}
        >
          Who We Help
        </AnimatedHeader>
        <p className="who-intro">
          We work with healthcare and fitness businesses exploring how AI fits
          into their operations, responsibly and effectively.
        </p>
      </div>

      <div className="who-grid">
        {/* Healthcare Clinics & Professionals Card */}
        <div className="who-card">
          <div className="icon-container">
            <ion-icon name="medkit-outline" class="icon"></ion-icon>
          </div>
          <h3 className="gradient-text">Healthcare Clinics & Professionals</h3>
          <p>
            Healthcare clinics and professionals, including{" "}
            <strong>medical, dental, and allied health practices</strong>, who
            are considering <strong>AI</strong>, but want{" "}
            <strong>clarity</strong> before adopting tools that affect{" "}
            <strong>patients, staff, and compliance</strong>.
          </p>

          <ul>
            <li>
              <span>✓</span>Unsure where AI is actually safe and useful
            </li>
            <li>
              <span>✓</span>Overwhelmed by AI tools and vendors
            </li>
            <li>
              <span>✓</span>Concerned about workflow disruption or data risk
            </li>
          </ul>
        </div>

        {/* Fitness Businesses & Professionals Card */}
        <div className="who-card">
          <div className="icon-container">
            <ion-icon name="barbell-outline" class="icon"></ion-icon>
          </div>
          <h3 className="gradient-text">Fitness Businesses & Professionals</h3>
          <p>
            Fitness businesses and professionals, from <strong>gyms</strong> to{" "}
            <strong>independent coaches</strong>, who want to understand how{" "}
            <strong>AI</strong> can support <strong>growth</strong>,{" "}
            <strong>communication</strong>, and <strong>retention</strong>{" "}
            without <strong>over-automation</strong>.
          </p>

          <ul>
            <li>
              <span>✓</span>Too many messages, leads, and follow-ups
            </li>
            <li>
              <span>✓</span>Unsure what should be automated vs kept human
            </li>
            <li>
              <span>✓</span>Want systems that support growth, not complexity
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhoWeHelp;
