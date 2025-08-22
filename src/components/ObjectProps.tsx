interface IObjectProps {
  obj: object;
}

const ObjectProps = ({ obj }: IObjectProps) => {
  return (
    <section>
      <p>object props component:</p>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
    </section>
  );
};

export default ObjectProps;
