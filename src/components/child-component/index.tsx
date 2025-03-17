import React from "react";

interface ComponentProps {
  name: string;
  counter: number;
}

const ChildComponent: React.FC<ComponentProps> = ({ name, counter }) => {
  return (
    <div className="card">
      <h2>hello, {name}!</h2>
      <span>current counter value: {counter}</span>
    </div>
  );
};

export default ChildComponent;
