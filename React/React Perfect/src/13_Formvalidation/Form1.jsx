import React, { useState } from "react";

function Form1() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);

    // Simple validation: name must be at least 3 characters
    if (value.length < 3) {
      setNameErr("Username must be at least 3 characters");
    } else {
      setNameErr(""); // clear error
    }
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password || !age) {
      alert("Please fill in all fields");
      return;
    }

    if (nameErr) {
      alert("Please fix the errors before submitting");
      return;
    }

    // Submit logic here
    console.log("Submitted:", { name, password, age });
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Login Form
        </h2>

        <input
          value={name}
          onChange={handleName}
          type="text"
          placeholder="Enter name"
          className="w-full mb-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {nameErr && (
          <p className="text-red-500 text-sm mb-3">{nameErr}</p>
        )}

        <input
          value={password}
          onChange={handlePassword}
          type="password"
          placeholder="Enter password"
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={age}
          onChange={handleAge}
          type="number"
          placeholder="Enter age"
          className="w-full mb-6 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Form1;
