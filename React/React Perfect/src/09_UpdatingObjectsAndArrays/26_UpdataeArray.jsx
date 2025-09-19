import React, { useState } from "react";

function UpdateArr() {
  const [data, setData] = useState(["abhi", "bittu", "vishal"]);

  const handleName = (val) => {
    data[data.length - 1] = val; // update last element
    setData([...data]); // trigger re-render
    console.log(data);
  };
  const handleAge = (val) => {
   dataDetails[dataDetails.length-1].age=val
   setdataDetails([...dataDetails])
   console.log(dataDetails)
  };
  const [dataDetails, setdataDetails] = useState([
    { name: "Abhishek", age: "22" },
    { name: "Sam", age: "22" },
    { name: "Vinod", age: "22" },
    { name: "Bhawar", age: "22" },
  ]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Updating Arrays
        </h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(event) => handleName(event.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-72 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="space-y-2">
          {data.map((item, index) => (
            <h2
              key={index}
              className="text-lg font-medium text-gray-700 bg-white shadow-sm px-4 py-2 rounded-md w-72 text-center"
            >
              {index + 1}. {item}
            </h2>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <input
          type="text"
          placeholder="Enter last use Age"
          onChange={(event) => handleAge(event.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-72 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {dataDetails.map((item,index)=>(
            <h3 key={index}>{item.name},{item.age}</h3>
        ))}
      </div>
    </>
  );
}

export default UpdateArr;
