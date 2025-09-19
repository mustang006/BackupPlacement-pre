import React, { useState, useEffect } from "react";


function Useeffectex() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []); // Runs once on mount

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}

export default Useeffectex;
