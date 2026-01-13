import { useRef, useState, type FormEvent } from "react";
import "./App.css";
import { List } from "./components/List";
import type { Base } from "./shared/types";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [list, setList] = useState<Base[]>([
    { id: "8453058", text: "text" },
    { id: "4824802", text: "text2" },
    { id: "4324243", text: "text3" },
  ]);
  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = String(Math.floor(Math.random() * 100000000));
    const text = inputRef.current?.value ?? "";

    setList((l) => [...l, { id, text }]);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" ref={inputRef} />
        <button type="button" onClick={() => inputRef.current?.focus()}>
          focus
        </button>
      </form>
      <List
        items={list}
        onItemEdit={(item: Base) =>
          setList((items): Base[] =>
            items.map((i) =>
              i.id === item.id ? { id: i.id, text: `!!!${i.text}` } : i,
            ),
          )
        }
      />
    </>
  );
}

export default App;
