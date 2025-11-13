import "./Contact.css";
import { useInView } from "react-intersection-observer";
import useInViewHeader from "./useInViewHeader";
import landingVideo3 from "../assets/videos/LandingPageAi1.mp4";

function Contact() {
  const { ref, inView: inViewVideo } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { headerRef, inView } = useInViewHeader();

  return (
    /* ///////////////////////////////////////////////////
/////////////////CONTACT SECTION/////////////////////////
//////////////////////////////////////////////////// */
    <section id="contact" className="contact-section" ref={ref}>
      {inViewVideo && (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
          preload="none"
        >
          <source src={landingVideo3} type="video/webm" />
        </video>
      )}

      {/* <div className="background-overlay" /> */}
      <div className="video-overlay3"></div>
      {/* Section description text (outside columns) */}
      <div className="contact-description">
        <h3
          ref={headerRef}
          className={`contact-header ${inView ? "typing6" : ""}`}
        >
          CONNECT WITH US
        </h3>
        <div className="contact-description">
          <p>
            <strong>
              Let’s Build the Future of Healthcare & Fitness — Together
            </strong>
          </p>
          <p>
            <strong>AI is transforming</strong> how professionals communicate,
            schedule, and care for clients. <strong>MedFit AI</strong> makes
            that transformation
            <strong> simple, personal, and reliable</strong>.
          </p>
          <p>
            Whether you run a <strong>private clinic</strong> or a
            <strong> fitness studio</strong>, our solutions help you
            <strong> save time</strong>, <strong>reduce stress</strong>, and
            <strong> focus on the people you serve</strong>.
          </p>
        </div>
      </div>

      {/* Contact Container */}
      {/* ////////////////////////////////////// */}
      <div className="contact-flex-container">
        <div className="contact-container">
          {/* RIGHT SIDE — Contact Info */}

          <div>
            <h3 className="contact-form-header">Get in Touch</h3>
            <p>
              We’d love to learn about your business and explore how AI can fit
              your workflow.
            </p>
          </div>

          {/* SOCIALS CONTAINER */}
          {/* ////////////////////////////////////// */}
          <div className="socials-container">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="mailto:hello@medfitai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="mail-outline"
                  aria-label="send us an email"
                ></ion-icon>
              </a>
              {/* <a
                href="https://www.facebook.com/profile.php?id=100013231872326"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="logo-facebook"
                  aria-label="Visit our Facebook page"
                ></ion-icon>
              </a> */}
              <a
                href="https://www.linkedin.com/company/tarasidisautomatics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  name="logo-linkedin"
                  aria-label="Visit our Linkedin"
                ></ion-icon>
              </a>
            </div>
          </div>

          <button
            className="secondary-btn"
            aria-label="Book a Call"
            id="getStarted"
            onClick={() =>
              window.open(
                "https://calendly.com/tarasidis17/discovery-call",
                "_blank"
              )
            }
          >
            Book a Call
          </button>
        </div>

        {/* LEFT SIDE — Stats & Industry Data */}

        <div className="contact-stats">
          <h4>
            Healthcare and fitness businesses adopting AI automation typically
            achieve:
          </h4>
          <ul>
            <li>
              <span>✓</span>
              <strong>30–40%</strong> fewer no-shows
            </li>
            <li>
              <span>✓</span>
              <strong>10+ admin hours</strong> saved weekly
            </li>
            <li>
              <span>✓</span>Up to <strong>$150,000/year</strong> recovered
              revenue
            </li>
            <li>
              <span>✓</span>
              <strong>20–40%</strong> higher lead conversion
            </li>
            <li>
              <span>✓</span>
              <strong>70–80%</strong> of inquiries handled automatically
            </li>
          </ul>
          <p className="contact-source">
            Based on industry data from <strong>McKinsey</strong>,{" "}
            <strong>Deloitte</strong>, <strong>MGMA</strong>, and{" "}
            <strong>JMIR</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Contact;
