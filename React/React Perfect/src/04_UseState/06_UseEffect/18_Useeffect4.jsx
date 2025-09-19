import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("⏱️ Timer started");

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function (componentWillUnmount)
    return () => {
      console.log("🧹 Timer cleared");
      clearInterval(intervalId); // prevent memory leaks
    };
  }, []); // runs only once (like componentDidMount)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Timer: {seconds}s</h1>
    </div>
  );
}

export default TimerComponent;
