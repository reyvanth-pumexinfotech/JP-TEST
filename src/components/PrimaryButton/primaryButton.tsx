import Image from "next/image";
import React, { ReactNode } from 'react';
import './primaryButton.css'; 
import Arrow from "../../../public/assets/ContactAssets/Button-Aroow-white.svg"


// Define props type
interface PrimaryButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean; // Optional prop
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button className="primary-button-main" onClick={onClick} disabled={disabled}>
    <div className="primary-button-main-boxy">
    <Image src={Arrow} alt="Button Arrow" />
    </div>
    <div className="primary-button-main-text-side">{children}</div>
  </button>
  );
};

export default PrimaryButton;
