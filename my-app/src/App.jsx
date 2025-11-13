// App.jsx
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./index.css";
import Navigation from "./Components/Navigation.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import WhoWeHelp from "./Components/WhoWeHelp.jsx"; // Keep above-the-fold content direct
import Services from "./Components/Services.jsx"; // Above-the-fold direct import
import translations from "./Components/translations.jsx";

// Lazy load below-the-fold sections
const HowItWorks = lazy(() => import("./Components/HowItWorks.jsx"));
const WhyMedfitAI = lazy(() => import("./Components/WhyMedfitAI.jsx"));
const Faq = lazy(() => import("./Components/Faq.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));

// Lazy load other pages
const Founder = lazy(() => import("./Components/Founder.jsx"));

// Simple loader component
const Loader = ({ text = "Loading..." }) => (
  <div className="loader">{text}</div>
);

export default function App() {
  const t = translations.en;

  return (
    <Router>
      {/* Always visible components */}
      <Navigation t={t} />

      <main>
        {/* Above-the-fold content loads immediately */}
        <Hero t={t} />
        <WhoWeHelp />
        <Services t={t} />

        {/* Below-the-fold content lazy-loaded individually */}
        <Suspense fallback={<Loader text="Loading HowItWorks..." />}>
          <HowItWorks t={t} />
        </Suspense>

        <Suspense fallback={<Loader text="Loading WhyMedfitAI..." />}>
          <WhyMedfitAI />
        </Suspense>

        <Suspense fallback={<Loader text="Loading FAQ..." />}>
          <Faq />
        </Suspense>

        <Suspense fallback={<Loader text="Loading Contact..." />}>
          <Contact />
        </Suspense>

        {/* Route-level lazy loaded page */}
        <Routes>
          <Route
            path="/founder"
            element={
              <Suspense fallback={<Loader text="Loading Founder..." />}>
                <Founder />
              </Suspense>
            }
          />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
