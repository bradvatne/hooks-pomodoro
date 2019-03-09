import React from "react";
import Container from "./Container";
import Todos from "./Todos";
import Timers from "./Timers";
const user = 'Brad'
const mainTask = 'Main Task'

const App = () => {
  return (
    <div className="container">
      <Container title={user+ "'s Timers"} component={<Timers />} />
      <Container title={mainTask} component={<Todos />} />
    </div>
  );
};

export default App;
