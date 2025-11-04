import React from "react";
import "./Founder.css";
import FounderImg from "../assets/imgs/Founder.jpg";

export default function Founder() {
  return (
    <div className="founder-page">
      <div className="founder-container">
        <img
          src={FounderImg}
          className="founder-img"
          alt="creator of the page"
        ></img>

        <h2>A Message from Our Founder</h2>
        <p>
          I’m <strong>Dr. Michael Tarasidis</strong>, founder of MedFit AI.
        </p>
        <p>
          Before building AI systems, I spent over five years working as a
          <strong> doctor in various different roles</strong> — in hospital
          laboratories, as a rural doctor, in an internal medicine clinic, and
          also in the emergency medicine department. Everywhere I worked, I saw
          the same problems:{" "}
          <strong>
            clinics losing precious time to calls, paperwork, and endless admin
          </strong>{" "}
          instead of focusing on patient care.
        </p>

        <p>
          Beyond medicine, I’ve been passionate about fitness since I was 14,
          later earning my certification as a <strong>fitness coach</strong> and
          helping people improve their training and health. The same issue
          appeared again —
          <strong>
            trainers spending hours managing bookings instead of coaching.
          </strong>
        </p>

        <p>
          Since I was young, I’ve also had a deep curiosity for
          <strong> computers and technology.</strong> Since 2024, I taught
          myself how to build practical AI systems from scratch. Combining this
          technical knowledge with my background in healthcare and fitness, I
          created
          <strong> MedFit AI</strong> — to solve the daily operational struggles
          that hold professionals back.
        </p>

        <p>
          <strong> Our mission is simple:</strong> to give healthcare and
          fitness businesses intelligent assistants that handle communication —
          so they can focus on what truly matters:{" "}
          <strong> their patients and clients.</strong>
        </p>

        <p>
          <strong>We’re not replacing humans.</strong>
          <br />
          <strong>We’re giving time back to them.</strong>
        </p>

        <p className="signature">
          Warm regards,
          <br />
          <strong>Dr. Michael Tarasidis</strong>
          <br />
          Founder, MedFit AI
        </p>
      </div>
    </div>
  );
}
