import React from "react";

function Third() {
  const name = "Anil sidhu";
  const userObj = {
    name: "Abhishek",
    email: "abhiiojs@gmail.com",
  };
  const fruits = ["Apple", "Banana", "Mango"];

  function fruit() {
    return "Apple";
  }

  function sum(a, b) {
    return a + b;
  }
  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else if (op == "*") {
      return a * b;
    }
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600">
        {name ? name : "Name Not Found"}
      </h1>

      <h3 className="text-xl text-gray-700 mt-2">{name}</h3>

      <div className="mt-4">{fruit()}</div>

      <br />

      <h2 className="text-2xl font-semibold text-green-500">
        {operation(3, 6, "+")}
      </h2>

      <h1 className="text-2xl font-semibold text-green-500 bg-zinc-500">
        {userObj.name} <br /> {userObj.email}
      </h1>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default Third;
