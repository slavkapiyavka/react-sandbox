import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <section>
      <p>count is: {count}</p>
      <button type="button" onClick={() => setCount((v) => ++v)}>
        click to +1
      </button>
    </section>
  );
};

export default Counter;
