import React, { Fragment } from "react";
import Timer from "./Timer";

const Timers = () => {
  return (
    <Fragment>
      <Timer timer="25:00" />
      <Timer timer="5:00" />
      <Timer timer="15:00" />
    </Fragment>
  );
};

export default Timers;