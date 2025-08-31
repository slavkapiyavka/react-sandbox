type Props = {
  value: number;
  disabled: boolean;
  cb: (e: string) => void;
};

const Input = ({ value, disabled, cb }: Props) => {
  return (
    <input
      id="count-input"
      type="number"
      min="1"
      max="50"
      onChange={(e) => cb(e.target.value)}
      value={value}
      disabled={disabled}
    />
  );
};

export default Input;
