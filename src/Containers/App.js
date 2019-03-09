import React, { useState } from "react";
import Container from "./Container";
import Todos from "./Todos";
import Guest from "../Components/Guest";


//app is the main parent container
const App = () => {

const [task, setTask] = useState()

const createTask = task => {
  setTask(task)
}
console.log(task)
  return (
    <div className="container">
      {task ? (
        <Container title={task} component={<Todos />} />
      ) : (
        <Container title="Enter Your Main Task" component={<Guest mainTask={createTask} />} />
      )}
    </div>
  );
};

export default App;
