import React, { useState } from "react";
import { FaUserAlt, FaLock, FaBirthdayCake } from "react-icons/fa";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({ name: "", password: "", age: "" });

  const validate = () => {
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const ageRegex = /^(1[0-1][0-9]|120|[1-9][0-9])$/;

    let isValid = true;
    const newErrors = { name: "", password: "", age: "" };

    if (!nameRegex.test(name)) {
      newErrors.name = "Name must have at least 3 letters only.";
      isValid = false;
    }

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters and include a number.";
      isValid = false;
    }

    if (!ageRegex.test(age)) {
      newErrors.age = "Age must be between 10 and 120.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful!");
      console.log({ name, password, age });
      setName("");
      setPassword("");
      setAge("");
      setErrors({ name: "", password: "", age: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          🚀 Welcome Back
        </h2>

        {/* Name */}
        <div className="mb-4 relative">
          <FaUserAlt className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Age */}
        <div className="mb-4 relative">
          <FaBirthdayCake className="absolute top-3 left-3 text-gray-400" />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
