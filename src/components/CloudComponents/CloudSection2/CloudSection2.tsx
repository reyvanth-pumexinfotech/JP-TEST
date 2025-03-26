"use client";

import Image from "next/image";
import Azure from "../../../../public/assets/cloud/azure.svg";
import AWS from "../../../../public/assets/cloud/aws.svg";
import Nutanix from "../../../../public/assets/cloud/nutanix.svg";
import GCP from "../../../../public/assets/cloud/gcp.svg";
import "./CloudSection2.css";

const Bento: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const boxes = document.querySelectorAll(".bento-box");
    boxes.forEach((box) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Cast Element to HTMLElement to access the 'style' property
      (box as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (box as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <div className="cloud-section2-div">
      <div className="bento-container" onMouseMove={handleMouseMove}>
        <div className="bento-box azure">
          <h2>Azure</h2>
          <Image src={Azure} alt="Azure Logo" />
        </div>
        <div className="bento-box aws">
          <Image src={AWS} alt="AWS" />
          <h2>AWS</h2>
        </div>
        <div className="bento-box gcp">
          <h2>GCP</h2>
          <Image src={GCP} alt="GCP Logo" />
        </div>
        <div className="bento-box nutanix">
          <Image src={Nutanix} alt="Nutanix Logo" />
          <h2>Nutanix Cloud</h2>
        </div>
      </div>
    </div>
  );
};

export default Bento;
