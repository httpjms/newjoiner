import { useState } from "react";
import tasksList from "../data/tasks.json";
import TaskDetails from "./TaskDetails/TaskDetails";

const TasksList = ({ employee }) => {
  const [tasks, setTasks] = useState(tasksList);
  const [copyAD, setCopyAD] = useState("");

  function onCopyAD() {
    const copyToAD = `Fullname: ${employee.firstName} ${employee.lastName}\nEmail: ${employee.emailAdd}\nADID: ${employee.adid}\nJob Title: ${employee.jobTitle}\nDepartment: ${employee.department}\nManager: ${employee.manager}\nManager: ${employee.manager}\nAddress: ${employee.address}\nZip Code: ${employee.zipCode}\nCountry: ${employee.country}`;
    setCopyAD(copyToAD);
  }

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
          copyAD={copyAD}
        />
      ))}
    </div>
  );
};

export default TasksList;
