import { useState } from "react";
import "./TaskDetails.css";
import ActiveDirectory from "../../App/ActiveDirectory";

const TaskDetails = ({ task, emp, onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={
        task.isComplete ? "task-container completed" : "task-container"
      }
    >
      <div className="employee-task-details">
        <div className="task-details">
          <h3>{task.taskName}</h3>
        </div>

        <div className="task-name-details" onClick={() => setIsOpen(!isOpen)}>
          <strong>{isOpen ? "-" : "+"}</strong>
        </div>
      </div>

      <div className="task-description">{isOpen && task.taskDescription}</div>

      {isOpen && task.taskName === "Active Directory" && (
        <ActiveDirectory employee={emp} task={task} />
      )}

      <div className="button-section">
        {isOpen && (
          <button
            onClick={() => onComplete(task.taskID)}
            disabled={task.isComplete ? true : false}
          >
            {task.isComplete ? "Completed" : "Complete"}
          </button>
        )}
      </div>
    </div>
  );
};
export default TaskDetails;
