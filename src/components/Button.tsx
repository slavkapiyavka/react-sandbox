import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  text: string;
  cb: () => void;
};

const Button = ({ text, disabled, type = "button", cb }: Props) => {
  return (
    <button type={type} disabled={disabled} onClick={cb}>
      {text}
    </button>
  );
};

export default Button;
