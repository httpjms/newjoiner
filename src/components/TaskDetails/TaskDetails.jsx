import { useState } from "react";
import "./TaskDetails.css";
import ActiveDirectory from "../../App/ActiveDirectory";
import Zendesk from "../../App/Zendesk";
import SDP from "../../App/SDP";
import Coruson from "../../App/Coruson";
import K2 from "../../App/K2";
import SwireConnect from "../../App/SwireConnect";
import LocalIT from "../../App/LocalIT";

const TaskDetails = ({ task, employee, onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={
        task.isComplete ? "task-container completed" : "task-container"
      }
    >
      <div className="employee-task-details">
        <div className="task-details">
          <h3>
            {task.taskName} {task.isComplete ? "- Completed" : ""}{" "}
          </h3>
        </div>

        <div className="task-name-details" onClick={() => setIsOpen(!isOpen)}>
          <h3>
            <strong>{isOpen ? "-" : "+"}</strong>
          </h3>
        </div>
      </div>

      <div className="task-description">
        <p>{isOpen && task.taskDescription}</p>
      </div>

      <div className="task-per-list">
        {isOpen && task.taskName === "Active Directory" && (
          <ActiveDirectory employee={employee} />
        )}
        {isOpen && task.taskName === "Zendesk" && (
          <Zendesk employee={employee} />
        )}
        {isOpen && task.taskName === "SDP" && <SDP employee={employee} />}
        {isOpen && task.taskName === "Local IT" && (
          <LocalIT employee={employee} />
        )}
        {isOpen && task.taskName === "Coruson" && (
          <Coruson employee={employee} />
        )}
        {isOpen && task.taskName === "K2" && <K2 employee={employee} />}
        {isOpen && task.taskName === "SwireConnect" && (
          <SwireConnect employee={employee} />
        )}
      </div>

      <div className="button-section">
        {isOpen && (
          <button
            className={task.isComplete ? "btnCompleted" : "btnComplete"}
            onClick={() => onComplete(task.taskID)}
            disabled={task.isComplete ? true : false}
          >
            {task.isComplete ? "COMPLETED" : "COMPLETE"}
          </button>
        )}
      </div>
    </div>
  );
};
export default TaskDetails;
