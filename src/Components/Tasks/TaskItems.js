import React, { useState } from "react";

import Card from "../UI/Card";
import TaskDate from "./TaskDate";
import "./TaskItems.css";
const TaskItems = (props) => {
  const [task, setTask] = useState(props.task);
  const clickHandler = () => {
    setTask("Task-Updated");
  };

  return (
    <Card className="expense-item">
      <TaskDate date={props.date} />
      <div className="expense-item__description">
        <h2>{task}</h2>
        <div className="expense-item__price">{props.duration}</div>
        <button onClick={clickHandler}>Change Task</button>
      </div>
    </Card>
  );
};
export default TaskItems;
