import "./App.css";
import NumberComponent from "./components/number-component";
import StringComponent from "./components/string-component";
import BooleanComponent from "./components/boolean-component";
import ObjectComponent from "./components/object-component";
import ArrayComponent from "./components/array-component";
import FunctionComponent from "./components/function-component";
import { ComponentsDataKeys } from "./shared/types/enums";
import { componentsData } from "./shared/mocks/mock-data";

function App() {
  return (
    <>
      <NumberComponent
        data={componentsData.get(ComponentsDataKeys.numberData) ?? 0}
      />
      <StringComponent
        data={componentsData.get(ComponentsDataKeys.stringData) ?? ""}
      />
      <BooleanComponent
        data={componentsData.get(ComponentsDataKeys.booleanData) ?? true}
      />
      <ObjectComponent
        data={componentsData.get(ComponentsDataKeys.objectData) ?? {}}
      />
      <FunctionComponent
        data={componentsData.get(ComponentsDataKeys.functionData)}
      />
      <ArrayComponent
        data={componentsData.get(ComponentsDataKeys.arrayData) ?? []}
      />
    </>
  );
}

export default App;
