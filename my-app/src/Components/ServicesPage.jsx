import React from "react";
import "./ServicesPage.css"; // FIX: use detailed CSS
import useInViewHeader from "./useInViewHeader";

import ChatbotsImg from "../assets/imgs/ChatBots.webp";
import Sound from "../assets/imgs/Sound.webp";
import TechBrainAi from "../assets/imgs/TechBrainAi3.webp";
import translations from "./translations";

export default function ServicesPage() {
  const t = translations.en;
  const { headerRef, inView } = useInViewHeader();

  return (
    <section id="servicesPage" className="services-section-detailed">
      <div>
        <h3 ref={headerRef} className={`${inView ? "typing3" : ""}`}>
          {t.servicesTitle}
        </h3>

        <p className="services-intro">
          Explore our range of <strong>cutting-edge AI services</strong>{" "}
          tailored to boost efficiency, engagement, and innovation across your
          business.
        </p>
      </div>

      <div className="services-flex-detailed">
        {/* CHATBOTS - DETAILED */}
        <div className="service-item-detailed">
          <div className="service-card-detailed">
            <ion-icon
              name="chatbubble-ellipses-outline"
              class="icon"
            ></ion-icon>

            <h4>{t.service1Title}</h4>

            <p>
              <strong>Instant communication</strong> wherever your clients are.
              Our chatbots respond within{" "}
              <strong>seconds, capture leads</strong>, and keep your{" "}
              <strong>inbox organized</strong> automatically.
            </p>

            <ul>
              <li>
                {" "}
                <span>✓</span>
                Instant replies on WhatsApp & Meta platforms
              </li>
              <li>
                {" "}
                <span>✓</span>
                Handles FAQs, pricing, and availability
              </li>
              <li>
                {" "}
                <span>✓</span>
                Captures and qualifies new leads
              </li>
              <li>
                {" "}
                <span>✓</span>
                Books consultations or trial sessions
              </li>
              <li>
                {" "}
                <span>✓</span>
                Works in multiple languages and time zones
              </li>
            </ul>

            <ul>
              <li>
                {" "}
                <span>-</span>
                Handles 70–80% of inquiries autonomously
              </li>
              <li>
                {" "}
                <span>-</span>
                Increases lead conversion by 20–40%
              </li>
              <li>
                {" "}
                <span>-</span>
                Saves 5–8 hours weekly on DMs and follow-ups
              </li>
            </ul>
          </div>

          <div className="service-image-detailed">
            <img src={ChatbotsImg} alt="Chatbots" loading="lazy" />
          </div>
        </div>

        {/* VOICE AI - DETAILED */}
        <div className="service-item-detailed">
          <div className="service-card-detailed">
            <ion-icon name="mic-outline" class="icon"></ion-icon>

            <h4>{t.service2Title}</h4>

            <p>
              Your intelligent <strong>phone assistant</strong>, inbound and
              outbound. It answers{" "}
              <strong>every call, books and reschedules appointments</strong>,
              and even follows up with <strong>new leads</strong> automatically.
            </p>

            <ul>
              <li>
                {" "}
                <span>✓</span>
                Instant call answering, day or night
              </li>
              <li>
                {" "}
                <span>✓</span>
                Booking, rescheduling, or cancellation handling
              </li>
              <li>
                {" "}
                <span>✓</span>
                Outbound calls for lead qualification & follow-up
              </li>
              <li>
                {" "}
                <span>✓</span>
                Natural, human-like voice in multiple languages
              </li>
              <li>
                {" "}
                <span>✓</span>
                Seamless integration with your calendar or CRM
              </li>
            </ul>

            <ul>
              <li>
                {" "}
                <span>-</span>
                10+ admin hours saved per week
              </li>
              <li>
                {" "}
                <span>-</span>
                Up to 90% reduction in missed calls
              </li>
              <li>
                {" "}
                <span>-</span>
                Up to $150,000/year in recovered revenue for small clinics
              </li>
            </ul>
          </div>

          <div className="service-image-detailed">
            <img src={Sound} alt="Voice assistant" loading="lazy" />
          </div>
        </div>

        {/* AUTOMATION - DETAILED */}
        <div className="service-item-detailed">
          <div className="service-card-detailed">
            <ion-icon name="timer-outline" class="icon"></ion-icon>

            <h4>{t.service3Title}</h4>

            <p>
              Let AI handle the <strong>repetitive tasks</strong> that drain
              your time. We <strong>automate reminders, cancellations</strong>,
              and <strong>post-visit</strong> messages, so you{" "}
              <strong>never lose</strong> a client again.
            </p>

            <ul>
              <li>
                {" "}
                <span>✓</span>
                Appointment reminders & confirmations
              </li>
              <li>
                {" "}
                <span>✓</span>
                Follow ups after visits or trials
              </li>
              <li>
                {" "}
                <span>✓</span>
                No-show recovery messages
              </li>
              <li>
                {" "}
                <span>✓</span>
                Live updates in Google Sheets or CRM
              </li>
              <li>
                {" "}
                <span>✓</span>
                Seamless integration with your AI voice & chat systems
              </li>
            </ul>

            <ul>
              <li>
                {" "}
                <span>-</span>
                30–40% fewer no-shows
              </li>
              <li>
                {" "}
                <span>-</span>
                5–10% of lost sessions recovered automatically
              </li>
              <li>
                {" "}
                <span>-</span>
                Saves staff cost equal to one full-time assistant
              </li>
            </ul>
          </div>

          <div className="service-image-detailed">
            <img src={TechBrainAi} alt="AI Automation" loading="lazy" />
          </div>
        </div>
      </div>

      <p className="services-based-text">
        Based on data from <strong>McKinsey, Deloitte, Gartner, JMIR,</strong>{" "}
        and <strong>MGMA</strong>.
      </p>
    </section>
  );
}
