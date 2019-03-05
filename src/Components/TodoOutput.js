import React from "react";

const TodoOutput = ({ todos, removeTodo }) => {
  return (
    <ul className="list-group col mx-auto p-3">
      {todos.map((todo, index) => (
        <li className="list-group-item" key={index} index={index}>
          {todo}
          <button
            className="btn btn-outline-danger float-right"
            onClick={() => removeTodo(index)}
          >
            <i className="fas fa-ban" />
          </button>
          <button className="btn btn-outline-success float-right mr-2">
            <i className="fas fa-check" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoOutput;
