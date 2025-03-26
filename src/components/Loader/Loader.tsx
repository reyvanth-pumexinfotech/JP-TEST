import React, { useEffect, useState } from "react";
import "./Loader.css";

interface LoaderProps {
  duration?: number;
}

const Loader: React.FC<LoaderProps> = ({ duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="img-loader-container">
      <div className="img-loader"></div>
    </div>
  );
};

export default Loader;
