import React, { useState } from "react";
import { UserContext } from "./UserContext1";
import Dashboard3 from "./Dashboard3";

function FirstFile() {
  const [user, setUser] = useState({
    name: "Jayesh Sharma",
    email: "jayesh@example.com",
    isLoggedIn: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>React Context Demo</h1>
      <Dashboard3/>
    </UserContext.Provider>
  );
}

export default FirstFile;
