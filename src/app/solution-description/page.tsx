
"use client"

import "./solution-description.css";
import Navbar from "@/components/NewNavbar/navbar";
import Footer from "@/components/Footer/footer";
import LightNavbar from "../../components/LightModeComponents/LightNavbar/LightNavbar";
import LightFooter from "../../components/LightModeComponents/LightFooter/LightFooter";
import SolutionSectionOne from "../../components/SolutionDescriptionSections/SolutionSectionOne/SolutionSectionOne";
import SolutionSectionTwo from "../../components/SolutionDescriptionSections/SolutionSectionTwo/SolutionSectionTwo";
import { Sun, Moon } from "lucide-react";
import React, { useState, useEffect } from "react";


export default function SolutionDescription() {
  const [lightMode, setlightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [lightMode]);

  return (
    <div className="solution-main-container">
      {lightMode ? <LightNavbar /> : <Navbar />}

      <button onClick={() => setlightMode(!lightMode)} className="theme-toggle">
        {lightMode ? (
                    <Sun className="sun" />
                  ) : (
                    <Moon className="moon" />
                  )}
      </button>

      <SolutionSectionOne />
      <SolutionSectionTwo />
      {lightMode ? <LightFooter /> : <Footer />}
    </div>
  );
}
