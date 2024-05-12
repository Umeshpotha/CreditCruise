import React from 'react';

const loansData = [
    {
        type: '1. Home Loans',
        description: 'Home loans are the most common type of secured loan...',
        repaymentTerms: '15 to 30 years',
        interestRate: 'Varies depending on credit score, loan amount, and term'
    },
    {
        type: '2. Auto Loans',
        description: 'Auto loans are used to finance the purchase of a car, truck, or motorcycle...',
        repaymentTerms: '2 to 7 years',
        interestRate: 'Varies depending on credit score, loan amount, and term'
    },
    {
        type: '3. Title Loans',
        description: 'Title loans are a type of secured loan that uses the borrower\'s car as collateral...',
        repaymentTerms: 'Short repayment terms, high interest rates, and fees',
        interestRate: 'Varies'
    },
    {
        type: '4. Loans Against Securities',
        description: 'Loans against securities (LAS) are a type of secured loan that allows investors to borrow money using their securities as collateral...',
        repaymentTerms: 'Varies',
        interestRate: 'Varies depending on the type of security used as collateral, loan amount, and term'
    },
    {
        type: '5. Personal Loans',
        description: 'Personal loans are a type of unsecured loan that can be used for a variety of purposes...',
        repaymentTerms: '1 to 7 years',
        interestRate: 'Varies depending on credit score, loan amount, and term'
    },
    {
        type: '6. Student Loans',
        description: 'Student loans are a type of unsecured loan that is used to pay for college or other higher education expenses...',
        repaymentTerms: '10 to 30 years',
        interestRate: 'Varies depending on the type of loan, credit score, and school'
    },
    {
        type: '7. Credit Card Loans',
        description: 'Credit card loans are a type of unsecured loan that is provided by credit card companies...',
        repaymentTerms: 'Varies',
        interestRate: 'Very high interest rates'
    }
];

function Loans() {
    return (
        <div>
            <br />
            <h1 style={{marginLeft: '40px' }}>Types of Loans</h1>
            <br />
            <hr />
            {loansData.map((loan, index) => (
                <div key={index} className="loan">
                    <h2 style={{ textAlign: 'left', marginLeft: '70px' }}>{loan.type}</h2>
                    <p style={{marginLeft: '20px' }}>{loan.description}</p>
                    <p style={{marginLeft: '20px' }}><strong>Repayment Terms:</strong> {loan.repaymentTerms}</p>
                    <p style={{marginLeft: '20px' }}><strong>Interest Rate:</strong> {loan.interestRate}</p>
                </div>
            ))}
        </div>
    );
}

export default Loans;
