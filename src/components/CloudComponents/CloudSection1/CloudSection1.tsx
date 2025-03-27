"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./CloudSection1.css";
import PrimaryButton from "../../PrimaryButton/primaryButton";
import { useCallback } from "react";

interface CloudItem {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  position: string;
}

const cloudData: CloudItem[] = [
  {
    id: 1,
    image:
      "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/anton-maksimov-5642-su-wrkNQmhmdvY-unsplash.jpg",
    category: "Cloud",
    title: "Cloud Optimisation Engine",
    description:
      "How to recognize patterns in complex datasets How to recognize patterns in complex datasets How to recognize patterns in complex datasets",
    position: "HR Executive",
  },
  {
    id: 2,
    image:
      "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg",
    category: "Cloud",
    title: "Understanding Data Patterns",
    description:
      "How to recognize patterns in complex datasets recognize patterns in complex datasets recognize patterns in complex datasets",
    position: "Data Scientist",
  },
  {
    id: 3,
    image:
      "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/sumup-S8UnShrQUeE-unsplash.jpg",
    category: "Cloud",
    title: "Cloud Optimization Engine",
    description:
      "How to craft compelling narratives using visualization How to craft compelling narratives using visualization narratives using visualization",
    position: "Tech Lead",
  },
  {
    id: 4,
    image:
      "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/anton-maksimov-5642-su-wrkNQmhmdvY-unsplash.jpg",
    category: "Cloud",
    title: "User-Centered Visualizations",
    description: "Creating visualizations that prioritize user experience ",
    position: "UX Designer",
  },
  {
    id: 5,
    image:
      "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg",
    category: "Cloud",
    title: "The Future of Visualization",
    description:
      "Emerging trends in the visualization landscape Emerging trends in the visualization landscape",
    position: "Research Director",
  },
  {
    id: 6,
    image:
      "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/sumup-S8UnShrQUeE-unsplash.jpg",
    category: "Cloud",
    title: "Telling Stories with Data",
    description: "How to craft compelling narratives using visualization",
    position: "Content Strategist",
  },
];

interface CloudCardProps {
  cloud: CloudItem;
  isFeatured?: boolean;
  onClick?: () => void;
}

const CloudCard: React.FC<CloudCardProps> = ({
  cloud,
  isFeatured = false,
  onClick = () => {},
}) => {
  if (isFeatured) {
    return (
      <div className="cloud-left-featuredCard-div">
        <div className="cloud-left-featuredCard-inner-div">
          <div className="cloud-left-featuredCard-image-div">
            <Image src={cloud.image} alt={cloud.title} fill priority />
          </div>
          <div className="cloud-left-featuredCard-content-div">
            <div className="cloud-left-featuredCard-content-top-div">
              <h2> {cloud.title}</h2>
              <p>{cloud.description}</p>
            </div>
            <div className="cloud-left-featuredCard-content-bottom-div">
              <div className="card-author-div">
                <span className="author-position">Category</span>
                <span className="author-name">{cloud.category}</span>
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
    <div className="cloud-right-top-cardlist-card" onClick={onClick}>
      <div className="cloud-right-top-cardlist-card-inner-div">
        <div className="cloud-right-top-cardlist-card-image-div">
          <Image
            src={cloud.image}
            alt={cloud.title}
            className="card-image"
            fill
          />
        </div>
        <div className="cloud-right-top-cardlist-card-content-div">
          <h3>{cloud.title}</h3>

          <div className="cloud-right-top-cardlist-card-content-bottom-div">
            <div className="card-author-div">
              <span className="author-position">Category</span>
              <span className="author-name">{cloud.category}</span>
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
};

export default function CloudSection1() {
  const [selectedCloudIndex, setSelectedCloudIndex] = useState(0);
  const [visibleClouds, setVisibleClouds] = useState<CloudItem[]>([]);

  const updateVisibleClouds = useCallback(() => {
    const nextClouds: CloudItem[] = [];
    for (let i = 1; i <= 2; i++) {
      const index = (selectedCloudIndex + i) % cloudData.length;
      nextClouds.push(cloudData[index]);
    }
    setVisibleClouds(nextClouds);
  }, [selectedCloudIndex]);

  useEffect(() => {
    updateVisibleClouds();
  }, [updateVisibleClouds]);

  const handlePrevClick = () => {
    setSelectedCloudIndex((prevIndex) =>
      prevIndex === 0 ? cloudData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedCloudIndex((prevIndex) => (prevIndex + 1) % cloudData.length);
  };

  return (
    <div className="cloud-section1-div">
      <h1>
        Cloud: Engineering the Cloud for Peak Performance
        <br /> and Cost Efficiency.
      </h1>

      <div className="cloud-content-div">
        <div className="cloud-left-div">
          {cloudData[selectedCloudIndex] && (
            <CloudCard
              cloud={cloudData[selectedCloudIndex]}
              isFeatured={true}
            />
          )}
        </div>

        <div className="cloud-right-div">
          <div className="cloud-right-top-div">
            <div className="cloud-right-top-cardlist-div">
              {visibleClouds.map((cloud) => (
                <CloudCard key={cloud.id} cloud={cloud} />
              ))}
            </div>
          </div>

          <div className="cloud-right-bottom-div">
            <p>
              We initiate our journey by conducting an in-depth consultation to
              understand your requirements. During this phase, we carefully
              explore your vision, strategic objectives, and specific to
              transform your goals into reality.
            </p>
          </div>
        </div>
      </div>
      <div className="cloud-navigation">
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
