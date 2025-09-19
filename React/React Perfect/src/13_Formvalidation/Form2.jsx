import React, { useState } from "react";

function Form2() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    age: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", password: "", age: "" };

    if (!name || name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    const ageNum = Number(age);
    if (!age || isNaN(ageNum) || ageNum < 10 || ageNum > 120) {
      newErrors.age = "Enter a valid age between 10 and 120.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", { name, password, age });
      alert("Form submitted successfully!");
      // Reset form (optional)
      setName("");
      setPassword("");
      setAge("");
      setErrors({ name: "", password: "", age: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Login Form
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
          className="w-full mb-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        )}

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          className="w-full mb-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password}</p>
        )}

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Enter age"
          className="w-full mb-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.age && (
          <p className="text-red-500 text-sm mb-4">{errors.age}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Form2;
