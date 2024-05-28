import React from 'react';
import styled, { keyframes } from 'styled-components';
import investor from "../images/investor.PNG";
import blue from "../images/hol7.jpg";

const slideIn = keyframes`
  from {
    transform: translateX(-40%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ServicesContainer = styled.section`
  padding: 50px 20px;
  background: url(${blue}) no-repeat center center;
  background-size: cover;
  display: flex;
`;

const SlideInImage = styled.img`
  width: 20rem;
  padding: 50px;
  animation: ${slideIn} 2s ease-in-out;
`;

const ServiceCard = styled.div`
  background: FFFFFF;
  backdrop-filter: blur(5px);
  z-index: 999;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 2s ease-in-out;
`;

const Services = () => {
  return (
    <div>
      <ServicesContainer>
        <SlideInImage src={investor} alt="Investor" />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: 'flex-start' }}>
          <h2>Invest Smart Earn Big !</h2>
          <ServiceCard>
            <h3>Investment in Innovation. Earn in Equity.</h3>
            <p>Join us to fuel groundbreaking advancements and secure a stake in our success. Invest today for substantial returns and equity in a company poised for significant growth. Share in the profits of our collective achievements. Seize the opportunity to be part of the next big thing.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Collaborate for Greater Success.</h3>
            <p>Partner with us to access cutting-edge resources and innovate together. We seek like-minded businesses to co-develop products, expand market reach, and achieve shared goals. Join forces for mutual success and industry impact. Together, we can push the boundaries of what's possible.</p>
          </ServiceCard>
        </div>
      </ServicesContainer>
    </div>
  );
};

export default Services;
