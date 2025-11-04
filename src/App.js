import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./index.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhoWeHelp from "./Components/WhoWeHelp";
import HowItWorks from "./Components/HowItWorks";
import Faq from "./Components/Faq";
import WhyMedfitAI from "./Components/WhyMedfitAi";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Founder from "./Components/Founder";
import translations from "./Components/translations";

export default function App() {
  const t = translations.en;

  return (
    <Router basename="/TarasidisAutomatics">
      {" "}
      {/* ✅ important for GitHub Pages */}
      <Navigation t={t} />
      <Routes>
        {/* 🏠 Main Page */}
        <Route
          path="/"
          element={
            <>
              <Hero t={t} />
              <WhoWeHelp />
              <Services t={t} />
              <HowItWorks t={t} />
              <WhyMedfitAI />
              <Faq />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* 👨‍⚕️ Founder Page */}
        <Route path="/founder" element={<Founder />} />

        {/* 🔄 Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
