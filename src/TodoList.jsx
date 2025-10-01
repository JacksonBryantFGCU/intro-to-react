function TodoList() {
  const todos = [
    "Finish React presentation",
    "Push code to GitHub",
    "Review state & props",
    "Practice live demo",
  ];

  return (
    <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Todo List</h2>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;