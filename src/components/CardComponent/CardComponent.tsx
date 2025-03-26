import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./CardComponent.css";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const Card: React.FC<CardProps> = ({ image, title, category }) => {
  return (
    <div className="visualization-card">
      <div className="visualization-card-img-layer">
        <Image
          src={image}
          alt={title}
          fill
          className="visualization-card-image"
        />
      </div>

      <div className="visualization-card-info">
        <span className="visualization-card-category">{category}</span>
        <div className="visualization-card-title-button-div">
          <span>{title}</span>
          <button className="visualization-card-btn">
            <FontAwesomeIcon icon={faChevronRight} className="visualization-card-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
