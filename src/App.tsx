import "./App.css";
import BooleanTextComponent from "./components/boolean-text-component";
import CounterComponent from "./components/counter-component";
import DynamicTextComponent from "./components/dynamic-text-component";

function App() {
  return (
    <section className="section">
      <CounterComponent />
      <BooleanTextComponent text={"kek"} isTextVisible={true} />
      <DynamicTextComponent />
    </section>
  );
}

export default App;
