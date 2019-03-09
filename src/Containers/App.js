import React from "react";
import Container from "./Container";
import Todos from "./Todos";
import Timers from "./Timers";

//placeholder values, to be replaced by database
const user = 'Brad'
const mainTask = 'Main Task'

//app is the main parent container
const App = () => {
  return (
    <div className="container">
      <Container title={mainTask} component={<Todos />} />
    </div>
  );
};

export default App;
