import React from "react";
import Prps113 from "./24_Props2";

function Props112() {
  const displayName = (name) => {
    alert(name);
  };
  const getUser = () => {
    alert("User is called");
  };
  return (
    <div>
      <Prps113 displayName={displayName} name="anil" getUser={getUser} />
      <Prps113 displayName={displayName} name="sara" getUser={getUser} />
      <Prps113 displayName={displayName} name="peter" getUser={getUser} />
      <Prps113 displayName={displayName} name="aniaunjl" getUser={getUser} />
    </div>
  );
}

export default Props112;
