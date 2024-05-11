import React from 'react';
import './loan_form.css';

function LoanApplicationForm() {
    return (
        <div>
            <h2>Loan Application Form</h2>
            <form action="#" method="post" encType="multipart/form-data">
                <label htmlFor="Name">Name:</label>
                <input type="text" id="Name" name="Name" placeholder="Enter the name" required /><br /><br />
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required /><br /><br />
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br /><br />
                <label htmlFor="marital_status">Marital Status:</label>
                <select id="marital_status" name="marital_status" required>
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                </select><br /><br />
                <label htmlFor="dependents">Number of Dependents:</label>
                <input type="number" id="dependents" name="dependents" required /><br /><br />
                <label htmlFor="education">Education:</label>
                <input type="text" id="education" name="education" required /><br /><br />
                <label htmlFor="self_employed">Self Employed:</label>
                <input type="checkbox" id="self_employed" name="self_employed" /><br /><br />
                <label htmlFor="income">Income:</label>
                <input type="number" id="income" name="income" required /><br /><br />
                <label htmlFor="co_income">Co-Applicant Income:</label>
                <input type="number" id="co_income" name="co_income" /><br /><br />
                <label htmlFor="loan_amount">Loan Amount:</label>
                <input type="number" id="loan_amount" name="loan_amount" required /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default LoanApplicationForm;
