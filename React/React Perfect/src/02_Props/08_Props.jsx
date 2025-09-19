
import React from "react";
import User from "../02_Props/09_PropsUser";

function Props() {
  const name = "Abhishek";
  const details = { age: 21, marks: 95 };
  const subjects = ["Math", "Science", "English"];

  const greet = () => {
    alert("Hello Abhishek!");
  };

  return (
    <div>
      <h1>Passing Props in React</h1>

      {/* Passing data to child */}
      <User
        name={name}
        details={details}
        subjects={subjects}
        handleClick={greet}
      />
    </div>
  );
}

export default Props;
