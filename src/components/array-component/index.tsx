import React from "react";

interface ComponentProps {
  data: string[];
}

const ArrayComponent: React.FC<ComponentProps> = ({ data }) => {
  return (
    <>
      <h2>ArrayComponent</h2>
      <ul>
        {data.map((element: string) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </>
  );
};

export default ArrayComponent;
