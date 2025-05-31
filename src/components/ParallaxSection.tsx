import React, { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  background: string; // video path
  children?: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ background, children }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      video.pause();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const handleScroll = () => {
      if (!container || !video || duration === 0) return;

      const rect = container.getBoundingClientRect();
      const totalScroll = window.innerHeight * 2; // video plays across 2 screens
      const scrollProgress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

      video.currentTime = duration * scrollProgress;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [duration]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={background}
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
