import React from "react";

interface ComponentProps {
  data: string;
}

const StringComponent: React.FC<ComponentProps> = ({ data }) => {
  return (
    <>
      <h2>StringComponent</h2>
      <dl>
        <dt>value:</dt>
        <dd>
          <code>{data}</code>
        </dd>
      </dl>
    </>
  );
};

export default StringComponent;
