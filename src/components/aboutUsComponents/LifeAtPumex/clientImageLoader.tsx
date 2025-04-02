"use client";
import { useState } from "react";
import Image from "next/image";

interface ClientImageLoaderProps {
  image: { src: string; alt: string };
  index: number;
}

const ClientImageLoader: React.FC<ClientImageLoaderProps> = ({
  image,
  index,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`item${index + 1} image-container`}>
      {!isLoaded && <div className="skeleton-loader"></div>}
      <Image
        src={image.src}
        alt={image.alt}
        width={100}
        height={100}
        priority={index < 3}
        className={isLoaded ? "loaded" : ""}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ClientImageLoader;
