import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          This is a modern React application built with Tailwind CSS. Explore the site using the navigation links above and enjoy the smooth UI experience.
        </p>
      </div>
    </div>
  );
}
