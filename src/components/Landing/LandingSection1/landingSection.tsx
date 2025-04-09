"use client";

import { useEffect, useMemo, useState } from "react";
import "./landingSection.css";
import Spline from "@splinetool/react-spline";

const LandingSection: React.FC = () => {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);

  useEffect(() => {
    const canvas = document.querySelector("canvas");

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn("WebGL context lost. Displaying fallback UI.");
      setIsWebGLAvailable(false);
    };

    canvas?.addEventListener("webglcontextlost", handleContextLost, false);

    return () => {
      canvas?.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, []);

  const splineCanvas = useMemo(() => {
    return isWebGLAvailable ? (
      <Spline
        className="spline-render"
        scene="https://d2l4gl47o0xxs9.cloudfront.net/splinecube.spline"
      />
    ) : (
      <div className="spline-fallback">
        <p>
          3Dコンテンツが利用できません。更新するか、対応するブラウザをお試しください。
        </p>
      </div>
    );
  }, [isWebGLAvailable]);

  return (
    <div
      className="landing-section-one-main-div"
      style={{
        backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Landing-section-one-bg.svg")`,
      }}
    >
      <div className="landing-section-one-main-div-top">
        {splineCanvas}
        <div className="overlay"></div>
      </div>
      <div className="landing-section-one-main-div-bottom">
        {/* <h1>Create Elevate Innovate</h1>
        <h2>
          Your business with our top-notch qualitative services and exemplary
          user experiences.
        </h2> */}
        <h1>創造する 上げる 革新する</h1>
        <h2>
          私たちの一流の質的なサービスと模範的なユーザーエクスペリエンスであなたのビジネスを
        </h2>
      </div>
    </div>
  );
};

export default LandingSection;
