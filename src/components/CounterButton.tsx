import type { ComponentProps } from "react";

type IProps = ComponentProps<'button'>;

const CounterButton = ({ onClick }: IProps) => {
  return <button type="button" onClick={onClick}>button</button>;
};

export default CounterButton;
