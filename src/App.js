import React, { useState } from "react";
import NewTasks from "./Components/NewTasks/NewTasks";
import Tasks from "./Components/Tasks/Tasks";
const dummy_task = [
  {
    id: "e1",
    task: "Study React",
    duration: `${3}hr`,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    task: "Brush-up Css skills",
    duration: `${1}hr`,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    task: "Study Maths",
    duration: `${2}hr`,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e5",
    task: "Study Js-Interview",
    duration: `${1}hr`,
    date: new Date(2020, 7, 14),
  },
];
function App() {
  const [task, setTask] = useState(dummy_task);
  const newtaskAddHandler = (newTask) => {
    setTask((previousTask) => {
      return [newTask, ...previousTask];
    });
    console.log(`%c TaskArray`, "color:red; font-weight: bold");
    console.log(task);
  };
  return (
    <div>
      <NewTasks newTaskAdd={newtaskAddHandler} />
      <Tasks items={task} />.
    </div>
  );
}

export default App;
