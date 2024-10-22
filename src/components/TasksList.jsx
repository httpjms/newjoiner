import { useState } from "react";
import tasksList from "../data/tasks.json";
import TaskDetails from "./TaskDetails/TaskDetails";

const TasksList = ({ employee }) => {
  const [tasks, setTasks] = useState(tasksList);

  function handleCompleteTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.taskID === id ? { ...task, isComplete: true } : task
      )
    );
  }
  return (
    <div className="tasklists-container">
      <h2>To-do List</h2>
      {tasks.map((task) => (
        <TaskDetails
          task={task}
          key={task.taskID}
          employee={employee}
          onComplete={handleCompleteTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
