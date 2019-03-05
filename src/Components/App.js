import React from "react";
import Container from "./Container";
import Todos from "./Todos";
import Timers from "./Timers";

const App = () => {
  return (
    <div className="container">
      <Container title="Pomodoro Timer" component={<Timers />} />
      <Container title="Todo List" component={<Todos />} />
    </div>
  );
};

export default App;
