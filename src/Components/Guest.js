import React, { useState } from "react";

export default ({mainTask}) => {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    mainTask(input)
  }

  return (
    <form className="container m-0 p-3" onSubmit={()=>mainTask(input)}>
      <input
        className="form-control "
        type="text"
        value={input}
        onChange={e => handleChange(e)}
        placeholder="Input a task and press enter..."
      />
      <div className="row">
        <div class="form-group col">
          <select class="custom-select">
            <option selected value="25">
              Select Work Sprint
            </option>
            <option value="20">20:00</option>
            <option value="25">25:00</option>
            <option value="30">30:00</option>
          </select>
        </div>
        <div class="form-group col">
          <select class="custom-select">
            <option selected value="5">
              Select Short Break
            </option>
            <option value="3">3:00</option>
            <option value="4">4:00</option>
            <option value="5">5:00</option>
          </select>
        </div>
        <div class="form-group col">
          <select class="custom-select">
            <option selected value="25">
              Select Long Break
            </option>
            <option value="15">15:00</option>
            <option value="25">25:00</option>
            <option value="35">35:00</option>
          </select>
        </div>
      </div>
      <div className="container">
            <button className="btn btn-primary" onSubmit={e=> e.preventDefault()}>Submit</button>
        </div>
    </form>
  );
};
