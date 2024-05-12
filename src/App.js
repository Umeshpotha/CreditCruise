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
import Logout from '../src/components/logout'
import { UserContext } from '../src/components/usercontext';
import Privacy from '../src/components/privacy';
import Terms from '../src/components/terms';
import Loans from '../src/components/loans'
import ApplyLoan from '../src/components/apply-loan';

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
        <Route path="/logout" element={<Logout />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
