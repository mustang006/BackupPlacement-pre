import React, { useState } from "react";
import Child from "./13_Child";

function Parent() {
  const [userName, setUserName] = useState("Abhishek");

  return (
    <div>
      <button onClick={() => setUserName("Jayesh")}>Change Name to Jayesh</button>
      <Child defaultName={userName} />
    </div>
  );
}

export default Parent