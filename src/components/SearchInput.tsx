import type { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const SearchInput = ({ value, onChange }: Props) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default SearchInput;
