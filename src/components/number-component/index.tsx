import React from "react";

interface ComponentProps {
  data: number;
}

const NumberComponent: React.FC<ComponentProps> = ({ data }) => {
  return (
    <>
      <h2>NumberComponent</h2>
      <dl>
        <dt>value:</dt>
        <dd>
          <code>{data}</code>
        </dd>
      </dl>
    </>
  );
};

export default NumberComponent;
