import React, { useState, useEffect } from "react";

export default function Api_1() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response.users);
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Fetch Data from API
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {userData.map((user, index) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-600">Age: {user.age}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
