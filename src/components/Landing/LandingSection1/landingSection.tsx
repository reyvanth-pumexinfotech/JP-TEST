"use client";
import "./landingSection.css";
import Spline from "@splinetool/react-spline"; // ✅ Ensure this package is installed

const LandingSection: React.FC = () => {
  return (
    <div
      className="landing-section-one-main-div"
      style={{
        backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Landing-section-one-bg.svg")`,
      }}
    >
      <div className="landing-section-one-main-div-top">
        <Spline 
          className="spline-render"
          scene="https://d2l4gl47o0xxs9.cloudfront.net/splinecube.spline"
        />
        <div className="overlay"></div>
      </div>
      <div className="landing-section-one-main-div-bottom">
        <h1>Create Elevate Innovate</h1>
        <h2>Your business with our top-notch qualitative services and exemplary user experiences.</h2>
      </div>
    </div>
  );
};

export default LandingSection;