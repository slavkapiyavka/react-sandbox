interface IChildComponent {
  name: string;
  counter: number;
}

const ChildComponent = ({ name, counter }: IChildComponent) => {
  return (
    <p>
      hello, {name}. the counter value is {counter}
    </p>
  );
};

export default ChildComponent;
