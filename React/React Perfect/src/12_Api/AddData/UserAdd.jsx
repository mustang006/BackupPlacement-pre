import React, { useState } from "react";

function UserAdd() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");

  const createUser = async () => {
    console.log(name, age, email);

    const url = "http://localhost:3000/users";

    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
      });

      let data = await response.json();

      if (response.ok) {
        alert("New User Added");
        console.log(data);
      } else {
        alert("Failed to add user");
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Add New User
      </h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setname(event.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Enter age"
        value={age}
        onChange={(event) => setage(event.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setemail(event.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={createUser}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add User
      </button>
    </div>
  );
}

export default UserAdd;
