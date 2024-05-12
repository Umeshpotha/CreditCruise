import React, { useState } from 'react';
import './apply-loan.css'

function ApplyLoan() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    loanAmount: '',
    loanTerm: '',
    interestRate: '',
  });

  const handleInputChange = (event) => {
    setFormState({
     ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="App">
        <br></br>
        <center><h1>Apply For Loan</h1></center>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />

        <label htmlFor="loanAmount">Loan Amount:</label>
        <input
          type="number"
          name="loanAmount"
          value={formState.loanAmount}
          onChange={handleInputChange}
        />

        <label htmlFor="loanTerm">Loan Term (in months):</label>
        <input
          type="number"
          name="loanTerm"
          value={formState.loanTerm}
          onChange={handleInputChange}
        />

        <label htmlFor="interestRate">Interest Rate:</label>
        <input
          type="number"
          name="interestRate"
          value={formState.interestRate}
          onChange={handleInputChange}
        />

        <center><button type="submit">Submit</button></center>
      </form>
    </div>
  );
}

export default ApplyLoan;