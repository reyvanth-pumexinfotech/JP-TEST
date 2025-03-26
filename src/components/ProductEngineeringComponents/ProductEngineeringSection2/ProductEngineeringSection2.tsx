"use client";

import Image from "next/image";
import Nodejs from "../../../../public/assets/productEngineeringassets/Nodejs.svg";
import Golang from "../../../../public/assets/productEngineeringassets/Go lang.svg";
import Java from "../../../../public/assets/productEngineeringassets/Java.svg";
import Python from "../../../../public/assets/productEngineeringassets/python.svg";
import Nest from "../../../../public/assets/productEngineeringassets/nestjs.svg";
import MongoDb from "../../../../public/assets/productEngineeringassets/Mongod.svg";
import MySql from "../../../../public/assets/productEngineeringassets/MySql.svg";
import Dotnet from "../../../../public/assets/productEngineeringassets/dotnet.svg";
import PHP from "../../../../public/assets/productEngineeringassets/php.svg";
import "./ProductEngineeringSection2.css";

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
    <div className="product-engineering-section2-div">
    <div className="bento-container" onMouseMove={handleMouseMove}>
      <div className="bento-box nodejs">
        <h2>Node Js</h2>
        <Image src={Nodejs} alt="NodeJs Logo" />
      </div>
      <div className="bento-box golang">
        <Image src={Golang} alt="Golang Logo" />
        <h2>Golang</h2>
      </div>
      <div className="bento-box java">
        <h2>Java</h2>
        <Image src={Java} alt="Java Logo" />
      </div>
      <div className="bento-box python">
        <Image src={Python} alt="Python Logo" />
        <h2>Python</h2>
      </div>
      <div className="bento-box nestjs">
        <h2>NestJs</h2>
        <Image src={Nest} alt="NestJs Logo" />
      </div>
      <div className="bento-box dotnet">
        <Image src={Dotnet} alt="Dotnet Logo" />
        <h2>Dotnet</h2>
      </div>
      <div className="bento-box php">
        <Image src={PHP} alt="PHP Logo" />
        <h2>PHP</h2>
      </div>
      <div className="bento-box mongodb">
        <Image src={MongoDb} alt="MongoDB Logo" />
        <h2>MongoDB</h2>
      </div>
      <div className="bento-box mysql">
        <Image src={MySql} alt="MySQL Logo" />
        <h2>MySQL</h2>
      </div>
    </div>
    </div>
  );
};

export default Bento;

