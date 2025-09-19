import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router";

function College() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl text-center">
        <Link className="text-3xl font-bold text-blue-700 mb-6" to="/">
          Go to main
        </Link>
        <br />
        <br />
        <h1 className="text-3xl font-bold text-blue-700 mb-6">College Page</h1>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <NavLink
            to=""
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition duration-300"
          >
            Student
          </NavLink>
          <NavLink
            to="department"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow transition duration-300"
          >
            Department
          </NavLink>
          <NavLink
            to="details"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition duration-300"
          >
            College Details
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default College;
