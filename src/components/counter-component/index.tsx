import React, { useState } from "react";

const CounterComponent: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleCountButtonClick = () => setClickCount((v) => ++v);
  const getColorFromNumber = (num: number): { backgroundColor: string } => {
    const hue = (num * 30) % 360;
    return {
      backgroundColor: `hsl(${hue}, 70%, 50%)`,
    };
  };

  return (
    <div className="card">
      <dl>
        <dt>counter</dt>
        <dd>
          <p>
            the button was clicked {clickCount} time{clickCount !== 1 && "s"}
          </p>
          <button
            className="button"
            style={getColorFromNumber(clickCount)}
            type="button"
            onClick={handleCountButtonClick}
          >
            PUSH ME
          </button>
        </dd>
      </dl>
    </div>
  );
};

export default CounterComponent;
