"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./allsolutions.css";
import Navbar from "../../components/NewNavbar/navbar";
import LightNavbar from "../../components/LightModeComponents/LightNavbar/LightNavbar";
import Footer from "../../components/Footer/footer";
import LightFooter from "../../components/LightModeComponents/LightFooter/LightFooter";
import Image from "next/image";
import AllIcon from "../../../public/assets/solutions/allIcon.svg";
import VisualizationIcon from "../../../public/assets/solutions/VisualWhite.svg";
import ProductIcon from "../../../public/assets/solutions/PEWhite.svg";
import CloudIcon from "../../../public/assets/solutions/CloudWhite.svg";
import VisualizationIconBlack from "../../../public/assets/solutions/VisualBlack.svg";
import ProductIconBlack from "../../../public/assets/solutions/PEblack.svg";
import CloudIconBlack from "../../../public/assets/solutions/CloudBlack.svg";
import Loader from "@/components/Loader/Loader";

const solutions = [
  { id: 1, solutionImage: "/assets/solutions/devops.png", title: "Cloud Optimization Engine", category: "Product Engineering", date: "2024-02-11" },
  { id: 2, solutionImage: "/assets/solutions/devops.png", title: "AWS Lambda Deep Dive", category: "Cloud", date: "2024-02-10" },
  { id: 3, solutionImage: "/assets/solutions/devops.png", title: "Docker Container Orchestration", category: "Visualization", date: "2024-02-09" },
  { id: 4, solutionImage: "/assets/solutions/devops.png", title: "Cloud Optimization", category: "Product Engineering", date: "2024-02-11" },
  { id: 5, solutionImage: "/assets/solutions/devops.png", title: "AWS CI/CD Pipeline Setup", category: "Cloud", date: "2024-02-10" },
  { id: 6, solutionImage: "/assets/solutions/devops.png", title: "AI Furniture Solutions", category: "Visualization", date: "2024-02-09" },
];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightMode, setLightMode] = useState(false); // Default is dark mode
  const [filteredSolutions, setFilteredSolutions] = useState(solutions);


  const categories = [
    { name: "All", icon: AllIcon },
    { name: "Visualization", icon: lightMode ? VisualizationIconBlack : VisualizationIcon },
    { name: "Product Engineering", icon: lightMode ? ProductIconBlack : ProductIcon },
    { name: "Cloud", icon: lightMode ? CloudIconBlack : CloudIcon },
  ];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredSolutions(solutions);
    } else {
      setFilteredSolutions(solutions.filter((solution) => solution.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);
  }, [lightMode]);

 

  return (
    <div className="solutions-main-container">
      <Loader duration={1000} />

      {/* Fixed: Show regular Navbar in dark mode, LightNavbar in light mode */}
      {lightMode ? <LightNavbar /> : <Navbar />}

      <div className="solutions-content">
        {/* Dark Mode is Default, Switchable */}
        <button onClick={() => setLightMode(!lightMode)} className="theme-toggle">
          {lightMode ? <Sun className="sun" /> : <Moon className="moon" />}
        </button>

        <div className="solutions-top-div">
          <h3>Our Solutions</h3>
          <h2>Peek behind the scenes of groundbreaking solutions, timeless tips, and the tech innovations that inspire us every day.</h2>
        </div>

        <div className="solutions-bottom-div">
          <div className="solutions-category-section">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`solutions-category-button ${selectedCategory === category.name ? "active" : ""}`}
              >
                <Image src={category.icon} alt={category.name} className="category-icon" />
                {category.name}
              </button>
            ))}
          </div>

          <div className="solutions-cards">
            {filteredSolutions.map((solution) => (
              <div
                key={solution.id}
                className="solutions-card"
                onClick={() => (window.location.href = `/solution-description`)}
              >
               
                <div className="solutions-card-img-layer">
                  <Image src={solution.solutionImage} alt={solution.title} fill className="solutions-card-image" />
                </div>

                <div className="solutions-card-info">
                  <div className="solutions-card-tags">
                    <span className="solutions-card-date">{solution.date}</span>
                    <span className="solutions-card-category">{solution.category}</span>
                  </div>
                  <div className="solutions-card-title">
                    <span>{solution.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed: Show regular Footer in dark mode, LightFooter in light mode */}
      {lightMode ? <LightFooter /> : <Footer />}
    </div>
  );
}