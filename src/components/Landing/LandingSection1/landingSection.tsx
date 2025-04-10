import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import "./landingSection.css";

const LandingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === sectionRef.current) {
          setIsInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.05, // Adjust threshold as needed
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = document.querySelector("canvas");

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn("WebGL context lost. Displaying fallback UI.");
      setTimeout(() => {
        // window.location.href = window.location.href;
      }, 10000);
      setIsWebGLAvailable(false);
    };

    canvas?.addEventListener("webglcontextlost", handleContextLost, false);

    return () => {
      canvas?.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, []);

  const handleReload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = window.location.href;
  };

  return (
    <div
      className="landing-section-one-main-div"
      style={{
        backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Landing-section-one-bg.svg")`,
      }}
    >
      <div ref={sectionRef} className="landing-section-one-main-div-top">
        {isInView && isWebGLAvailable ? (
          <div className="spline-render">
            <Spline scene="https://d2l4gl47o0xxs9.cloudfront.net/splinecube.spline" />
          </div>
        ) : (
          <div className="spline-fallback">
            <p>
              3Dコンテンツが利用できません。更新するか、対応するブラウザをお試しください。
            </p>
            <a href="#" onClick={handleReload}>
              リロードしてみてください。
            </a>
          </div>
        )}
        <div className="overlay"></div>
      </div>
      <div className="landing-section-one-main-div-bottom">
        <h1>創造する 上げる 革新する</h1>
        <h2>
          私たちの一流の質的なサービスと模範的なユーザーエクスペリエンスであなたのビジネスを
        </h2>
      </div>
    </div>
  );
};

export default LandingSection;
