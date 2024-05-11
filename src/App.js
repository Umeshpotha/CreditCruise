import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Signup from './components/Signup';
import Login from './components/login';
import HomePage from './components/Home';
import About from './components/about';
import LoanApplicationForm from './components/loan_form';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/loan_form" element={<LoanApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;