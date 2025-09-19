import React, { useEffect, useState } from "react";
// 🔹 This component fetches users from a local JSON Server API.
// 🔹 To run the API, use:
//     npx json-server --watch debugger.json --port 3000
// 🔹 Ensure the JSON file contains a "users" array.

function MyApi() {
  const [userData1, setUserData1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData1();
  }, []);

  const getUserData1 = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUserData1(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          🧾 JSON Server User List
        </h1>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading data...</p>
        ) : userData1.length === 0 ? (
          <p className="text-center text-red-500 text-lg">No users found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {userData1.map((user) => (
              <div
                key={user.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {user.name}
                </h2>
                <p className="text-gray-600 text-sm">Email: {user.email}</p>
                <p className="text-gray-600 text-sm">Age: {user.age}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyApi;
