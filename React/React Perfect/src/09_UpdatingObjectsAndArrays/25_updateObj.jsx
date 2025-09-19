import React, { useState } from "react";

function UpdObj() {
  const [data, setdata] = useState({
    name: "Abhishek",
    address: {
      city: "Indore",
      Country: "India",
    },
  });
  const handleName = (val) => {
      // setdata({name:val})
      data.name=val
      console.log(data);
      setdata({...data})
      
    
  };
  const handleCity = (city) => {
      // setdata({name:val})
      data.address.city=city
      console.log(data);
      setdata({...data,address:{...data.address,city}})
      
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Updating Objects
      </h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(event) => handleName(event.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-72 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Enter Your city"
        onChange={(event) => handleCity(event.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-72 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <h2 className="text-lg text-gray-700">
        Name: <span className="font-semibold text-blue-600">{data.name}</span>
      </h2>
      <h2 className="text-lg text-gray-700">
        City:{" "}
        <span className="font-semibold text-blue-600">{data.address.city}</span>
      </h2>
      <h2 className="text-lg text-gray-700">
        Coutry:{" "}
        <span className="font-semibold text-blue-600">
          {data.address.Country}
        </span>
      </h2>
    </div>
  );
}

export default UpdObj;
