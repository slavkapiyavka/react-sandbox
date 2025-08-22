import "./App.css";
import ArrayProps from "./components/ArrayProps";
import BooleanProps from "./components/BooleanProps";
import FunctionProps from "./components/FunctionProps";
import NumberProps from "./components/NumberProps";
import ObjectProps from "./components/ObjectProps";
import StringProps from "./components/StringProps";

function App() {
  return (
    <>
      <NumberProps num={42} />
      <StringProps str="привет1" />
      <BooleanProps bool={true} />
      <ObjectProps obj={{ keyE: "42" }} />
      <FunctionProps foo={() => new Date().getMilliseconds()} />
      <ArrayProps arr={[42, "privet"]} />
    </>
  );
}

export default App;
