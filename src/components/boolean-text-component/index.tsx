import React, { useState } from "react";

interface ComponentProps {
  text: string;
  isTextVisible: boolean;
}

const BooleanTextComponent: React.FC<ComponentProps> = ({
  text,
  isTextVisible,
}) => {
  const [textIsVisible, setTextIsVisible] = useState(isTextVisible);
  const handleTextVisibility = () => setTextIsVisible((v) => !v);

  return (
    <div className="card">
      <button onClick={handleTextVisibility} type="button">
        {textIsVisible ? "hide text" : "show text"}
      </button>
      {textIsVisible && <p>{text}</p>}
    </div>
  );
};

export default BooleanTextComponent;
