import React, { useEffect, useState } from 'react';
import './profile.css'; 

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="profile-container">
      <div><h1>Profile</h1></div>
      {user ? (
        <div className="profile-details"> 
          <p className="profile-info">Full Name: {user.fullname}</p> 
          <p className="profile-info">Username: {user.username}</p> 
          <p className="profile-info">Email: {user.email}</p> 
          <p className="profile-info">Mobile: {user.mobile}</p> 
          <p className="profile-info">PAN No.: {user.pan}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
