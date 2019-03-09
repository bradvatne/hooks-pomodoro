import React, { Fragment, useState } from "react";
import TodoInput from "../Components/TodoInput";
import TodoOutput from "../Components/TodoOutput";
import Timers from "./Timers";

const Todos = () => {

    //placeholder state, replace with database
    let initialState = ["Try out hooks", "Do another thing", "This is a test"];


    //establishing initial state hooks
    const [todos, setTodos] = useState(initialState);
    const [completed, setCompleted] = useState([])
    const [todoInput, setInput] = useState("");

    //handle textfield input update state
    const handleChange = e => {
      setInput(e.target.value);
    };
    
    //adds todo to list, resets text field
    const addTodo = e => {
      e.preventDefault();
      setTodos(todos.concat(todoInput));
      setInput("");
    };
    
    //removes todo from list
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    //complete todo not working
    // const completeTodo = index => {
    //   const newCompletedTodos = [...completed].concat((todos.slice(index, 1)));
    //   setCompleted(newCompletedTodos);
      
    //   }
    

  return (
    <Fragment>
    <Timers/>
      <TodoInput
        handleChange={handleChange}
        addTodo={addTodo}
        todoInput={todoInput}
      />
      <TodoOutput todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}/>
    </Fragment>
  );
};

export default Todos;
