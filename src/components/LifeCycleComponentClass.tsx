import { Component } from "react";
import { CONSTANTS } from "../utils/constants";

interface IState {
  count: number;
  message?: string;
}

class LifeCycleComponentClass extends Component {
  state: IState = {
    count: 0,
  };

  constructor(props: object) {
    super(props);
  }

  componentDidMount() {
    fetch(CONSTANTS.URL)
      .then((r) => r.json())
      .then((data) => this.setState(data));
  }

  componentDidUpdate() {
    if (this.state && this.state.count)
      console.log("--componentDidUpdate-- with count: ", this.state.count);
  }

  componentWillUnmount() {
    if (this.state && this.state.message)
      console.log(
        "--componentWillUnmount-- with message: ",
        this.state.message
      );
  }

  shouldComponentUpdate() {
    return this.state.count % 2 !== 0;
  }

  render() {
    return (
      <section>
        <p>message: {this.state?.message}</p>
        <p>count: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState((s: IState) => ({
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
  }
}

export default LifeCycleComponentClass;
