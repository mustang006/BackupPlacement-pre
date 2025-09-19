import React, { useEffect, useRef, useState } from "react";

function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  const prevCount = prevCountRef.current; // get previous before updating

  useEffect(() => {
    prevCountRef.current = count; // update after render
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Current: {count}</h2>
      <h2 className="text-lg text-gray-600 mb-4">Previous: {prevCount}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Increase
      </button>
    </div>
  );
}

export default PreviousValueExample;
