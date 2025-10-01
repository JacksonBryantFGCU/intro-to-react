import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 italic">No tasks yet! Add one above 👆</p>;
  }

  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default TaskList;