import type { Base } from "../shared/types";

type ListProps<T extends Base> = {
  items: T[];
  onItemEdit: (item: T) => void;
};

export const List = <T extends Base>({ items, onItemEdit }: ListProps<T>) => {
  const itemsCopy = items;

  return itemsCopy.length ? (
    <ul>
      {itemsCopy.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button type="button" onClick={() => onItemEdit(item)}>
            add `!!!`
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>empty list</p>
  );
};
