import Image from "next/image";
import React, { ReactNode } from "react";
import "./secondaryButton.css"; 
import Arrow from "../../../public/assets/ContactAssets/Button-Aroow.svg"

interface SecondaryButtonProps {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, children, disabled = false }) => {
  return (
    <button className="secondary-button-main" onClick={onClick} disabled={disabled}>
      <div className="secondary-button-main-boxy">
      <Image src={Arrow} alt="Button Arrow" />
      </div>
      <div className="secondary-button-main-text-side">{children}</div>
    </button>
  );
};

export default SecondaryButton;
