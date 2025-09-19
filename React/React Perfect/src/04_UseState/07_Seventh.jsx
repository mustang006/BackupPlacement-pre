import React, { useState } from "react";

function Seventh() {
  const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, password, email });
  };

  const handleClearForm = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Get Input Field
      </h1>

      {/* Live Input */}
      <input
        type="text"
        placeholder="Enter user name"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="mb-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <h2 className="text-lg text-gray-700 mb-4">
        Entered Value: <span className="font-medium">{val}</span>
      </h2>

      <button
        onClick={() => setVal("")}
        className="mb-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
      >
        Clear
      </button>

      <hr className="my-4" />

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleClearForm}
          className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
        >
          Clear Form
        </button>
      </form>

      {/* Display Output Below */}
      <div className="mt-6 space-y-2 text-sm text-gray-700">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Password:</strong> {password}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
}

export default Seventh;
