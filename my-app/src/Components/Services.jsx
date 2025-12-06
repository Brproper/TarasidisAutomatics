import "./Services.css";
import "./ServicesPage.css";
import useInViewHeader from "./useInViewHeader";
import ChatbotsImg from "../assets/imgs/ChatBots.webp";
import Sound from "../assets/imgs/Sound.webp";
import TechBrainAi from "../assets/imgs/TechBrainAi3.webp";

import { useNavigate } from "react-router-dom";

function Services({ t }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/servicesPage");
    // Scroll after a short delay to ensure the page renders
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const { headerRef, inView } = useInViewHeader();

  return (
    <section id="services" className="services-section flex-version">
      <h3 ref={headerRef} className={`${inView ? "typing3" : ""}`}>
        {t.servicesTitle}
      </h3>

      <div className="services-flexbox">
        {/* Chatbots */}
        <div className="service-card">
          {/* <ion-icon name="chatbubble-ellipses-outline" class="icon"></ion-icon> */}
          <div className="service-image-main">
            <img src={ChatbotsImg} alt="Chatbots" loading="lazy" />
          </div>
          <h4>AI Realistic Chatbots</h4>
          <p>
            <strong>Instant responses</strong> on every{" "}
            <strong>platform</strong>, handling <strong>FAQs</strong>,{" "}
            <strong>capturing leads</strong> and
            <strong> engaging clients</strong> <strong>automatically</strong>.
          </p>
        </div>

        {/* Voice Assistant */}
        <div className="service-card">
          {/* <ion-icon name="mic-outline" class="icon"></ion-icon> */}
          <div className="service-image-main">
            <img src={Sound} alt="Voice Assistant" loading="lazy" />
          </div>
          <h4>AI Voice Receptionists</h4>
          <p>
            Your <strong>24/7 phone assistant</strong> that answers{" "}
            <strong>calls</strong>, books or reschedules{" "}
            <strong>appointments</strong>, and handles{" "}
            <strong>client requests.</strong>
          </p>
        </div>

        {/* Automation */}
        <div className="service-card">
          {/* <ion-icon name="timer-outline" class="icon"></ion-icon> */}
          <div className="service-image-main">
            <img src={TechBrainAi} alt="AI Automation" loading="lazy" />
          </div>
          <h4>Automated Workflows</h4>
          <p>
            Automate <strong>reminders</strong>, <strong>follow-ups</strong>,
            and <strong>client communication</strong> to save{" "}
            <strong>hours</strong> and reduce no-shows.
          </p>
        </div>
      </div>

      <button className="primary-btn" onClick={handleLearnMore}>
        {t.learnMore}
      </button>
    </section>
  );
}

export default Services;
