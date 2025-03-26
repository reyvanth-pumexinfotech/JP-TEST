"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./VisualizationSection1.css";
import PrimaryButton from "../../PrimaryButton/primaryButton";
import { useCallback } from "react";

interface VisualizationItem {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  position: string;
}

const visualizationData: VisualizationItem[] = [
  {
    id: 1,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/anton-maksimov-5642-su-wrkNQmhmdvY-unsplash.jpg",
    category: "Visualization",
    title: "Orbital Command",
    description: "How to recognize patterns in complex datasets How to recognize patterns in complex datasets How to recognize patterns in complex datasets",

    position: "HR Executive",
  },
  {
    id: 2,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg",
    category: "Visualization",
    title: "Understanding Data Patterns",
    description: "How to recognize patterns in complex datasets recognize patterns in complex datasets recognize patterns in complex datasets",

    position: "Visualization",
  },
  {
    id: 3,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/sumup-S8UnShrQUeE-unsplash.jpg",
    category: "Visualization",
    title: "Cloud Optimization Engine",
    description: "How to craft compelling narratives using visualization How to craft compelling narratives using visualization narratives using visualization",

    position: "Tech Lead",
  },
  {
    id: 4,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg ",
    category: "Visualization",
    title: "User-Centered Visualizations",
    description: "Creating visualizations that prioritize user experience ",

    position: "UX Designer",
  },
  {
    id: 5,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/sumup-S8UnShrQUeE-unsplash.jpg",
    category: "Visualization",
    title: "The Future of Visualization",
    description: "Emerging trends in the visualization landscape Emerging trends in the visualization landscape",

    position: "Research Director",
  },
  {
    id: 6,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/sumup-S8UnShrQUeE-unsplash.jpg",
    category: "Visualization",
    title: "Telling Stories with Data",
    description: "How to craft compelling narratives using visualization",
    position: "Content Strategist",
  },
];

interface VisualizationCardProps {
  visualization: VisualizationItem;
  isFeatured?: boolean;
  onClick?: () => void;
}

const VisualizationCard: React.FC<VisualizationCardProps> = ({
  visualization,
  isFeatured = false,
  onClick = () => {},
}) => {
  if (isFeatured) {
    return (
      <div className="visualization-left-featuredCard-div">
        <div className="visualization-left-featuredCard-inner-div">
          <div className="visualization-left-featuredCard-image-div">
            <Image
              src={visualization.image}
              alt={visualization.title}
              fill
              priority
            />
          </div>
          <div className="visualization-left-featuredCard-content-div">
            <div className="visualization-left-featuredCard-content-top-div">
              <h2> {visualization.title}</h2>
              <p>{visualization.description}</p>
            </div>
            <div className="visualization-left-featuredCard-content-bottom-div">
              <div className="card-author-div">
              <span className="author-position">Category</span>
                <span className="author-name">{visualization.category}</span>

              </div>
              <button
                className="nav-button card-button"
                onClick={() => (window.location.href = "/solution-description")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="visualization-right-top-cardlist-card" onClick={onClick}>
     <div className="visualization-right-top-cardlist-card-inner-div"> 
      <div className="visualization-right-top-cardlist-card-image-div">
        <Image
          src={visualization.image}
          alt={visualization.title}
          className="card-image"
          fill
        />
      </div>
      <div className="visualization-right-top-cardlist-card-content-div">
        <h3>{visualization.title}</h3>

        <div className="visualization-right-top-cardlist-card-content-bottom-div">
          <div className="card-author-div">
          <span className="author-position">Category</span>
            <span className="author-name">{visualization.category}</span>

          </div>
          <button className="nav-button card-button"onClick={() => (window.location.href = "/solution-description")}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default function VisualizationSection1() {
  const [selectedVisualizationIndex, setSelectedVisualizationIndex] =
    useState(0);
  const [visibleVisualizations, setVisibleVisualizations] = useState<
    VisualizationItem[]
  >([]);

  const updateVisibleVisualizations = useCallback(() => {
    const nextVisualizations: VisualizationItem[] = [];
    for (let i = 1; i <= 2; i++) {
      const index = (selectedVisualizationIndex + i) % visualizationData.length;
      nextVisualizations.push(visualizationData[index]);
    }
    setVisibleVisualizations(nextVisualizations);
  }, [selectedVisualizationIndex]);
  
  useEffect(() => {
    updateVisibleVisualizations();
  }, [updateVisibleVisualizations]); 

  const handlePrevClick = () => {
    setSelectedVisualizationIndex((prevIndex) =>
      prevIndex === 0 ? visualizationData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedVisualizationIndex(
      (prevIndex) => (prevIndex + 1) % visualizationData.length
    );
  };

  return (
    <div className="visualization-section1-div">
      <h1>
      Visualization: Building Engaging, Scalable Designs for a 
      <br /> Tech-Driven Future.
      </h1>

      <div className="visualization-content-div">
        <div className="visualization-left-div">
          {visualizationData[selectedVisualizationIndex] && (
            <VisualizationCard
              visualization={visualizationData[selectedVisualizationIndex]}
              isFeatured={true}
            />
          )}
        </div>

        <div className="visualization-right-div">
          <div className="visualization-right-top-div">
            <div className="visualization-right-top-cardlist-div">
              {visibleVisualizations.map((visualization) => (
                <VisualizationCard
                  key={visualization.id}
                  visualization={visualization}
                />
              ))}
            </div>
          </div>

          <div className="visualization-right-bottom-div">
            <p>
              We initiate our journey by conducting an in-depth consultation to
              understand your requirements. During this phase, we carefully
              explore your vision, strategic objectives, and specific to
              transform your goals into reality.
            </p>
            <div className="explore-btn">
              <PrimaryButton
                onClick={() => (window.location.href = "/allsolutions")}
              >
                Explore More{" "}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="visualization-navigation">
        <button className="nav-button prev-button" onClick={handlePrevClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="nav-button next-button" onClick={handleNextClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}