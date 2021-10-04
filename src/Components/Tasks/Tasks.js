import React, { useState } from "react";
import Card from "../UI/Card";
import TaskFilter from "./TaskFilter";
import TaskItems from "./TaskItems";
import "./Tasks.css";
const Tasks = (props) => {
  const [filteredyear, setFilteredYear] = useState("Jan");

  const filterChangeHandler = (filteredyear) => {
    setFilteredYear(filteredyear);
  };
  return (
    <Card className="expenses">
      <TaskFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
      {props.tasks.map((item) => (
        <TaskItems task={item.task} duration={item.duration} date={item.date} />
      ))}
    </Card>
  );
};
export default Tasks;
