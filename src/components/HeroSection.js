import React from 'react';
import styled from 'styled-components';
import pirate from "../images/pirate.png"
import bol from "../images/rev.jpg"; 

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 115px 20px;
  background: url(${bol}) no-repeat center center; // Set the background image
  background-size: cover; // Make sure the image covers the container
  
  overflow: hidden;
  

  /* Add circular corners from the left and right edges */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: #e0f7fa; /* Match the background color */
    border-radius: 50%;
    z-index: -1;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;


const HeroContent = styled.div`
  max-width: 50%;
`;

const HeroImage = styled.div`
  max-width: 50%;
  img {
    width: 100%;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>HEY ! Venture Capitalist</h1>
        <p>
         -
        </p>
        <p>Invest-In welcomes you to the Ocean of Gold.....</p> 
        <p>Embark on a new era of investment. Invest in startups and businesses, You can also collaborate to expand your ventures, and earn or acquire funds in exchange for equity.</p> 
        <p>Invest more to earn more with Invest-In.</p>
        <p>
          😊
        </p>
        <button> Want to Invest </button>
        <button> Ignite your Business </button>
      </HeroContent>
      <HeroImage>
        <img style={{width: "300px"}} src={pirate} alt="Pirate" />

      </HeroImage>
    </HeroContainer>
  );
};

export default HeroSection;
