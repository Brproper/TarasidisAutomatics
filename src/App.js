import "./index.css";

import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhoWeHelp from "./Components/WhoWeHelp.js";
import HowItWorks from "./Components/HowItWorks.js";
import Faq from "./Components/Faq";
import WhyMedfitAI from "./Components/WhyMedfitAi.js";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import translations from "./Components/translations";

export default function App() {
  const t = translations.en;

  return (
    <>
      {
        ////////////////////////////////////
        /* Navigation / Hero Sections 
      /////////////////////////////////*/
      }
      <Navigation t={t} />
      <Hero t={t} />

      {
        ////////////////////////////////////
        /* Who We help 
      /////////////////////////////////*/
      }
      <WhoWeHelp />

      {
        ////////////////////////////////////
        /* Services Section
      /////////////////////////////////*/
      }
      <Services t={t} />

      {
        ////////////////////////////////////
        /* Education Section
      /////////////////////////////////*/
      }
      <HowItWorks t={t} />

      {
        ////////////////////////////////////
        /* Why MedFitAi Section
      /////////////////////////////////*/
      }
      <WhyMedfitAI />

      {
        ////////////////////////////////////
        /* FAQ Section
      /////////////////////////////////*/
      }
      <Faq t={t} />

      {
        ////////////////////////////////////
        /* Contact Section
      /////////////////////////////////*/
      }
      <Contact t={t} />

      {
        ////////////////////////////////////
        /* Footer Section
      /////////////////////////////////*/
      }
      <Footer t={t} />
    </>
  );
}
