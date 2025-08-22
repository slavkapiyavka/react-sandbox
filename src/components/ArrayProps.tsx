interface IArrayProps {
  arr: Array<string | number>;
}

const ArrayProps = ({ arr }: IArrayProps) => {
  return (
    <section>
      <span>array props component:</span>
      <ul>
        {arr.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
};

export default ArrayProps;
