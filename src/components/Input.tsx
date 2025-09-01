import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  cb: (e: string) => void;
};

const Input = ({ value, disabled, id, type = "text", min, max, cb }: Props) => {
  return (
    <input
      id={id}
      type={type}
      min={min}
      max={max}
      onChange={(e) => cb(e.target.value)}
      value={value}
      disabled={disabled}
    />
  );
};

export default Input;
