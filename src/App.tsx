import "./App.css";
import CounterButton from "./components/CounterButton";
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <>
      <SearchInput />
      <ItemList />
      <CounterButton />
    </>
  );
}

export default App;
