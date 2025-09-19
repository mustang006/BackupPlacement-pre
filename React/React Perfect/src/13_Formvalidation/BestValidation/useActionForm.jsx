import React from "react";
import { useActionState } from "react";

function UseActionForm() {
  const handleLogin = (prevData, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    const regex = /^[A-Z0-9]+$/i;

    if (name.length > 15) {
      return {
        error: "Name should not contain more than 15 characters",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: "Password can contain only numbers and alphabets",
        name,
        password,
      };
    } else {
      return { message: "Login Done" };
    }
  };

  const [data, action, pending] = useActionState(handleLogin);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Validation with Hook
        </h1>
        <form action={action} className="space-y-4">
          <input
            defaultValue={data?.name}
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            defaultValue={data?.password}
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            defaultValue={data?.age}
            type="number"
            name="age"
            placeholder="Enter age"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={pending}
          >
            {pending ? "Logging in..." : "Login"}
          </button>
        </form>
        {data?.error && (
          <p className="text-red-600 mt-4 text-center">{data.error}</p>
        )}
        {data?.message && (
          <p className="text-green-600 mt-4 text-center">{data.message}</p>
        )}
      </div>
    </div>
  );
}

export default UseActionForm;
