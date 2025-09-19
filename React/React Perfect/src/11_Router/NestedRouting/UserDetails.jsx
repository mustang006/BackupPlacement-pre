import React from "react";
import { Link, useParams } from "react-router-dom"; // Fixed import for routing

function UserDetails() {
  const paramsData = useParams();
  console.log(paramsData.id);

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <h1>User Details</h1>
      <h2>User id is :{paramsData.id}</h2>
      <Link to="/user">Back</Link>
    </div>
  );
}

export default UserDetails;
