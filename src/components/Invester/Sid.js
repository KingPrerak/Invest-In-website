import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import image1 from '../../images/Inv.png';
import image3 from '../../images/abc.png';
import image4 from '../../images/read2.jpg';
import image5 from '../../images/star.jpeg';
// Styled components
const SliderContainer = styled.section`
  padding: 5px 70px;
  background-color: white; /* Set your preferred background color */
  justify-content: center;
  align-items: center; 
  margin-top:6px;
  
`;

const SlideWrapper = styled.div`
  width : 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-right:10cm;

  
`;

const Sid = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <SliderContainer >
      <Slider {...settings}>
        <SlideWrapper>
          <SlideImage src={image1} alt="Category 1" />
        </SlideWrapper>
        
        <SlideWrapper>
          <SlideImage src={image3} alt="Category 3" />
        </SlideWrapper>
         <SlideWrapper>
          <SlideImage src={image4} alt="Category 4" />
        </SlideWrapper>  
        <SlideWrapper>
          <SlideImage src={image5} alt="Category 5" />
        </SlideWrapper> 
        {/* Add more slides as needed */}
      </Slider>
    </SliderContainer>
  );
};

export default Sid;
