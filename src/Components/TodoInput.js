import React from "react";

const TodoInput = ({ handleChange, addTodo, todoInput }) => {
  return (
    <form className="container m-0 p-3" onSubmit={e => addTodo(e)}>
      <input
        className="form-control "
        type="text"
        value={todoInput}
        onChange={e => handleChange(e)}
        placeholder="Input a task and press enter..."
      />
    </form>
  );
};

export default TodoInput;
