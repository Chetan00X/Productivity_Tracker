import React, { useState } from "react";
import "./TaskForm.css";
const TaskForm = (props) => {
  const [enteredTask, setTask] = useState("");
  const [enteredDuration, setDuration] = useState("");
  const [enteredDate, setDate] = useState("");
  const taskChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const durationChangeHandler = (e) => {
    setDuration(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const taskDate = {
      task: enteredTask,
      duration: `${enteredDuration} hr `,
      date: new Date(enteredDate),
    };
    console.log(taskDate);
    props.onSaveTaskData(taskDate);
    setTask("");
    setDuration("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Task</label>
          <input type="text" onChange={taskChangeHandler} value={enteredTask} />
        </div>
        <div className="new-expense__control">
          <label>Duration</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredDuration}
            onChange={durationChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};
export default TaskForm;
