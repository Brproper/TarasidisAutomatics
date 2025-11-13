import { useEffect, useRef, useState } from "react";

export default function useInViewHeader(threshold = 0.5) {
  const headerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Stop observing permanently
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { headerRef, inView };
}
