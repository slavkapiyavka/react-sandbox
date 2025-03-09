import React from "react";

interface ComponentProps {
  data: boolean;
}

const BooleanComponent: React.FC<ComponentProps> = ({ data }) => {
  return (
    <>
      <h2>BooleanComponent</h2>
      <dl>
        <dt>value:</dt>
        <dd>
          <code>{data ? "true" : "false"}</code>
        </dd>
      </dl>
    </>
  );
};

export default BooleanComponent;
