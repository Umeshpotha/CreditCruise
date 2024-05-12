import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Signup from "./components/Signup";
import Login from "./components/login";
import HomePage from "./components/Home";
import About from "./components/about";
import LoanApplicationForm from "./components/loan_form";
import ProfileScreen from '../src/components/Profile';
import { UserContext, UserProvider } from '../src/components/usercontext'; // Change this line

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/loan_form" element={<LoanApplicationForm />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
