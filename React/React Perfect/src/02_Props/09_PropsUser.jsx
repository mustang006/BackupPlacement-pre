
import React from "react";


function User(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Student Info</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.details.age}</p>
      <p>Marks: {props.details.marks}</p>

      <ul>
        {props.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <button onClick={props.handleClick}>Greet</button>
    </div>
  );
}

export default User;
