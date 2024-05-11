// Import necessary libraries and components
import React from 'react';
import './home.css';

// Define the HomePage component
const HomePage = () => {
    const handleButtonClick = () => {
        window.location.href = '/loan_form.html';
      };
    return (
        <div className="homepage">
            {/* Main content */}
            <div className="container">
                {/* Hero section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Empowering SMEs with Small Loans</h1>
                        <p>Access quick and hassle-free loans to fuel your business growth.</p>
                        <button onClick={handleButtonClick} className="btn btn-primary">Apply Now</button>
                    </div>
                </section>

                {/* Testimonials section */}
                <section className="testimonials-section">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonial">
                        <p>"YourLoanApp made the loan process incredibly easy. I received the funds I needed within days!"</p>
                        <cite>- John Doe, CEO of ABC Enterprises</cite>
                        
                    </div>
                    {/* Add more testimonials here */}
                </section>

                {/* Call to Action section */}
                <section className="cta-section">
                    <h2>Ready to take your business to the next level?</h2>
                    <button className="btn btn-primary">Apply Now</button>
                </section>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Your Loan App. All rights reserved.</p>
                    <ul className="footer-links">
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

// Export the HomePage component
export default HomePage;
