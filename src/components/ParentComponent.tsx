import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter((v) => ++v);
  const resetCounter = () => setCounter(0);
  const setRandomCounter = () => setCounter(Math.round(Math.random() * 10000));
  const decreaseCounter = () => setCounter((v) => --v);

  return (
    <section>
      <div>
        <p>counter: {counter}</p>
        <button onClick={increaseCounter} type="button">
          increase
        </button>
        <button onClick={resetCounter} type="button">
          reset
        </button>
        <button onClick={setRandomCounter} type="button">
          random counter value
        </button>
        <button onClick={decreaseCounter} type="button">
          decrease
        </button>
      </div>

      <ChildComponent name="motherfucker" counter={counter} />
    </section>
  );
};

export default ParentComponent;
