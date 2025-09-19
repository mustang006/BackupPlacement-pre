import React from "react";
import { Link } from "react-router-dom"; // Fixed import for routing

function User() {
  const userData = [
    { id: 1, name: "Abhihske" },
    { id: 2, name: "Sahil" },
    { id: 3, name: "lokesh" },
    { id: 4, name: "Rajesh" },
    { id: 5, name: "sunhash" },
    { id: 6, name: "suresh" },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">User List Page</h1>
      {userData.map((item,index)=>(
        <h3 key={index}><Link to={`/user/${item.id}`}>{item.id} </Link></h3>

      ))}
       
      <h1 className="text-3xl font-bold text-blue-700 mb-6">User List Name Page</h1>
      {userData.map((item,index)=>(
        <h3 key={index}><Link to={`/user/${item.id}/${item.name}`}>{item.id}. {item.name} </Link></h3>

      ))}
       

    </div>
  );
}

export default User;
