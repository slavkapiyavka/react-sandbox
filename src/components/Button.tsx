import type { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const Button = ({ children, disabled, type = "button", onClick }: Props) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
