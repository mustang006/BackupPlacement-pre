import React, { useActionState } from "react";
import "./UseAction1.css";

function UseAction1() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    console.log("HandleSubmit called", name, password);
    if (name && password) {
      return { message: "Data Submitted",name,password };
    } else {
      return { error: " Failed to Submit Enter Your details",name,password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <div className="container">
      <div className="form-box">
        <h1 className="title">useActionState Hook</h1>
        <form action={action} className="form">
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            className="input"
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            className="input"
          />
          <button type="submit" disabled={pending} className="submit-button">
            {pending ? "Submitting..." : "Submit Data"}
          </button>
          <br />
        </form>
        {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
        {data?.message && (
          <span style={{ color: "blue" }}>{data?.message}</span>
        )}
        <h3>Name:{data?.name}</h3>
        <h3>password:{data?.password}</h3>
      </div>
    </div>
  );
}

export default UseAction1;
