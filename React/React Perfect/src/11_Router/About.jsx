import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-8">
          Welcome to our React App! We are passionate about building high-quality,
          responsive, and user-friendly web applications to solve real-world problems.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Mission
            </h3>
            <p className="text-gray-600">
              To empower users with modern, fast, and accessible web solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              💡 Vision
            </h3>
            <p className="text-gray-600">
              To lead innovation in web development and create impactful digital products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🧠 Technologies
            </h3>
            <p className="text-gray-600">
              React, Tailwind CSS, Node.js, MongoDB, Firebase, and more.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📍 Location
            </h3>
            <p className="text-gray-600">Based in India, serving globally.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
