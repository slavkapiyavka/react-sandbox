interface INumberProps {
  num: number;
}

const NumberProps = ({ num }: INumberProps) => {
  return <section>number props component: {num}</section>;
};

export default NumberProps;
