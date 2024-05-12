import styled from 'styled-components';
import './privacy.css'

const PrivacyPolicy = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  padding: 20px;

  p {
    margin-bottom: 20px;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Privacy() {
  return (
    <PrivacyPolicy>
      <p>
        Privacy Policy
        Code Cruise is committed to protecting the privacy of its users. This Privacy Policy outlines the information we collect, how we use it, and the choices you have regarding your data.

Information We Collect

Personal Information: When you use our loan application platform, we may collect personal information such as your name, address, email, phone number, social security number, financial information, and other relevant details necessary for processing loan applications.

Usage Information: We may collect non-personal information about how you interact with our platform, such as the pages visited, actions taken, and device information (e.g., IP address, browser type).

How We Use Your Information

Loan Processing: We use the information you provide to process loan applications, verify your identity, assess creditworthiness, and determine eligibility for loans.

Communication: We may use your contact information to communicate with you regarding your loan application status, updates, promotions, and other relevant information.

Improvement: We analyze user data to improve our platform, services, and user experience.

Data Security

We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.

Third-Party Disclosure

We may share your information with trusted third parties, such as financial institutions, credit bureaus, service providers, or regulatory authorities, solely for the purpose of processing loan applications and providing related services.

Your Choices

Access and Update: You may access, update, or delete your personal information by contacting us through the provided channels.

Opt-Out: You have the right to opt-out of receiving promotional communications from us. You can unsubscribe using the provided opt-out mechanism or by contacting us directly.

Children's Privacy

Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that a child has provided us with personal information, please contact us to remove such data.

Changes to This Policy

We reserve the right to update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on our website. Your continued use of our platform after the changes are made constitutes acceptance of the revised policy.

Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at [codecruise@email.com].

This Privacy Policy was last updated on 12-05-2024.
      </p>
    </PrivacyPolicy>
  );
}

export default Privacy;