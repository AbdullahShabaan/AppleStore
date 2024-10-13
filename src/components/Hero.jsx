import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { smallHeroVideo, heroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSource, setVideoSource] = useState(
    window.innerWidth > 760 ? heroVideo : smallHeroVideo
  );

  const handleVideoSource = () => {
    setVideoSource(window.innerWidth > 760 ? heroVideo : smallHeroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSource);
    return () => window.removeEventListener("resize", handleVideoSource);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, delay: 2, y: -50 });
  }, []);
  return (
    <section className="w-full nav-height relative bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title m-0 relative">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay playsInline={true} muted key={videoSource}>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col justify-center items-center translate-y-10 opacity-0"
      >
        <a href="highlights" className="btn">
          buy
        </a>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
