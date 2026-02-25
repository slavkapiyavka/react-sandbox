import { useCallback, useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";
import type { ListItem } from "./shared/types/list-item";

function App() {
  const [needle, setNeedle] = useState("");
  const [counter, setCounter] = useState(0);

  const list: ListItem[] = [
    { id: 'fn8d', name: 'sirius' },
    { id: 'v9f890gf', name: 'fang' },
    { id: 'ni54n', name: 'shelly' },
    { id: 'k2m4l', name: 'brock' },
    { id: 'xz90c9', name: 'jessie' },
    { id: 'ds8dn5', name: 'pam' }
  ];
  const onChange = useCallback((value: string) => setNeedle(value), []);
  const onIncrement = useCallback(() => setCounter(prev => ++prev), []);

  return (
    <>
      <p>щётчик: {counter}</p>
      <SearchInput value={needle} onChange={(e) => onChange(e.target.value)} />
      <ItemList needle={needle} list={list} />
      <CounterButton onClick={onIncrement} />
    </>
  );
}

export default App;
