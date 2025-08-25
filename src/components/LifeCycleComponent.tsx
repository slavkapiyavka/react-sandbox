import { useEffect, useState } from "react";
import type { IState } from "../utils/interfaces";
import { CONSTANTS } from "../utils/constants";

const LifeCycleComponent = () => {
  const [state, setState] = useState<IState>({ count: 0 });

  useEffect(() => {
    console.log("--useEffect--componentDidMount--like--");

    fetch(CONSTANTS.URL)
      .then((r) => r.json())
      .then((data) => setState((s) => ({ ...s, message: data.message })));

    return () => console.log("--useEffect--componentWillUnmount--like--");
  }, []);

  useEffect(() => {
    console.log("--useEffect--componentDidUpdate--like--");
  });

  return (
    <section>
      <p>message: {state?.message}</p>
      <p>count: {state.count}</p>
      <button
        onClick={() =>
          setState((s: IState) => ({
            ...s,
            count: s.count + 1,
          }))
        }
        type="button"
      >
        click to increase
      </button>
    </section>
  );
};

export default LifeCycleComponent;
