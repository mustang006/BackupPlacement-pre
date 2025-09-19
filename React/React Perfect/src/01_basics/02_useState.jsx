import React, { useState } from "react";

function useState() {
  const [fruit, setfruit] = useState("Apple");

  const handleFruit = () => {
    setfruit("banana");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">{fruit}</h1>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={handleFruit}
      >
        Click ME
      </button>
      <h1 className="text-xl mt-4 text-gray-700">{fruit}</h1>

      {/* External Counter component */}
    </div>
  );
}

export default useState;
