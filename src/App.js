import { useState } from "react";
import NewJoiner from "./components/NewJoinerForm/NewJoiner";
import TasksList from "./components/TasksList";

function App() {
  const [employees, setEmployees] = useState([]);
  function handleGenerate(employee) {
    setEmployees((prevEmployee) => [...prevEmployee, employee]);
  }

  return (
    <div className="maincontent">
      <div className="newjoiner-body">
        {employees.length < 1 && <NewJoiner onGenerate={handleGenerate} />}
        {/* <TasksList /> */}

        <div className="app-employee-table">
          {employees.length < 1 ? (
            <h2>Fill out the employee Form to Generate Task</h2>
          ) : (
            employees.map((employee) => (
              <TasksList key={employee.adid} employee={employee} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
