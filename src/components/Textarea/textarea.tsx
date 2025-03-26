import React from "react";
import "./textarea.css"; // Import your CSS file.

interface TextfieldProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textfield: React.FC<TextfieldProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      className="generic-text-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textfield;
