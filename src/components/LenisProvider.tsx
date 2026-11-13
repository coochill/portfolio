
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LenisProviderProps {
  children: ReactNode;
}

function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
    });

    const updateScroll = () => {
      ScrollTrigger.update();
    };

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", updateScroll);

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", updateScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default LenisProvider;
