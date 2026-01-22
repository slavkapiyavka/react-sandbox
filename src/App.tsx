import { useCallback, useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";

function App() {
  const [needle, setNeedle] = useState("");
  const onChange = useCallback((value: string) => setNeedle(value), []);

  return (
    <>
      <SearchInput value={needle} onChange={(e) => onChange(e.target.value)} />
      <ItemList />
      <CounterButton />
    </>
  );
}

export default App;
