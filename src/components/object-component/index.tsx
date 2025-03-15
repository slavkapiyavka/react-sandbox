import React from "react";

interface ComponentProps {
  data: object;
}

const ObjectComponent: React.FC<ComponentProps> = ({ data }) => {
  const entries = Object.entries(data);

  return (
    <div className="card">
      <h2 className="heading-second">ObjectComponent</h2>
      {entries.map(([key, value]) => (
        <dl key={key}>
          <dt>{key}:</dt>
          <dd>
            <code>{value}</code>
          </dd>
        </dl>
      ))}
    </div>
  );
};

export default ObjectComponent;
