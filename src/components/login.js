import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";


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
        localStorage.setItem('user', JSON.stringify(data.user));
        console.log('User data in local storage:', localStorage.getItem('user'));
        navigate("/", { state: { id: email } });
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while trying to log in");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={submit} action="POST">
        <input
          className="login-input"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          className="login-input"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <input className="login-submit" type="submit" value="Login" />
      </form>
      <div className="or-divider">
        <span>OR</span>
      </div>
      <div className="signup-link">
        <Link to="/register">Signup Here</Link>
      </div>
    </div>
  );
}

export default Login;
