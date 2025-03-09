import React from "react";

interface ComponentProps {
  data: string[];
}

const ArrayComponent: React.FC<ComponentProps> = ({ data }) => {
  return (
    <div className="card">
      <h2 className="heading-second">ArrayComponent</h2>
      <ul>
        {data.map((element: string) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayComponent;
