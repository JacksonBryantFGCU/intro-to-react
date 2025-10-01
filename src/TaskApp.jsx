import { useState } from "react";
import TaskList from "./TaskList";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">📝 Task Tracker</h2>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskApp;