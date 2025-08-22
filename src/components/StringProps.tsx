interface IStringProps {
  str: string;
}

const StringProps = ({ str }: IStringProps) => {
  return <section>string props component: {str}</section>;
};

export default StringProps;
