import React, { useState } from 'react';
import './apply-loan.css'
import { useNavigate} from "react-router-dom";

function ApplyLoan() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loanAmount, setloanAmount] = useState('');
  const [loanTerm, setloanTerm] = useState('');
  const [interestRate, setinterestRate] = useState('');

const handleSubmit = async(event)=>{
  event.preventDefault();
  const response = await fetch('http://localhost:4000/apply-loan',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, loanAmount, loanTerm, interestRate }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (response.ok) {
    alert(`Registered user: ${data.message}`);
    navigate("/loan_form", { state: { id: email } });
  } else {
    alert(`Error: ${data.error}`);
  }
};
return (
  <div className="apply-loan-container">
    <h2>Apply Loan</h2>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" placeholder="Name" required onChange={e => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
      <label>Loan Amount</label>
      <input type="number" placeholder="Loan Amount" required onChange={e => setloanAmount(e.target.value)} />
      <label>Loan Term(in months)</label>
      <input type="number" placeholder="Loan Term(months)" required onChange={e => setloanTerm(e.target.value)} />
      <label>Interest Rate(in rupees)</label>
      <input type="number" placeholder="Interest Rate(rupees)" required onChange={e => setinterestRate(e.target.value)} />
      <button type="submit">Apply</button>
    </form>
  </div>
);
}
export default ApplyLoan;