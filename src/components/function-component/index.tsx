import React from "react";

interface ComponentProps {
  data: () => string;
}

const FunctionComponent: React.FC<ComponentProps> = ({ data }) => {
  const result = data();

  return (
    <div className="card">
      <h2 className="heading-second">FunctionComponent</h2>
      <p>
        <code>function execution result: {result}</code>
      </p>
    </div>
  );
};

export default FunctionComponent;
