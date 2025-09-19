import React from "react";

function Todo() {
  function calling() {
    alert("function is called");
  }
  return (
    <>
      <img
        src="https://th.bing.com/th/id/OIP.uoa-pARZtksq6F7eMJn4MAHaHa?w=128&h=104&c=7&bgcl=676f89&r=0&o=6&dpr=1.3&pid=13.1"
        alt=""
      />

      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>

      

      <button onClick={calling}>submit</button>
    </>
  );
}

export default Todo;
