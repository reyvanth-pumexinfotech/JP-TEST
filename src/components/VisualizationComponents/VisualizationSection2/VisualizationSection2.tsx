"use client";

import Image from "next/image";
import ReactIcon from "../../../../public/assets/visualization/react.svg";
import Javascript from "../../../../public/assets/visualization/javascript.svg";
import Typescript from "../../../../public/assets/visualization/typescript.svg";
import Nextjs from "../../../../public/assets/visualization/nextjs.svg";
import Figma from "../../../../public/assets/visualization/figma.svg";
import HTML from "../../../../public/assets/visualization/html.svg";
import Angular from "../../../../public/assets/visualization/angular.svg";
import CSS from "../../../../public/assets/visualization/css.svg";
import Vue from "../../../../public/assets/visualization/vuejs.svg";
import "./VisualizationSection2.css";

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
    <div className="visualization-section2-div">
      <div className="bento-container" onMouseMove={handleMouseMove}>
        <div className="bento-box react">
          <h2>React</h2>
          <Image src={ReactIcon} alt="React Logo" />
        </div>
        <div className="bento-box javascript">
          <Image src={Javascript} alt="Javascript" />
          <h2>Javascript</h2>
        </div>
        <div className="bento-box nextjs">
          <h2>Next Js</h2>
          <Image src={Nextjs} alt="Nextjs Logo" />
        </div>
        <div className="bento-box typescript">
          <Image src={Typescript} alt="Typescript Logo" />
          <h2>Typescript</h2>
        </div>
        <div className="bento-box figma">
          <h2>Figma</h2>
          <Image src={Figma} alt="Figma Logo" />
        </div>
        <div className="bento-box html">
          <Image src={HTML} alt="HTML Logo" />
          <h2>HTML</h2>
        </div>
        <div className="bento-box css">
          <Image src={CSS} alt="CSS Logo" />
          <h2>CSS</h2>
        </div>
        <div className="bento-box angular">
          <Image src={Angular} alt="Angular Logo" />
          <h2>Angular</h2>
        </div>
        <div className="bento-box vue">
          <Image src={Vue} alt="Vue Logo" />
          <h2>Vue</h2>
        </div>
      </div>
    </div>
  );
};

export default Bento;
