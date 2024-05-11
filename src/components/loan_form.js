import React from "react";
import "./loan_form.css";

function LoanApplicationForm() {
  return (
    <div>
      <h2>Loan Application Form</h2>
      <form action="#" method="post" encType="multipart/form-data">
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Enter the name"
          required
        />
        <br />
        <br />
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required />
        <br />
        <br />
        <label for="Gender">Gender:</label>
        <select id="Gender" name="Gender" required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <br />
        <label for="Married">Married:</label>
        <select id="Married" name="Married" required>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <br />
        <label for="Dependents">Dependents:</label>
        <select id="Dependents" name="Dependents" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <br />
        <label for="Education">Education:</label>
        <select name="Education" id="Education">
          <option value="Graduate">Graduate</option>
          <option value="Not Graduate">Not Graduate</option>
        </select>
        <br />
        <br />
        <label for="Self_Employed">Self Employed:</label>
        <select name="Self_Employed" id="Self_Employed">
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

        <br />
        <br />
        <label for="ApplicantIncome">Income:</label>
        <input
          type="number"
          id="ApplicantIncome"
          name="ApplicantIncome"
          required
        />
        <br />
        <br />
        <label for="CoapplicantIncome">Co-Applicant Income:</label>
        <input type="number" id="CoapplicantIncome" name="CoapplicantIncome" />
        <br />
        <br />
        <label for="LoanAmount">Loan Amount:</label>
        <input type="number" id="LoanAmount" name="LoanAmount" required />
        <label for="Loan_Amount_Term">Term (Days):</label>
        <input
          type="number"
          id="Loan_Amount_Term"
          name="Loan_Amount_Term"
          required
        />
        <label for="" id="Property_Area">
          Property_Area
        </label>
        <select name="Property_Area" id="Property_Area">
          <option value="Rural">Rural</option>
          <option value="Urban">Urban</option>
          <option value="Semiurban">Semi Urban</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoanApplicationForm;
