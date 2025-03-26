"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./ProductEngineeringSection1.css";
import PrimaryButton from "../../PrimaryButton/primaryButton";
import { useCallback } from "react";

interface ProductEngineeringItem {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;

  position: string;
}

const productengineeringData: ProductEngineeringItem[] = [
  {
    id: 1,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/anton-maksimov-5642-su-wrkNQmhmdvY-unsplash.jpg",
    category: "ProductEngineering",
    title: "The ProductEngineering Title",
    description: "How to recognize patterns in complex datasets How to recognize patterns in complex datasets How to recognize patterns in complex datasets",

    position: "HR Executive",
  },
  {
    id: 2,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg",
    category: "Product Engineering",
    title: "Understanding Data Patterns",
    description: "How to recognize patterns in complex datasets recognize patterns in complex datasets recognize patterns in complex datasets",

    position: "Data Scientist",
  },
  {
    id: 3,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/sumup-S8UnShrQUeE-unsplash.jpg",
    category: "Product Engineering",
    title: "Cloud Optimization Engine",
    description: "How to craft compelling narratives using visualization How to craft compelling narratives using visualization narratives using visualization",

    position: "Tech Lead",
  },
  {
    id: 4,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/anton-maksimov-5642-su-wrkNQmhmdvY-unsplash.jpg",
    category: "Product Engineering",
    title: "User-Centered Visualizations",
    description: "Creating visualizations that prioritize user experience ",

    position: "UX Designer",
  },
  {
    id: 5,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg",
    category: "Product Engineering",
    title: "The Future of Visualization",
    description: "Emerging trends in the visualization landscape Emerging trends in the visualization landscape",

    position: "Research Director",
  },
  {
    id: 6,
    image: "https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/solutions-image/sumup-S8UnShrQUeE-unsplash.jpg",
    category: "Product Engineering",
    title: "Telling Stories with Data",
    description: "How to craft compelling narratives using visualization",

    position: "Content Strategist",
  },
];

interface ProductEngineeringCardProps {
  productengineering: ProductEngineeringItem;
  isFeatured?: boolean;
  onClick?: () => void;
}

const ProductEngineeringCard: React.FC<ProductEngineeringCardProps> = ({
  productengineering,
  isFeatured = false,
  onClick = () => {},
}) => {
  if (isFeatured) {
    return (
      <div className="product-engineering-left-featuredCard-div">
        <div className="product-engineering-left-featuredCard-inner-div">
          <div className="product-engineering-left-featuredCard-image-div">
            <Image
              src={productengineering.image}
              alt={productengineering.title}
              fill
              priority
            />
          </div>
          <div className="product-engineering-left-featuredCard-content-div">
            <div className="product-engineering-left-featuredCard-content-top-div">
              <h2> {productengineering.title}</h2>
              <p>{productengineering.description}</p>
            </div>
            <div className="product-engineering-left-featuredCard-content-bottom-div">
              <div className="card-author-div">
              <span className="author-position">Category</span>
              <span className="author-name">{productengineering.category}</span>
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
    <div className="product-engineering-right-top-cardlist-card" onClick={onClick}>
     <div className="product-engineering-right-top-cardlist-card-inner-div"> 
      <div className="product-engineering-right-top-cardlist-card-image-div">
        <Image
          src={productengineering.image}
          alt={productengineering.title}
          className="card-image"
          fill
        />
      </div>
      <div className="product-engineering-right-top-cardlist-card-content-div">
        <h3>{productengineering.title}</h3>

        <div className="product-engineering-right-top-cardlist-card-content-bottom-div">
          <div className="card-author-div">
          <span className="author-position">Category</span>
            <span className="author-name">{productengineering.category}</span>
            
          </div>
          <button className="nav-button card-button" onClick={() => (window.location.href = "/solution-description")}>
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

export default function ProductEngineeringSection1() {
  const [selectedProductEngineeringIndex, setSelectedProductEngineeringIndex] =
    useState(0);
  const [visibleProductEngineerings, setVisibleProductEngineerings] = useState<
    ProductEngineeringItem[]
  >([]);


  const updateVisibleProductEngineerings = useCallback(() => {
    const nextProductEngineerings: ProductEngineeringItem[] = [];
    for (let i = 1; i <= 2; i++) {
      const index = (selectedProductEngineeringIndex + i) % productengineeringData.length;
      nextProductEngineerings.push(productengineeringData[index]);
    }
    setVisibleProductEngineerings(nextProductEngineerings);
  }, [selectedProductEngineeringIndex]);
  
  useEffect(() => {
    updateVisibleProductEngineerings();
  }, [updateVisibleProductEngineerings]); 

  const handlePrevClick = () => {
    setSelectedProductEngineeringIndex((prevIndex) =>
      prevIndex === 0 ? productengineeringData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedProductEngineeringIndex(
      (prevIndex) => (prevIndex + 1) % productengineeringData.length
    );
  };


  return (
    <div className="product-engineering-section1-div">
      <h1>
      Product Engineering: Crafting Scalable, High-Performance<br />
       Product Engineering for a Tech-Driven Future.
      </h1>

      <div className="product-engineering-content-div">
        <div className="product-engineering-left-div">
          {productengineeringData[selectedProductEngineeringIndex] && (
            <ProductEngineeringCard
            productengineering={productengineeringData[selectedProductEngineeringIndex]}
              isFeatured={true}
            />
          )}
        </div>

        <div className="product-engineering-right-div">
          <div className="product-engineering-right-top-div">
            <div className="product-engineering-right-top-cardlist-div">
              {visibleProductEngineerings.map((productengineering) => (
                <ProductEngineeringCard
                  key={productengineering.id}
                  productengineering={productengineering}
                  // onClick={() => handleCardClick(productengineering.id)}
                />
              ))}
            </div>
          </div>

          <div className="product-engineering-right-bottom-div">
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
      <div className="product-engineering-navigation">
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