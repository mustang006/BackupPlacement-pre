import React, { useState, useEffect } from 'react';

function MultipleEffectsComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`Name changed: ${name}`);
  }, [name]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default MultipleEffectsComponent;
