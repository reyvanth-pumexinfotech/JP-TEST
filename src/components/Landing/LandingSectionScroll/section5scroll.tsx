"use client"

import { useState, useEffect, useRef } from "react";
import "./section5scroll.css";
import Image from "next/image";
import WU from "../../../../public/assets/Client/WU Black.svg";
import aramda from "../../../../public/assets/Client/Erago Black (1).svg";
import inhabitr from "../../../../public/assets/Client/Erago Black (2).svg";
import Millenium from "../../../../public/assets/Client/Erago Black (3).svg";
import NutanixUni from "../../../../public/assets/Client/nutanix.svg";
import Nutanix from "../../../../public/assets/Client/Nutanix-Logo.wine 1.svg";
import ains from "../../../../public/assets/Client/ains.svg";
import Bealogo from "../../../../public/assets/Client/Bea.svg";
import ConnectedInsights from "../../../../public/assets/Client/Connected Insights.svg";
import CredenceId from "../../../../public/assets/Client/Credneceid.svg";
import EduGalaxy from "../../../../public/assets/Client/Education Galaxy.svg";
import Ergao from "../../../../public/assets/Client/erago.svg";

const logos = [
  WU, aramda, inhabitr, Nutanix, NutanixUni, 
  ains, Bealogo, ConnectedInsights, CredenceId, EduGalaxy, 
  Ergao, Millenium
];

const Section5 = () => {
  const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 5));
  const [activeFlipIndex, setActiveFlipIndex] = useState<number | null>(null);
  const [nextLogoIndex, setNextLogoIndex] = useState(5); // Start with the 6th logo
  
  // Use ref to track the current position to replace
  const currentPositionRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Set which position is currently flipping
      setActiveFlipIndex(currentPositionRef.current);
      
      // After flip animation completes, update the logo
      const flipTimer = setTimeout(() => {
        // Create a new array with the next logo replacing the current position
        const newVisibleLogos = [...visibleLogos];
        newVisibleLogos[currentPositionRef.current] = logos[nextLogoIndex];
        setVisibleLogos(newVisibleLogos);
        
        // Move to next position and next logo
        currentPositionRef.current = (currentPositionRef.current + 1) % 5;
        setNextLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
        
        // Reset active flip
        setActiveFlipIndex(null);
      }, 750); // Half of the flip duration
      
      return () => clearTimeout(flipTimer);
    }, 1000); // Change one logo every 2 seconds
    
    return () => clearInterval(interval);
  }, [visibleLogos, nextLogoIndex]);

  return (
    <div className="landing-section-five-main-div">
      <div className="clients-grid-pumex">
        {visibleLogos.map((logo, i) => (
          <div key={i} className="flip-container">
            <div 
              className="flipper" 
              style={{ 
                animation: activeFlipIndex === i ? 'flip 1.5s ease-in-out' : 'none'
              }}
            >
              <Image src={logo} alt={`logo-${i}`} width={120} height={120} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;