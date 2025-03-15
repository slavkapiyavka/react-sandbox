import React from "react";

interface ComponentProps {
  data: boolean;
}

const BooleanComponent: React.FC<ComponentProps> = ({ data }) => {
  return (
    <div className="card">
      <h2 className="heading-second">BooleanComponent</h2>
      <dl>
        <dt>value:</dt>
        <dd>
          <code>{data ? "true" : "false"}</code>
        </dd>
      </dl>
    </div>
  );
};

export default BooleanComponent;
