"use client";

import { useEffect, useState } from "react";
import "./landingSection.css";
import Spline from "@splinetool/react-spline";

const LandingSection: React.FC = () => {
  const [isSplineActive, setIsSplineActive] = useState(true);

  useEffect(() => {
    const handleWebGLLoss = (e: Event) => {
      e.preventDefault();
      console.warn("WebGL context lost. Reinitializing Spline...");
      setIsSplineActive(false);
      setTimeout(() => setIsSplineActive(true), 100); // Give time to unmount
    };

    const canvas = document.querySelector("canvas");
    canvas?.addEventListener("webglcontextlost", handleWebGLLoss, false);

    return () => {
      canvas?.removeEventListener("webglcontextlost", handleWebGLLoss);
    };
  }, []);

  return (
    <div
      className="landing-section-one-main-div"
      style={{
        backgroundImage:
          'url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Landing-section-one-bg.svg")',
      }}
    >
      <div className="landing-section-one-main-div-top">
        {isSplineActive && (
          <Spline
            className="spline-render"
            scene="https://d2l4gl47o0xxs9.cloudfront.net/splinecube.spline"
          />
        )}
        <div className="overlay" />
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
