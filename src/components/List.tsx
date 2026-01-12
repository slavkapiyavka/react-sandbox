import { useEffect, useState } from "react";
import type { Base } from "../shared/types";

type ListProps<T extends Base> = {
  items: T[];
};

export const List = <T extends Base>({ items }: ListProps<T>) => {
  const [itemsCopy, setItemsCopy] = useState(items);
  const onItemTextModify = (item: Base) =>
    setItemsCopy((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, text: `!${i.text}` } : i)),
    );

  return itemsCopy.length ? (
    <ul>
      {itemsCopy.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button type="button" onClick={() => onItemTextModify(item)}>
            add `!!!`
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>empty list</p>
  );
};
