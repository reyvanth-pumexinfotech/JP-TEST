"use client";
import { useEffect } from "react";
import AOS from "aos"; // Standard ES6 import (fixes ESLint error)
import "aos/dist/aos.css"; // Import AOS styles
import "./contactOne.css";
import SecondaryButton from "@/components/SecondaryButton/secondaryButton";

export default function ContactSectionOne() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
      once: false, // Animates every time you scroll (not just once)
      debounceDelay: 50, // Optimizes scroll event handling
      throttleDelay: 99, // Reduces how often AOS checks scroll position
    });
  }, []);

  const handleContactUsClick = () => {
    const nextSection = document.querySelector(".contact-drag-button-sizer");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="contact-section-one-main-div">
      <h1 data-aos="fade-up">
        {/* Have any questions come up? <br /> We&apos;re here to help */}
        何か質問はありますか？
        <br /> 私たちがお手伝いします。
      </h1>
      {/* <h2 data-aos="fade-up" data-aos-delay="200">
        Whether you have a question, need assistance, <br /> or want to start a
        new project, our team is here to help.
      </h2> */}
      <h2 data-aos="fade-up" data-aos-delay="200">
        ご質問がある場合、サポートが必要な場合、
        <br /> または新しいプロジェクトを始めたい場合は、
        私たちのチームがサポートいたします。
      </h2>
      <div
        className="contact-us-section-one-button-sizer"
        data-aos="fade-up"
        data-aos-delay="400"
      ></div>
      <div className="contact-drag-button-sizer">
        <SecondaryButton onClick={handleContactUsClick}>
          {/* Contact Us */}
          お問い合わせ
        </SecondaryButton>
      </div>
    </div>
  );
}
