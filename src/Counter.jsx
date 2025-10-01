import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-green-100 border border-green-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">
        Count: {count}
      </h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;