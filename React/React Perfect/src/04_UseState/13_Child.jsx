import React, { useState, useEffect } from "react";

function Child({ defaultName }) {
  const [name, setName] = useState(defaultName);

  // Update state when defaultName changes
  useEffect(() => {
    setName(defaultName);
  }, [defaultName]);

  return (
    <div>
      <h2>Name from props: {defaultName}</h2>
      <h3>Controlled state: {name}</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Edit name"
      />
    </div>
  );
}

export default Child;
