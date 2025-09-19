import React, { useContext } from "react";
import { UserContext } from "./UserContext1";

function Dashboard3() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <h2 className="text-center text-red-600 text-xl mt-10">
        User not found.
      </h2>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Welcome, {user.name}!
      </h2>

      <div className="space-y-3 text-gray-700 text-lg">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`font-bold ${
              user.isLoggedIn ? "text-green-600" : "text-red-600"
            }`}
          >
            {user.isLoggedIn ? "Online" : "Offline"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Dashboard3;
