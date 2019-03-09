import React, { Fragment, useState } from "react";
import TodoInput from "../Components/TodoInput";
import TodoOutput from "../Components/TodoOutput";
import Timers from "./Timers";

const Todos = () => {
  //placeholder state, replace with database
  let initialTodos = ["Try out hooks", "Do another thing", "This is a test"];
  let initialCompleted = [];

  //establishing initial state hooks
  const [todoState, setTodoState] = useState({
    todos: initialTodos,
    completed: initialCompleted,
    todoInput: ""
  });

  //destructure todo state
  const { todos, completed, todoInput } = todoState;

  //handle textfield input update state
  const handleChange = e => {
    setTodoState({ ...todoState, todoInput: e.target.value });
  };

  //adds todo to todoState.todos, sets input (todoState.input) to blank
  const addTodo = e => {
    e.preventDefault();
    setTodoState({
      ...todoState,
      todos: todos.concat(todoInput),
      todoInput: ""
    });
  };

  //removes indexed todo from todoState.todos
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodoState({ ...todoState, todos: newTodos });
  };

  //adds todo to todoState.completed
  const completeTodo = index => {
    const newTodos = [...todos];
    const newCompleted = todos[index];
    newTodos.splice(index, 1);
    setTodoState({
      ...todoState,
      todos: newTodos,
      completed: newCompleted.concat(completed)
    });
  };

  return (
    <Fragment>
      <Timers />
      <TodoInput
        handleChange={handleChange}
        addTodo={addTodo}
        todoInput={todoInput}
      />
      <TodoOutput
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </Fragment>
  );
};

export default Todos;
