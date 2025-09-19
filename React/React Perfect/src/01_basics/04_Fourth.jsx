import React from "react";
import { useState } from "react";

function Fourth() {
  const [Count, setCount] = useState(0);
  const handleCount = () => {
    setCount(Count + 1);
  };
  const handleCount2 = () => {
    setCount(Count - 1);
  };
  return (
    <>
      <h1>Count is :{Count}</h1>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={handleCount}
      >
        Increament
      </button>
      <br />
      <br />
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={handleCount2}
      >
        decrament
      </button>
    </>
  );
}

export default Fourth;
