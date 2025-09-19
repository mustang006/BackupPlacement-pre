import React from 'react'
function InlineStyleExample() {
  const headingStyle = {
    color: "blue",
    fontSize: "24px",
    fontWeight: "bold",
  };

  return <h1 style={headingStyle}>This is a styled heading</h1>;
}
export default InlineStyleExample