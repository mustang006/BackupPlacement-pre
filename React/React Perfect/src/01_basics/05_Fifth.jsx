import React, { useState } from "react";
import Second from "./Second";

function Fifth() {
  const [display, setdisplay] = useState(true);

  return (
    <>
      <h1>Toggle in React js</h1>
      {/* {display ? <h2>Anil Sidhu</h2> : null}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={() => setdisplay(!display)}
      >
        Change
      </button> */}
      {display ? <Second /> : null}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
        onClick={() => setdisplay(!display)}
      >
        Hide
      </button>
    </>
  );
}

export default Fifth;
