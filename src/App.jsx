import ToggleMessage from "./ToggleMessage";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Conditional Rendering Demo</h1>
      <ToggleMessage />
    </div>
  );
}

export default App;