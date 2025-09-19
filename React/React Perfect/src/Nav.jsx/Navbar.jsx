import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  const linkBase =
    'px-5 py-2 rounded-full font-semibold transition duration-300';

  return (
    <div className="bg-gray-800 py-4 shadow-md min-h-screen">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? 'bg-white text-red-600 border border-red-600 shadow-lg'
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/in/user/about"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? 'bg-white text-blue-600 border border-blue-600 shadow-lg'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/in/user/login"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? 'bg-white text-green-600 border border-green-600 shadow-lg'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/college"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? 'bg-white text-yellow-600 border border-yellow-600 shadow-lg'
                : 'bg-yellow-500 hover:bg-yellow-600 text-white'
            }`
          }
        >
          College
        </NavLink>

        <NavLink
          to="/user"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? 'bg-white text-orange-600 border border-orange-600 shadow-lg'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`
          }
        >
          Users
        </NavLink>

        <NavLink
          to="/user/list"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? 'bg-white text-pink-600 border border-pink-600 shadow-lg'
                : 'bg-pink-500 hover:bg-pink-600 text-white'
            }`
          }
        >
          List
        </NavLink>
      </div>

      {/* This is where the nested route components will render */}
      <div className="mt-8 px-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
