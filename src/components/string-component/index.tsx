import React from "react";

interface ComponentProps {
  data: string;
}

const StringComponent: React.FC<ComponentProps> = ({ data }) => {
  return (
    <div className="card">
      <h2 className="heading-second">StringComponent</h2>
      <dl>
        <dt>value:</dt>
        <dd>
          <code>{data}</code>
        </dd>
      </dl>
    </div>
  );
};

export default StringComponent;
