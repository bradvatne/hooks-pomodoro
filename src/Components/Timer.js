import React, { useState } from "react";
import { useInterval } from "../util.js";

const Timer = ({ timer }) => {
  const [time, setTime] = useState(timer);
  const [isRunning, setRunning] = useState(false);
  const [stop, setStop] = useState(false)

  const countDown = () => {

    let newTime = time.split(":")
    let minutes = newTime[0];
    let seconds = newTime[1];
    
    if (seconds == 0) { 
      seconds = 59;
      minutes--;
      newTime = minutes + ':' + seconds;
    } else if (seconds < 11) {
      seconds--
      newTime = minutes + ':0' + seconds;
    }
    else {
      seconds--
      newTime = minutes + ':' + seconds;
    }
    if (seconds == 0 && minutes == 0) {
      setRunning(false)
    }
    setTime(newTime);

  }

  useInterval(countDown, isRunning ? 1000 : null);
  let splitTime = time;
  let [minutes, seconds] = splitTime.split(':')
  if (minutes == 0 && seconds == 0 ) setStop(true)


  return (
    <div className="container col">
      <h1 className="display-4">{time}</h1>
      <div className="row">
        <button
          type="button"
          className={stop ? 'btn btn-outline-danger col ml-4 mr-1' : isRunning ? "btn btn-outline-warning col ml-4 mr-1" : "btn btn-outline-success col ml-4 mr-1"}
          onClick={() => setRunning(!isRunning)}
        >
          {stop ? 'Restart' : isRunning ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Timer;
