"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./lifeatpumex.css";
import Image from "next/image";
import SecondaryButton from "@/components/SecondaryButton/secondaryButton";

function Lifeatpumex() {
  const router = useRouter();
  const imageSources = [
    { src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/IMG_0943.svg", alt: "Team Image 1" },
    { src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/AGM.svg", alt: "Team Image 2" },
    { src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/OnamSingle (1).svg", alt: "Team Image 3" },
    { src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Onam.svg", alt: "Team Image 4" },
    { src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Sunset.svg", alt: "Team Image 5" },
    { src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/IMG_0703.svg", alt: "Team Image 6" },
    { src: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Aneesh.svg", alt: "Team Image 7" },
  ];

  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    new Array(imageSources.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoadedImages = [...prev];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <div 
      className="life-at-pumex-main-div"
      style={{
        backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Landing-section-one-bg.svg")`,
      }}
    >
      <div className="life-at-pumex-secondary-div">
        <h1>The Pumex Way</h1>
        <div className="life-at-button-sizer">
          <SecondaryButton onClick={() => router.push("/team-photos")}>
            View More
          </SecondaryButton>
        </div>
      </div>
      
      <div className="team-image-grid-layer">
        {imageSources.map((image, index) => (
          <div key={index} className={`item${index + 1} image-container`}>
            {!loadedImages[index] && <div className="skeleton-loader"></div>}
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              priority={index < 3}
              className={loadedImages[index] ? "loaded" : ""}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lifeatpumex;