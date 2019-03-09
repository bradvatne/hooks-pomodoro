import React, { Fragment } from "react";
import Timer from "../Components/Timer";

const timerOne="25:00"
const timerTwo="5:00"
const timerThree="15:00"

const Timers = () => {
  return (
    <Fragment>
      <Timer timer={timerOne} />
      <Timer timer={timerTwo} />
      <Timer timer={timerThree} />
    </Fragment>
  );
};

export default Timers;