import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cloth from '../images/cloth.jpg';
import real from '../images/realestate.jpg';
import organic from '../images/organic.png';
import auto from '../images/auto.jpg';
import blue from "../images/hol7.jpg";

const TestimonialsContainer = styled.section`
  padding: 30px 20px;
  background: url(${blue}) no-repeat center center; // Set the background image
  background-size: cover; // Make sure the image covers the container
  text-align:center;
  margin-bottom: 50px; 
  
`;
// const ServiceCard = styled.div`
//   background: #86E1D5;
//   padding: 20px;
//   margin: 10px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

const SlideWrapper = styled.div`
  width: 100%;
  height: 350px; /* Set a consistent height for the images */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 70px;
  
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensure the entire image is visible */
  border-radius: 20px;
  
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <TestimonialsContainer >
      <h2 style={{ paddingBottom: '40px' }}>
        Top Growing catogaries to invest-in
      </h2>
      <Slider {...settings}>
        <SlideWrapper>
          <SlideImage src={real} alt="Real Estate" />
        </SlideWrapper>
        <SlideWrapper>
          <SlideImage src={cloth} alt="Clothing Brands" />
        </SlideWrapper>
        <SlideWrapper>
          <SlideImage src={organic} alt="Organic Farming" />
        </SlideWrapper>
        <SlideWrapper>
          <SlideImage src={auto} alt="Auto Modification" />
        </SlideWrapper>
        {/* Add more slides as needed */}
      </Slider>     
    </TestimonialsContainer>
  );
};

export default Testimonials;
		