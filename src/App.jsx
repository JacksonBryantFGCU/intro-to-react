import TodoList from "./TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Lists & Rendering</h1>
      <TodoList />
    </div>
  );
}

export default App;