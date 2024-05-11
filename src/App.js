import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        <Link to="/login">Click here to login</Link>
      </p>
    </div>
  );
}

function RegisterPage(){
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>
          Full Name:
          <input type="text" />
        </label>
        <label>
          Email Id:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );

}

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" componenent={RegisterPage} />
    </BrowserRouter>
  );
}

export default App;