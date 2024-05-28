import React from 'react';
import styled, { keyframes } from 'styled-components';
import man from '../../images/man.png';
import bbb from '../../images/welcome.jpg';
import bubble3 from '../../images/bubble3.jpg';


const slideIn = keyframes`
  from {
    transform: translateX(-30%);
  }
  to {
    transform: translateX(0);
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

const Section = styled.section`
text-align: center;
padding: 50px 20px;
background: url(${bubble3}) ;
background-size: cover;
// animation: ${fadeIn} 1s ease-in;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  background: url(${bbb}) no-repeat center center;
  background-size: cover;/* Set your preferred background color */
  padding: 20px;
  border-radius: 10px;
  animation: ${fadeIn} 2s ease-in;
  margin-bottom:2cm;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const Card = styled.div`
  background: url(${bbb}) no-repeat center center;
  backdrop-filter: blur(5px);
  background-size: cover;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in;
`;

const TeamMember = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  animation: ${fadeIn} 1s ease-in;
`;

const TeamImage = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`;

const FAQ = styled.div`
  margin: 20px 0;
`;



const SlideInImage = styled.img`
  width: 50rem;
  padding: 25px;
  animation: ${slideIn} 2s ease-in;
`;

const Money = () => {
  return (
    
      

      <Section>
        <SectionTitle>"Welcome to Invest-in, your gateway to tax-free investments and boundless opportunities for business success! With us, you're not just investing; you're pioneering a path to financial freedom.</SectionTitle>
        <div style={{display: "flex"}}>
          <div>  <SlideInImage style={{width: "350px"}} src={man} />
          </div>
          <div style={{display:"table-column"}}>
          <Card>
            <h3>
            Tax-Free Investments
            </h3>
             Say goodbye to tax headaches! Invest-in offers a range of investment areas where you can grow your wealth without worrying about taxes eating into your profits. It's your money, and we believe you should keep more of it.</Card>
          <Card>
            <h3>
            Business Collaboration
            </h3>
             Looking to take your business to new heights? Our platform connects you with like-minded entrepreneurs for fruitful collaborations. Whether you're seeking partners, suppliers, or clients, Invest-in provides the perfect environment to foster lucrative business relationships.</Card>
          <Card>
            <h3>
            Success is Within Reach
              </h3>
              At Invest-in, success isn't just a possibility; it's an expectation. With our expert guidance and unparalleled support, you'll have everything you need to turn your entrepreneurial dreams into reality. Join us today and let's build a future of prosperity together!</Card>
          </div>
        </div>
      </Section>
      
     
    
  );
};

export default Money;