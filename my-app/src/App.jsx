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
import translations from "./Components/translations.jsx";

// Lazy load sections
const Services = lazy(() => import("./Components/Services.jsx"));
const WhoWeHelp = lazy(() => import("./Components/WhoWeHelp.jsx"));
const HowItWorks = lazy(() => import("./Components/HowItWorks.jsx"));
const Faq = lazy(() => import("./Components/Faq.jsx"));
const WhyMedfitAI = lazy(() => import("./Components/WhyMedfitAI.jsx")); // Make sure filename matches
const Contact = lazy(() => import("./Components/Contact.jsx"));

// Lazy load other pages
const Founder = lazy(() => import("./Components/Founder.jsx"));

export default function App() {
  const t = translations.en;

  return (
    <Router>
      {/* Always visible components */}
      <Navigation t={t} />

      <main>
        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading page...</div>}>
                <Hero t={t} />
                <WhoWeHelp />
                <Services t={t} />
                <HowItWorks t={t} />
                <WhyMedfitAI />
                <Faq />
                <Contact />
              </Suspense>
            }
          />

          {/* Founder Page */}
          <Route
            path="/founder"
            element={
              <Suspense fallback={<div>Loading Founder...</div>}>
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
