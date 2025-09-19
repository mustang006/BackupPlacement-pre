import React from "react";

function Nesting() {
  const categories = [
    { name: "Fruits", items: ["Apple", "Banana", "Mango"] },
    { name: "Vegetables", items: ["Carrot", "Spinach", "Broccoli"] },
    { name: "Dairy", items: ["Milk", "Cheese", "Yogurt"] },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Category List</h1>

      {categories.map((category, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Nesting;
