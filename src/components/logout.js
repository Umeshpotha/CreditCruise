import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user'); // Remove user data from local storage
    navigate('/login'); // Redirect to login page
  }

  return (
    <button onClick={logout}>Logout</button>
  );
}

export default Logout;