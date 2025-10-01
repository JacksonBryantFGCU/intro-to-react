import { useState } from "react";

function ToggleMessage() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="p-6 bg-yellow-100 border border-yellow-300 rounded-lg shadow-md w-96 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-800">
        Conditional Rendering
      </h2>
      
      <button
        onClick={() => setVisible(!visible)}
        className="px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
      >
        {visible ? "Hide Message" : "Show Message"}
      </button>

      {visible && (
        <p className="mt-4 text-lg text-yellow-700">
          🎉 Now you see me!
        </p>
      )}
    </div>
  );
}

export default ToggleMessage;