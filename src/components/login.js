import "./login.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Logged in successfully");
        navigate("/home", { state: { id: email } });
      } else {
        alert(data.error);
      }

      // handle the response data here
    } catch (error) {
      console.log(error);
      alert("An error occurred while trying to log in");
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={submit} action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/register">Signup Here</Link>
    </div>
  );
}

export default Login;
