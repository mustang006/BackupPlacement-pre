import { useState } from "react";
import React from "react";

function Sixth() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <h1>{Count}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={()=>setCount(Count+1)}
      >Click ME</button>

      {Count == 0 ? (
        <h1>Condition0</h1>
      ) : Count == 1 ? (
        <h1>Condition1</h1>
      ) : Count == 2 ? (
        <h1>Condition2</h1>
      ) : Count == 3 ? (
        <h1>Condition3</h1>
      ) : Count == 4 ? (
        <h1>Condition4</h1>
      ) : Count == 5 ? (
        <h1>Condition5</h1>
      ) : Count == 6 ? (
        <h1>Condition6</h1>
      ) : (
        <h1>Other condition</h1>
      )}
    </>
  );
}

export default Sixth;
