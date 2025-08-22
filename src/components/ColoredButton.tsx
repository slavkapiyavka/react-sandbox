import { useState } from "react";

const ColoredButton = () => {
  const colors = ["black", "red", "green", "blue", "coral", "violet"];
  const [textColor, setTextColor] = useState(colors[0]);

  const changeTextColor = () => {
    let newColor;
    do {
      const randomNumber = Math.floor(Math.random() * colors.length);
      newColor = colors[randomNumber];
    } while (newColor === textColor);

    setTextColor(newColor);
  };

  return (
    <button
      type="button"
      onClick={changeTextColor}
      style={{ color: textColor }}
    >
      click to change text color
    </button>
  );
};

export default ColoredButton;
