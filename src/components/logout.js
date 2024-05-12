import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login'); 
  }

  return (
    <div class="new_button">
      <button onClick={logout}>Logout</button>
    </div>
    
  );
}

export default Logout;