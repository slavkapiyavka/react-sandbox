import type { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Input = ({
  value,
  disabled,
  id,
  type = "text",
  min,
  max,
  onChange,
}: Props) => {
  return (
    <input
      id={id}
      type={type}
      min={min}
      max={max}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
      }}
      value={value}
      disabled={disabled}
    />
  );
};

export default Input;
