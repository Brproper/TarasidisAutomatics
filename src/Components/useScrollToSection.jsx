import { useLocation, useNavigate } from "react-router-dom";

/**
 * Custom hook for scrolling to sections with support for cross-page navigation
 * @returns {Function} scrollToSection - Function to scroll to a section by ID
 */
function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // If not on home page, navigate home first, then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 400);
    } else {
      scroll();
    }
  };

  return scrollToSection;
}

export default useScrollToSection;
