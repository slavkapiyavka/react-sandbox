import React, { useState } from "react";

const ParentComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const handleCounterButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch ((e.target as HTMLButtonElement).name) {
      case "increase":
        setCounter((v) => ++v);
        break;
      case "reset":
        setCounter(0);
        break;
      case "random":
        setCounter(Math.floor(Math.random() * 10 + 1));
        break;
      case "decrease":
        if (counter > 0) {
          setCounter((v) => --v);
        }
        break;
    }
  };

  return (
    <div className="card">
      <h2>Parent component</h2>

      <dl>
        <dt>another counter</dt>
        <dd>
          <p>count value: {counter}</p>
          <div className="buttons-group">
            <button
              onClick={handleCounterButtonClick}
              className="button"
              type="button"
              name="increase"
            >
              Increase
            </button>
            <button
              onClick={handleCounterButtonClick}
              className="button"
              type="button"
              name="reset"
              disabled={counter === 0}
            >
              Reset counter to 0
            </button>
            <button
              onClick={handleCounterButtonClick}
              className="button"
              type="button"
              name="random"
            >
              Set random counter value
            </button>
            <button
              onClick={handleCounterButtonClick}
              className="button"
              type="button"
              name="decrease"
              disabled={counter === 0}
            >
              Decrease
            </button>
          </div>
        </dd>
      </dl>
    </div>
  );
};

export default ParentComponent;
