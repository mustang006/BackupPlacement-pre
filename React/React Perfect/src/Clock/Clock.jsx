import { useState, useEffect } from "react";
import React from "react";
import User from "./User";

function Clock({ color }) {
  const [Time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, [1000]);
  }, []);

  return (
    <div>
      <h1>Time is </h1>
      <br />
      <h1 style={{ color: color, backgroundColor: "zinc-700" }}>{Time}</h1>
    </div>
  );
}

export default Clock;
