import Image from "next/image";
import React, { ReactNode } from 'react';
import './tertiaryButton.css'; 
import Arrow from "../../../public/assets/ContactAssets/Button-Aroow-white.svg"


// Define props type
interface tertiaryButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean; // Optional prop
}

const tertiaryButton: React.FC<tertiaryButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button className="tertiary-button-main" onClick={onClick} disabled={disabled}>
    <div className="tertiary-button-main-boxy">
    <Image src={Arrow} alt="Button Arrow" />
    </div>
    <div className="tertiary-button-main-text-side">{children}</div>
  </button>
  );
};

export default tertiaryButton;
