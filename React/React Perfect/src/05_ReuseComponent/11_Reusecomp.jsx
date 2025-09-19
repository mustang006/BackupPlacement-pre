import React from "react";

import User from "./User";

function ReuseComp() {
  const userData = [
    {
      name: "Anil",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 1,
    },
    {
      name: "bhavay",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 2,
    },
    {
      name: "suresh",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 3,
    },
    {
      name: "joker",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 4,
    },
    {
      name: "ruchi",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 5,
    },
  ];
  return (
    <>
      <h1> reusing component</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <User data={user} />
        </div>
      ))}
    </>
  );
}

export default ReuseComp;
