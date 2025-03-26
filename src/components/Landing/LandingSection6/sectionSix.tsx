"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Bealogo from "../../../../public/assets/Client/BEALogo.svg";
import aramda from "../../../../public/assets/Client/Armada.svg";
import abzys from "../../../../public/assets/Client/abzys.svg";
import Nutanix from "../../../../public/assets/Client/nutanix.png";
import NutanixUniversity from "../../../../public/assets/Client/nutanixuni.svg";
import WU from "../../../../public/assets/Client/WU.svg";
import inhabitr from "../../../../public/assets/Client/inhabitr.svg";
import Connetedinsights from "../../../../public/assets/Client/Connected Insights.svg";
import Ergao from "../../../../public/assets/Client/erago.svg";
import Omniscope from "../../../../public/assets/Client/OMNISCOP-LIGHT.3602cd57 1.svg";
import Credenceid from "../../../../public/assets/Client/Credneceid.svg";
import Sarto from "../../../../public/assets/Client/Sarto.svg";
import Millenium from "../../../../public/assets/Client/millennium.svg";
import EducationGalaxy from "../../../../public/assets/Client/Education Galaxy.svg";
import ezeepay from "../../../../public/assets/Client/zzeepay.svg";
import ains from "../../../../public/assets/Client/ains.svg";
import aret from "../../../../public/assets/Client/aret.svg";
import "./sectionSix.css";

import { StaticImageData } from "next/image";

interface LogoPair {
  front: StaticImageData;
  back: StaticImageData;
}

const FlippableBox: React.FC<{
  className: string;
  logoPair: LogoPair;
  isFlipped: boolean;
  isFlipping: boolean;
}> = ({ className, logoPair, isFlipped, isFlipping }) => {
  return (
    <div className={`landing-section-six-bento-box ${className} ${isFlipping ? "flipping" : ""}`}>
      <div className={`flipper ${isFlipped ? "flipped" : ""}`}>
        <div className="front">
          <Image 
            src={logoPair.front} 
            alt="Front Icon" 
            style={{
              objectFit: 'contain',
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>
        <div className="back">
          <Image 
            src={logoPair.back} 
            alt="Back Icon"
            style={{
              objectFit: 'contain',
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </div>
  );
};

const SectionSixBento: React.FC = () => {
  const logoPairs: { [key: string]: LogoPair } = {
    box1: { front: Bealogo, back: ains },
    box2: { front: aramda, back: Credenceid },
    box3: { front: NutanixUniversity, back: NutanixUniversity },
    box4: { front: Nutanix, back: Connetedinsights },
    box5: { front: abzys, back: aret },
    box6: { front: Sarto, back: Millenium },
    box7: { front: Omniscope, back: EducationGalaxy },
    box8: { front: WU, back: Ergao },
    box9: { front: inhabitr, back: ezeepay },
  };

  const [flippingBox, setFlippingBox] = useState<string | null>(null);
  const [flippedBoxes, setFlippedBoxes] = useState<{ [key: string]: boolean }>({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
    box9: false,
  });

  useEffect(() => {
    const boxClasses = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
    let currentBoxIndex = 0;
    
    const flipInterval = setInterval(() => {
      const currentBox = boxClasses[currentBoxIndex];
      
      setFlippingBox(currentBox);
      
      setTimeout(() => {
        setFlippedBoxes(prevStates => ({
          ...prevStates,
          [currentBox]: !prevStates[currentBox]
        }));
        
        
        setFlippingBox(null);
      }, 500);
      
      
      currentBoxIndex = (currentBoxIndex + 1) % boxClasses.length;
    }, 1000);
    
    return () => clearInterval(flipInterval);
  }, []);

  const classMapping = {
    box1: "box-1",
    box2: "box-2",
    box3: "box-3",
    box4: "box-4",
    box5: "box-5",
    box6: "box-6",
    box7: "box-7",
    box8: "box-8",
    box9: "box-9",
  };

  return (
    <div className="landing-section-six-main-div">
      <h1>Our Clients</h1>
      <div className="landing-section-six-bento-container">
        
        {Object.entries(logoPairs).map(([boxKey, logoPair]) => (
          <FlippableBox
            key={boxKey}
            className={classMapping[boxKey as keyof typeof classMapping]}
            logoPair={logoPair}
            isFlipped={flippedBoxes[boxKey]}
            isFlipping={flippingBox === boxKey}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionSixBento;