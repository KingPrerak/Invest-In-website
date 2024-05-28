import React from 'react';
import styled from 'styled-components';
import business from "../images/businessman.png";
import bol from "../images/rev.jpg"; // Import the background image

const ProgramsContainer = styled.section`
  padding: 50px 20px;
  background: url(${bol}) no-repeat center center; // Set the background image
  background-size: cover; // Make sure the image covers the container
  border-radius: 2px; // Adjust the value as needed to control the roundness of the corners
`;

const ProgramCard = styled.div`
background: FFFFFF;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Programs = () => {
  return (  
    <div >
      <ProgramsContainer style={{display: "flex"}} >
        <div style={{display: "flex", flexDirection: "column"}}>
        <h2>NEED HELP IN RAISING CAPITAL ? </h2>
          <ProgramCard>
            <h3>WHAT YOU CAN DO?</h3>
            <p>This is one and only platform which provides you venture capatalist/ big sharks that can help you colloborating and investing in your business or startup idea in return of your offering just you need to post your business on our platfor , it is quite simple you can post it by following steps given below..</p>
          </ProgramCard>
          <ProgramCard>
            <h3>FOLLOW THIS TO POST BUSINESS</h3>
            <p>Sign up and login.</p>
            <p>Go to post business.</p>
            <p>Enter details about your project.</p>
            <p>Here you are done !.</p>
          </ProgramCard>
          
        </div>
        <img style={{width: "300px"}} src={business} />
      </ProgramsContainer>
      
      
    </div>
  );
};

export default Programs;
