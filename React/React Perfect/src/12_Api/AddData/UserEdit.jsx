import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3000/users/" + id;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setname(data.name);
      setage(data.age);
      setemail(data.email);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  const updateUserData = async () => {
    try {
      let response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
      });

      response = await response.json();

      if (response) {
        alert("User Data Updated");
        navigate("/");
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update user data.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
        ✏️ Edit User Details
      </h1>

      <input
        value={name}
        onChange={(event) => setname(event.target.value)}
        type="text"
        placeholder="Enter name"
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={age}
        onChange={(event) => setage(event.target.value)}
        type="text"
        placeholder="Enter age"
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={email}
        onChange={(event) => setemail(event.target.value)}
        type="text"
        placeholder="Enter email"
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={updateUserData}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
}

export default UserEdit;
