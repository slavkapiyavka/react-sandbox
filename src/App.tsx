import "./App.css";
import Basket from "./components/Basket";
import TodoList from "./components/TodoList";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <UserProfile />
      <TodoList />
      <Basket />
    </>
  );
}

export default App;
