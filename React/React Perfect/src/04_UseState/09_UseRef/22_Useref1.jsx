import React, { useRef } from 'react';

function UseReff1() {
  const inputRef = useRef(null);

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus()
    inputRef.current.style.color="red"
    inputRef.current.placeholder="enter password"
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">UseRef hook</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter user name"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={inputHandler}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Focus on input field
      </button>
    </div>
  );
}

export default UseReff1;
