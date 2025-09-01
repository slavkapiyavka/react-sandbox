type Props = {
  value: number;
  disabled: boolean;
  cb: (e: string) => void;
  id: string;
  type?: 'number' | 'text' | 'password';
  min?: number;
  max?: number;
};

const Input = ({ value, disabled, cb, id, type = 'text', min, max }: Props) => {
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
