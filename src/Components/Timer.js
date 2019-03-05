import React, { useState } from "react";
import { useInterval } from "../util.js";

const Timer = ({ timer }) => {
  const [time, setTime] = useState(timer);
  const [isRunning, setRunning] = useState(false);

  const countDown = () => {
    let newTime = time.split(":");
    if (newTime[1] === "00") {
      newTime[1] = "59";
      newTime[0]--;
    } else newTime[1]--;
    newTime = newTime.join(":");
    setTime(newTime);
  };

  useInterval(countDown, isRunning ? 1000 : null);

  return (
    <div className="container col">
      <h1 className="display-4">{time}</h1>
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-success col ml-4 mr-1"
          onClick={() => setRunning(!isRunning)}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Timer;
