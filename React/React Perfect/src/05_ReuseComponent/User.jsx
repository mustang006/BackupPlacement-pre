import React from "react";

function User({ data }) {
  return (
    <div
      style={{
        border: "1px solid green",
        padding: "4px",
        margin: "5px",
        borderRadius: "5px",

        height: "100px",
        width: "400px",
      }}
    >
      <h3>
        Name:<span style={{ color: "green" }}> {data.name}</span>
      </h3>
      <h3>
        age:<span style={{ color: "green" }}> {data.age}</span>
      </h3>
      <h3>
        email:<span style={{ color: "green" }}> {data.email}</span>
      </h3>
      <h3>
        id:<span style={{ color: "green" }}> {data.id}</span>
      </h3>
    </div>
  );
}

export default User;
