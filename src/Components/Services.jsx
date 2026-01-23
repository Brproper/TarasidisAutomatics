import "./Services.css";
import AnimatedHeader from "./AnimatedHeader";
import ChatbotsImg from "../assets/imgs/ChatBots.webp";
import Sound from "../assets/imgs/Sound.webp";
import TechBrainAi from "../assets/imgs/TechBrainAi3.webp";

function Services() {
  const handleLearnMore = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="services-section flex-version">
      <AnimatedHeader
        as="h3"
        className="gradient-text"
        style={{
          "--typing-width": "18ch",
          "--typing-duration": "2.5s",
          "--typing-steps": "20",
          "--typing-cursor-color": "var(--highlight-color)",
        }}
      >
        How We Work With You
      </AnimatedHeader>
      <p className="services-subtitle gradient-text">
        A clear process from education and audit to responsible AI
        implementation.
      </p>

      <div className="services-flexbox">
        {/* Educate */}
        <div className="service-card">
          {/* <ion-icon name="chatbubble-ellipses-outline" class="icon"></ion-icon> */}
          <div className="service-image-main">
            <img src={ChatbotsImg} alt="Educate" loading="lazy" />
          </div>
          <h4 className="gradient-text">Educate</h4>
          <p>
            We help you understand what <strong>AI</strong> can and{" "}
            <strong>cannot do</strong> for your business, without{" "}
            <strong>hype</strong>, <strong>tools</strong>, or{" "}
            <strong>technical jargon</strong>.
          </p>
        </div>

        {/* Audit */}
        <div className="service-card">
          {/* <ion-icon name="mic-outline" class="icon"></ion-icon> */}
          <div className="service-image-main">
            <img src={Sound} alt="Audit" loading="lazy" />
          </div>
          <h4 className="gradient-text">Audit</h4>
          <p>
            We analyze your <strong>workflows</strong>,{" "}
            <strong>communication</strong>, and <strong>bottlenecks</strong> to
            identify where AI creates <strong>real value</strong> and where it{" "}
            <strong>doesn't</strong>.
          </p>
        </div>

        {/* Implement */}
        <div className="service-card">
          {/* <ion-icon name="timer-outline" class="icon"></ion-icon> */}
          <div className="service-image-main">
            <img src={TechBrainAi} alt="Implement" loading="lazy" />
          </div>
          <h4 className="gradient-text">Implement</h4>
          <p>
            Only after <strong>clarity</strong>, we design and implement the{" "}
            <strong>right AI solutions</strong> for you, from{" "}
            <strong>simple automations</strong> to{" "}
            <strong>custom AI systems</strong> tailored to your needs.
          </p>
        </div>
      </div>

      <button className="primary-btn" onClick={handleLearnMore}>
        Start with a Free AI Audit
      </button>
    </section>
  );
}

export default Services;
