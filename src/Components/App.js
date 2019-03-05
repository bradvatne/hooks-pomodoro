import React, { useState} from "react";
import Container from "./Container";
import Todos from "./Todos";
import Timers from "./Timers";

const App = () => {
  let initialState = ["Try out hooks", "Do another thing", "This is a test"];

  const [todos, setTodos] = useState(initialState);
  const [todoInput, setInput] = useState("");


  const handleChange = e => {
    setInput(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos(todos.concat(todoInput));
    setInput("");
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  

  return (
    <div className="container">
      <Container
        title="Pomodoro Timer"
        component={<Timers/>}
      />
      <Container
        title="Todo List"
        component={
          <Todos
            handleChange={handleChange}
            addTodo={addTodo}
            todoInput={todoInput}
            todos={todos}
            removeTodo={removeTodo}
          />
        }
      />
    </div>
  );
};

export default App;
