import { useEffect, useRef, useState } from "react";
import "./AnimatedHeader.css";

export default function AnimatedHeader({
  children,
  as = "h2",
  animation = "typing",
  className = "",
  threshold = 0.5,
  speedPerChar = 0.05, // seconds per character (adjustable)
  minDuration = 1, // minimum animation duration in seconds
  maxDuration = 5, // maximum animation duration in seconds
  ...props
}) {
  const headerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const Component = as;

  // Check if manual values are provided in style prop
  const hasManualDuration = props.style?.["--typing-duration"];
  const hasManualSteps = props.style?.["--typing-steps"];

  // Only calculate automatic values if manual ones aren't provided
  const textContent = typeof children === "string" ? children : "";
  const textLength = textContent.length;

  const calculatedDuration = textLength * speedPerChar;
  const duration = Math.min(
    Math.max(calculatedDuration, minDuration),
    maxDuration,
  );
  const steps = Math.max(textLength, 20);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  // Build style object
  const animationStyle = {
    // 1. Fallback automatic values
    "--typing-duration": `${duration}s`,
    "--typing-steps": steps,

    // 2. Overwrite with whatever is passed in the style prop (your 3s, etc.)
    ...props.style,
  };

  return (
    <Component
      ref={headerRef}
      className={`${className} ${inView ? `animated-${animation}` : ""}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
