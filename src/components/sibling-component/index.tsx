import React, { useState } from "react";

const SiblingComponent: React.FC = () => {
  const [text, setText] = useState("some random text");
  const handleButtonClick = () => setText("REDEV");

  return (
    <div className="card">
      <dl>
        <dt>sibling component with own text value</dt>
        <dd>
          <p>text: {text}</p>
          <button onClick={handleButtonClick} type="button">
            change initial 'some random text' to 'redev'
          </button>
        </dd>
      </dl>
    </div>
  );
};

export default SiblingComponent;
