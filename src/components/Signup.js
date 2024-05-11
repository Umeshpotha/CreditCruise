import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullname, email, password, confirmPassword }),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (response.ok) {
            alert(`Registered user: ${data.message}`);
        } else {
            alert(`Error: ${data.error}`);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" required onChange={e => setFullname(e.target.value)} />
                <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" required onChange={e => setConfirmPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;