import React from 'react';

import styled, { keyframes } from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background: #333;
  color: white;
  text-align: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const ContactSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #9DA4A3;
  animation: ${fadeIn} 1s ease-in;
`;



const Footer = () => {
  return (
    <FooterContainer>
      <ContactSection>
        <h2>Contact Us</h2>
        <p>If you have any questions or need more information, please contact our Investor Relations team:</p>
        <p>Email: <a href="mailto:investor@company.com">investor@company.com</a></p>
       
      </ContactSection>
      <p>&copy; 2024 Invest In. All rights reserved.</p>
      <p>
        Investing to businesses are subject to economical risk , Read all the documents carefully before investing.
      </p>
    </FooterContainer>
  );
};

export default Footer;
