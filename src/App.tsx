import "./App.css";
import BooleanTextComponent from "./components/boolean-text-component";
import CounterComponent from "./components/counter-component";

function App() {
  return (
    <section className="section">
      <CounterComponent />
      <BooleanTextComponent text={"kek"} isTextVisible={true} />
    </section>
  );
}

export default App;
