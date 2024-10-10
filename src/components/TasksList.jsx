import { useState } from "react";
import tasksList from "../data/tasks.json";
import TaskDetails from "./TaskDetails/TaskDetails";

const employee = [
  {
    adid: "jsantos1",
    firstName: "Jeamie",
    lastName: "Santos",
    emailAdd: "jems@wallem.com",
    jobTitle: "Service Desk Executive",
    department: "Wallem",
    manager: "Kim Carlo",
    country: "Philippines",
    city: "Pampanga",
    address: "Clarkfreeport Zone, 2003",
  },
];

const TasksList = () => {
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
      {tasks.map((task) =>
        employee.map((emp) => (
          <TaskDetails
            task={task}
            key={task.taskID}
            employee={employee}
            onComplete={handleCompleteTask}
            emp={emp}
          />
        ))
      )}
    </div>
  );
};

export default TasksList;
