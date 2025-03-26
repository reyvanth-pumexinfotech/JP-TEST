import { useState, useEffect } from "react";
import "./LandingLoader.css";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 5, 100));
    }, 100);

    const timer = setTimeout(() => {
      setShowLoader(false);
      onLoadingComplete();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    showLoader && (
      <div className="loader-overlay">
        <div className="loader-bg-image"></div>
        <div className="loader-content">
          <h2>{progress}%</h2>
          <p>Good things take time... and we are worth the wait!</p>
        </div>
      </div>
    )
  );
};

export default Loader;