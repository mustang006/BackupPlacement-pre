import React, { useState } from "react";

function Form3() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    age: "",
  });

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
        "Password must be at least 8 characters and contain a number.";
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
      alert("Form submitted successfully!");
      console.log({ name, password, age });
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
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

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
        {errors.age && <p className="text-red-500 text-sm mb-4">{errors.age}</p>}

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

export default Form3;
