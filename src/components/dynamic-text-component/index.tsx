import React, { ChangeEvent, useState } from "react";

const DynamicTextComponent: React.FC = () => {
  const [text, setText] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <div className="card">
      <h2>Dynamic Text Component</h2>
      <input type="text" name="text" onChange={handleInputChange} />
      <p className={text ? "green" : "red"}>text: {text}</p>
    </div>
  );
};

export default DynamicTextComponent;
