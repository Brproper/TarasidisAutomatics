import React, { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./index.css";
import Navigation from "./Components/Navigation.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx"; // Keep Hero always visible

// Lazy load homepage sections
const WhoWeHelp = lazy(() => import("./Components/WhoWeHelp.jsx"));
const Services = lazy(() => import("./Components/Services.jsx"));
const HowItWorks = lazy(() => import("./Components/HowItWorks.jsx"));
const WhyMedfitAI = lazy(() => import("./Components/WhyMedfitAI.jsx"));
// const Faq = lazy(() => import("./Components/Faq.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));

// Lazy load other pages
const Founder = lazy(() => import("./Components/Founder.jsx"));

// Simple loader
const Loader = ({ text = "Loading..." }) => (
  <div className="loader">{text}</div>
);

export default function App() {
  return (
    <Router>
      {/* Always visible */}
      <Navigation />

      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <main>
              {/* Hero always visible */}
              <Hero />

              {/* Lazy-loaded WhoWeHelp and Services */}
              <Suspense fallback={<Loader text="Loading WhoWeHelp..." />}>
                <WhoWeHelp />
              </Suspense>

              <Suspense fallback={<Loader text="Loading Services..." />}>
                <Services />
              </Suspense>

              {/* Lazy-loaded below-the-fold sections */}
              <Suspense fallback={<Loader text="Loading HowItWorks..." />}>
                <HowItWorks />
              </Suspense>

              <Suspense fallback={<Loader text="Loading WhyMedfitAI..." />}>
                <WhyMedfitAI />
              </Suspense>

              <Suspense fallback={<Loader text="Loading Contact..." />}>
                <Contact />
              </Suspense>
            </main>
          }
        />

        {/* Founder page */}
        <Route
          path="/founder"
          element={
            <Suspense fallback={<Loader text="Loading Founder..." />}>
              <Founder />
            </Suspense>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </Router>
  );
}
