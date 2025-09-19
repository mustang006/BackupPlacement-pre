import React from "react";
import Clock from "./Clock";
import { useState } from "react";

function User() {
    const [color, setcolor] = useState("green")
  return (
    <div>
      <select onChange={(event)=>setcolor(event.target.value)}>
        <option value="red">Red</option>

        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>
      <Clock color={color}/>
    </div>
  );
}

export default User;
