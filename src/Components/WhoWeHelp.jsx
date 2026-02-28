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
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M320 80H192a32 32 0 00-32 32v48h192V112a32 32 0 00-32-32z"
                stroke="currentColor"
                strokeWidth="32"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Bag body: square top corners, rounded bottom corners */}
              <path
                d="M48 160 L464 160 L464 428 A32 32 0 0 1 432 460 L80 460 A32 32 0 0 1 48 428 Z"
                stroke="currentColor"
                strokeWidth="32"
                strokeLinejoin="round"
              />
              <path
                d="M256 224v160M176 304h160"
                stroke="currentColor"
                strokeWidth="32"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M48 256h416M128 112v288M64 160v192M384 112v288M448 160v192"
                stroke="currentColor"
                strokeWidth="40"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
