import React from "react";
import useInViewHeader from "../Components/useInViewHeader";
import "./WhoWeHelp.css";

function WhoWeHelp() {
  // Destructure correctly from the object returned by your hook
  const { headerRef, inView } = useInViewHeader();

  return (
    <section className="who-we-help-section" id="who-we-help">
      <div>
        <h2 ref={headerRef} className={`who-header ${inView ? "typing2" : ""}`}>
          Who We Help
        </h2>
        <p className="who-intro">
          We partner with professionals who want to save time, reduce stress,
          and scale effortlessly using AI-driven automation.
        </p>
      </div>

      <div className="who-grid">
        {/* Private Clinics & Doctors Card */}
        <div className="who-card">
          <div className="icon-container">
            <ion-icon name="medkit-outline" className="icon"></ion-icon>
          </div>
          <h3>Private Clinics & Doctors</h3>
          <p>
            Our AI systems help <strong>clinics</strong> and{" "}
            <strong>independent doctors</strong> save <strong>time</strong>,
            reduce <strong>stress</strong>, and deliver a{" "}
            <strong>smoother patient experience</strong> — without hiring extra
            staff or missing opportunities.
          </p>
          <ul>
            <li>
              <span>✓</span>Every call answered 24/7
            </li>
            <li>
              <span>✓</span>Appointments auto-booked or rescheduled
            </li>
            <li>
              <span>✓</span>Smart reminders to reduce no-shows
            </li>
            <li>
              <span>✓</span>Real-time data logging
            </li>
            <li>
              <span>✓</span>Seamless integration with your tools
            </li>
          </ul>
        </div>

        {/* Gyms & Fitness Studios Card */}
        <div className="who-card">
          <div className="icon-container">
            <ion-icon name="barbell-outline" className="icon"></ion-icon>
          </div>
          <h3>Gyms & Fitness Studios</h3>
          <p>
            We help <strong>gym owners</strong> and{" "}
            <strong>fitness professionals</strong> manage <strong>leads</strong>
            , <strong>bookings</strong>, and <strong>follow-ups</strong> — so
            you can spend more time <strong>training clients</strong>, not
            chasing messages.
          </p>
          <ul>
            <li>
              <span>✓</span>24/7 lead qualification
            </li>
            <li>
              <span>✓</span>Trial sessions auto-booked via Instagram or WhatsApp
            </li>
            <li>
              <span>✓</span>Automatic reminders for workouts
            </li>
            <li>
              <span>✓</span>Follow-ups after trials or cancellations
            </li>
            <li>
              <span>✓</span>Real-time CRM or Sheets updates
            </li>
          </ul>
        </div>
      </div>

      <p className="who-footer">
        Every business is unique — and so is our setup. Each solution is
        tailored to your specific needs.
      </p>
    </section>
  );
}

export default WhoWeHelp;
