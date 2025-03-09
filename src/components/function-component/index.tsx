import React from "react";

interface ComponentProps {
  data: () => string;
}

const FunctionComponent: React.FC<ComponentProps> = ({ data }) => {
  const result = data();

  return (
    <>
      <h2>FunctionComponent</h2>
      <p>
        <code>function execution result: {result}</code>
      </p>
    </>
  );
};

export default FunctionComponent;
