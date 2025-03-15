import React from "react";

interface ComponentProps {
  data: number;
}

const NumberComponent: React.FC<ComponentProps> = ({ data }) => {
  return (
    <div className="card">
      <h2 className="heading-second">NumberComponent</h2>
      <dl>
        <dt>value:</dt>
        <dd>
          <code>{data}</code>
        </dd>
      </dl>
    </div>
  );
};

export default NumberComponent;
