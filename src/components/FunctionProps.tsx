interface IFunctionProps {
  foo: () => number;
}

const FunctionProps = ({ foo }: IFunctionProps) => {
  return <section>function props component: {foo()}</section>;
};

export default FunctionProps;
