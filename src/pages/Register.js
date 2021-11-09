import React, { useState } from "react";
import { Redirect } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    // console.log({
    //   username,
    //   email,
    //   password,
    // });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        role: parseInt(role),
      }),
    };

    await fetch("http://localhost:9000/api/users", requestOptions);

    setRedirect(true);

    // const content = await response.json();
    // console.log(content);
  };

  if (redirect) {
    return <Redirect to="/login/" />;
  }

  return (
    <div>
      <main className="form-signin">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <input
            type="name"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="role"
            onChange={(e) => setRole(e.target.value)}
          />
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
