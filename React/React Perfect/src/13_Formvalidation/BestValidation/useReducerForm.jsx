import React from "react";
import { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};

function UseReducerForm() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-semibold mb-4">useReducer Form</h1>

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "name" })
        }
        type="text"
        placeholder="Enter name"
        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "password" })
        }
        type="text"
        placeholder="Enter password"
        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "email" })
        }
        type="text"
        placeholder="Enter email"
        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "city" })
        }
        type="text"
        placeholder="Enter city"
        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "address" })
        }
        type="text"
        placeholder="Enter address"
        className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="mt-6 text-left text-gray-700">
        <li><strong>Name:</strong> {state.name}</li>
        <li><strong>Password:</strong> {state.password}</li>
        <li><strong>Email:</strong> {state.email}</li>
        <li><strong>City:</strong> {state.city}</li>
        <li><strong>Address:</strong> {state.address}</li>
      </ul>
    </div>
  );
}

export default UseReducerForm;
