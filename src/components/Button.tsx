type Props = {
  text: string;
  disabled: boolean;
  cb: () => void;
};

const Button = ({ text, disabled, cb }: Props) => {
  return (
    <button type="button" disabled={disabled} onClick={cb}>
      {text}
    </button>
  );
};

export default Button;
