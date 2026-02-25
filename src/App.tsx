import { useCallback, useState, type ChangeEvent } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";
import { BRAWLERS } from "./shared/data/brawlers";

function App() {
  const [needle, setNeedle] = useState("");
  const [counter, setCounter] = useState(0);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setNeedle(e.target.value), []);
  const onIncrement = useCallback(() => setCounter(prev => prev + 1), []);

  return (
    <>
      <p>щётчик: {counter}</p>
      <SearchInput value={needle} onChange={onChange} />
      <ItemList needle={needle} list={BRAWLERS} />
      <CounterButton onClick={onIncrement} />
    </>
  );
}

export default App;
