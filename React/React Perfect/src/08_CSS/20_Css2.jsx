import React, { useState } from "react";

function DynamicStyleExample() {
  const [isActive, setIsActive] = useState(false);

  const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: isActive ? "green" : "gray",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "10px",
  };

  return (
    <div>
      <div style={boxStyle} onClick={() => setIsActive(!isActive)}>
        {isActive ? "Active" : "Inactive"}
      </div>
    </div>
  );
}
export default DynamicStyleExample
