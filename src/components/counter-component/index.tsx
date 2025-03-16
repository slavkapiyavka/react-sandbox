import React, { useState } from "react";

const CounterComponent: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleCountButtonClick = () => setClickCount((v) => ++v);

  return (
    <div className="card">
      <dl>
        <dt>counter</dt>
        <dd>
          <p>
            the button was clicked {clickCount} time{clickCount !== 1 && "s"}
          </p>
          <button type="button" onClick={handleCountButtonClick}>
            PUSH ME
          </button>
        </dd>
      </dl>
    </div>
  );
};

export default CounterComponent;
