type Props = {
  text: string;
  disabled: boolean;
  cb: () => void;
  type: "button" | "submit" | "reset";
};

const Button = ({ text, disabled, cb, type = "button" }: Props) => {
  return (
    <button type={type} disabled={disabled} onClick={cb}>
      {text}
    </button>
  );
};

export default Button;
