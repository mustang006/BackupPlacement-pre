import React from "react";

function Map() {
  const userName = ["anil", "peter", "bruce"];
  const userData = [
    {
      name: "Anil",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 1,
    },
    {
      name: "bhavay",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 2,
    },
    {
      name: "suresh",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 3,
    },
    {
      name: "joker",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 4,
    },
    {
      name: "ruchi",
      age: "65",
      email: "itsmeabhishke@gmail.com",
      id: 5,
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Loop in Jsx with map</h1>

      {/* First Table - Dynamic Data */}
      <table className="w-full table-auto border border-gray-300 shadow-md rounded-lg overflow-hidden mb-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Id</th>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Age</th>
            <th className="border px-4 py-2 text-left">Email</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.age}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Second Table - Static Data */}
      <table className="w-full table-auto border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Age</th>
            <th className="border px-4 py-2 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Anil</td>
            <td className="border px-4 py-2">65</td>
            <td className="border px-4 py-2">apatil@gmail.com</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Anil</td>
            <td className="border px-4 py-2">65</td>
            <td className="border px-4 py-2">apatil@gmail.com</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Anil</td>
            <td className="border px-4 py-2">65</td>
            <td className="border px-4 py-2">apatil@gmail.com</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Anil</td>
            <td className="border px-4 py-2">65</td>
            <td className="border px-4 py-2">apatil@gmail.com</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Anil</td>
            <td className="border px-4 py-2">65</td>
            <td className="border px-4 py-2">apatil@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Map;
