import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UserList() {
  const [userData1, setUserData1] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const url = "http://localhost:3000/users";

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
  const deleteUser = async (id) => {
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    response = await response.json();
    if (response) {
      alert("Record Deleted");
      getUserData1();
    }
    console.log(id);
  };
  const editUSer = (id) => {
    navigate("/edit"+"/"+id)
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
                <button
                  onClick={() => deleteUser(user.id)}
                  className="mt-3 inline-block bg-red-500 text-white text-sm px-4 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => editUSer(user.id)}
                  className="mt-3 inline-block bg-red-500 text-white text-sm px-4 py-1 rounded hover:bg-red-600 transition"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserList;
