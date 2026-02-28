import { useInView } from "react-intersection-observer";

export default function LazyVideo({
  src,
  type = "video/mp4",
  className = "background-video",
  threshold = 0.3,
  ...props
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {inView && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={className}
          preload="none"
          aria-hidden="true"
          {...props}
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
