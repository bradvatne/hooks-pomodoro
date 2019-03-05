import React, { Fragment, useState } from "react";
import TodoInput from "./TodoInput";
import TodoOutput from "./TodoOutput";

const Todos = () => {

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
    <Fragment>
      <TodoInput
        handleChange={handleChange}
        addTodo={addTodo}
        todoInput={todoInput}
      />
      <TodoOutput todos={todos} removeTodo={removeTodo} />
    </Fragment>
  );
};

export default Todos;
