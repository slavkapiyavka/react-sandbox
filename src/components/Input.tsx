import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("default text");

  return (
    <section>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>input value: {text}</p>
    </section>
  );
};

export default Input;
