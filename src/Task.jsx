function Task({ task, onDelete }) {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-100 rounded border border-gray-300">
      <span>{task}</span>
      <button
        onClick={onDelete}
        className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default Task;