import { useMemo } from "react";
import type { ListItem } from "../shared/types/list-item";

interface IProps {
  needle: string;
  list: ListItem[];
}

const ItemList = ({ needle, list }: IProps) => {
  const filtered = useMemo(() => list.filter((item) => item.name.toLowerCase().includes(needle.toLowerCase())), [needle, list]);

  return (
    filtered.length ? <ul>{filtered.map((item) => <li key={item.id}>{item.name}</li>)}</ul> : <p>empty list</p>
  );
};

export default ItemList;
