"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/NewNavbar/navbar";
import Footer from "@/components/Footer/footer";
import { getImagesApi } from "@/services/imagesService";
import "./ourteam.css";

interface ImageData {
  imageId: string;
  url: string;
}

interface BackendImagesResponse {
  images: ImageData[];
}

const Pics: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true); 
        const backendImages = (await getImagesApi()) as BackendImagesResponse;
        console.log("Fetched Images Response:", backendImages);

        if (backendImages && Array.isArray(backendImages.images)) {
          setImages(backendImages.images);
          
          
          if (backendImages.images.length === 0) {
            setLoading(false);
          } else {
            setLoading(false);
          }
        } else {
          console.error("Fetched data is not in the expected format");
          setLoading(false); 
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false); 
      }
    };

    fetchImages();
    window.scrollTo(0, 0);
  }, []);

  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
        console.log("Loading timed out");
      }
    }, 10000); 
  
    return () => clearTimeout(loadingTimeout);
  }, [loading]);

  return (
    <div>
      <div className="navbar-holder">
        <Navbar />
      </div>
      <div className="pics-main">
        {loading ? (
          <div className="img-loader-container">
            <div className="img-loader"></div>
            <h1>Thanks for your patience! The images will be loaded soon!</h1>
          </div>
        ) : (
          <>
            <div className="pics-top-infobar">
              <h1>The Pumex Way</h1>
              <h2>
                A space where your talents take flight, your ambitions find their path and your passions drive every step.
                Here, every day brings a spark of joy and a touch of laughter, making the journey as rewarding as the destination.
              </h2>
            </div>
            <div className="photos-layer">
              {Array.from({ length: 4 }).map((_, layer) => (
                <div key={layer} className={`photo-layer-${layer + 1}`}>
                  {images
                    .filter((_, index) => index % 4 === layer)
                    .map((img) => (
                      <div key={img.imageId} className="admin-image-container">
                        <img
                          src={img.url}
                          alt={`img-layer-${layer + 1}-${img.imageId}`}
                          width={300}
                          height={200}
                          className="photo-image"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Pics;