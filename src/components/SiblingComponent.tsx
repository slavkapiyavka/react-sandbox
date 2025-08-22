import { useState } from "react";

const SiblingComponent = () => {
  const [text, setText] = useState("lorem ipsum");

  return (
    <section>
      <p>current text is: {text}</p>
      <button onClick={() => setText("REDEV")} type="button">
        change text to "REDEV"
      </button>
    </section>
  );
};

export default SiblingComponent;
