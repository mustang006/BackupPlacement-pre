import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserEdit from './UserEdit';

function ApiRoutes() {
  return (
    <>
      <div className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white px-4 py-2 rounded hover:bg-gray-700 ${
                  isActive ? "bg-gray-900" : ""
                }`
              }
            >
              List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `text-white px-4 py-2 rounded hover:bg-gray-700 ${
                  isActive ? "bg-gray-900" : ""
                }`
              }
            >
              Add User
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserAdd />} />
          <Route path="/edit/:id" element={<UserEdit />} />
        </Routes>
      </div>
    </>
  );
}

export default ApiRoutes;
