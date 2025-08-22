import { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section>
      <button onClick={() => setIsVisible((v) => !v)} type="button">
        {isVisible ? "hide text" : "show text"}
      </button>
      {isVisible ?? <p>yo!</p>}
    </section>
  );
};

export default Toggle;
