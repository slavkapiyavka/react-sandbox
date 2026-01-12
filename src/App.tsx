import "./App.css";
import { List } from "./components/List";
import type { Base } from "./shared/types";

function App() {
  const list: Base[] = [
    { id: "8453058", text: "text" },
    { id: "4824802", text: "text2" },
    { id: "4324243", text: "text3" },
  ];

  return (
    <>
      <List items={list} />
    </>
  );
}

export default App;
