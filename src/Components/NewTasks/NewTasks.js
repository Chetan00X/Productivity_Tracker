import "./NewTask.css";
import TaskForm from "./TaskForm";
const NewTasks = (props) => {
  const onSaveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    props.newTaskAdd(taskData);
  };
  return (
    <div className="new-expense">
      <TaskForm onSaveTaskData={onSaveTaskDataHandler} />
    </div>
  );
};
export default NewTasks;
