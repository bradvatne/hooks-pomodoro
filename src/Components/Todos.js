import React, { Fragment } from "react";
import TodoInput from "./TodoInput";
import TodoOutput from "./TodoOutput";

const Todos = ({ handleChange, addTodo, todoInput, todos, removeTodo }) => {
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
