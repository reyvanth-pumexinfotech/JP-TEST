import React from "react";
import "./inputfield.css"; // Import your CSS file.

interface InputfieldProps {
  name: string;  // Added name prop
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Inputfield: React.FC<InputfieldProps> = ({ name, placeholder, value, onChange, type = "text" }) => {
  return (
    <input
      name={name}  // Fixed missing name prop
      type={type}
      className="generic-input-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

// Adding prop types validation

export default Inputfield;
