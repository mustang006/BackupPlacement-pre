import React from 'react';

function Prps113({ displayName, name, getUser }) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-fit mx-auto mt-10">
      <button
        onClick={() => displayName(name)}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Display Name
      </button>

      <button
        onClick={() => getUser()}
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Get User
      </button>
    </div>
  );
}

export default Prps113;
