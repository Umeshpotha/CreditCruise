import React, { useState } from "react";
import "./loan_form.css";

function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    Gender: "",
    Married: "",
    Dependents: "",
    Education: "",
    Self_Employed: "",
    ApplicantIncome: "",
    CoapplicantIncome: "",
    LoanAmount: "",
    Loan_Amount_Term: "",
    Property_Area: "",
  });
  const [loanStatus, setLoanStatus] = useState(""); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // alert(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://loanapprovalpredictionapi.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const loanApproved = responseData.approved;
      // console.log(responseData);
      setLoanStatus(loanApproved? "Yes" : "No");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Loan Eligibility Checker</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Gender">Gender:</label>
        <select
          id="Gender"
          name="Gender"
          value={formData.Gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <label htmlFor="Married">Married:</label>
        <select
          id="Married"
          name="Married"
          value={formData.Married}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <label htmlFor="Dependents">Dependents:</label>
        <select
          id="Dependents"
          name="Dependents"
          value={formData.Dependents}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <label htmlFor="Education">Education:</label>
        <select
          id="Education"
          name="Education"
          value={formData.Education}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Graduate">Graduate</option>
          <option value="Not Graduate">Not Graduate</option>
        </select>
        <br />
        <label htmlFor="Self_Employed">Self Employed:</label>
        <select
          id="Self_Employed"
          name="Self_Employed"
          value={formData.Self_Employed}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <label htmlFor="ApplicantIncome">Income:</label>
        <input
          type="number"
          id="ApplicantIncome"
          name="ApplicantIncome"
          value={formData.ApplicantIncome}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="CoapplicantIncome">Co-Applicant Income:</label>
        <input
          type="number"
          id="CoapplicantIncome"
          name="CoapplicantIncome"
          value={formData.CoapplicantIncome}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="LoanAmount">Loan Amount:</label>
        <input
          type="number"
          id="LoanAmount"
          name="LoanAmount"
          value={formData.LoanAmount}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="Loan_Amount_Term">Term (Days):</label>
        <input
          type="number"
          id="Loan_Amount_Term"
          name="Loan_Amount_Term"
          value={formData.Loan_Amount_Term}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="Property_Area">Property Area:</label>
        <select
          id="Property_Area"
          name="Property_Area"
          value={formData.Property_Area}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Rural">Rural</option>
          <option value="Urban">Urban</option>
          <option value="Semiurban">Semi Urban</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <center><h1>Loan Status: {loanStatus}</h1></center>
    </div>
  );
}

export default LoanApplicationForm;
