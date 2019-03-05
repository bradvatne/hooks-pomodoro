import React, { useState } from "react";

export const Timer = ({ timer }) => {
  const [state, setState] = useState({ timer });

  const thisTimer = state.timer;

  const countDown = () => {
    let time = thisTimer.split(":");
    if (time[1] === "00") {
      time[1] = "59";
      time[0]--;
    } else time[1]--;
    time = time.join(":");
    setState({ timer: time });
  };

  const startCountDown = () => {
      for (let i=0; i<100; i++) {
    setInterval(countDown(thisTimer), 1000);
      }
  };


  return (
    <div className="container col">
      <h1 className="display-4">{thisTimer}</h1>
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-success col ml-4 mr-1"
          onClick={() => startCountDown()}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Timer;
