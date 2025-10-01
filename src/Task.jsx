function Task({ task }) {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-100 rounded border border-gray-300">
      <span>{task}</span>
      {/* TODO: Add delete button functionality here */}
      <button
        className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default Task;