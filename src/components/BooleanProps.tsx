interface IBooleanProps {
  bool: boolean;
}

const BooleanProps = ({ bool }: IBooleanProps) => {
  return <section>boolean props component: {bool}</section>;
};

export default BooleanProps;
