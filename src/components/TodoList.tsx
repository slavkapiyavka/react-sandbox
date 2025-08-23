import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const addNewRandomTask = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    setTasks((t) => [...t, randomString]);
  };
  const deleteLastTask = () => setTasks((t) => t.slice(0, -1));

  return (
    <section className="card todo-list">
      <div className="buttons-group">
        <button onClick={addNewRandomTask} type="button">
          add new random task
        </button>
        {Boolean(tasks.length) && (
          <button onClick={deleteLastTask} type="button">
            delete last task
          </button>
        )}
      </div>
      {tasks.length ? (
        <ul>
          {tasks.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      ) : (
        <span>no tasks</span>
      )}
    </section>
  );
};

export default TodoList;
