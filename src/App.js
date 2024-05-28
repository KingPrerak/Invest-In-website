import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyles';
import Page from './components/Invester/Page'; // Import Page component

import styled from 'styled-components';


const MainContainer = styled.div`
  padding-top: 1cm; /* Adjust this padding if needed */
`;

function App() {
  const [showPage, setShowPage] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <MainContainer>
          <Routes>
            {/* Define routes for the main content */}
            <Route path="/" element={<MainContent />} />
            {/* Define a route for the Page component */}
            <Route path="/page" element={<Page />} />
          </Routes>
        </MainContainer>
        <Footer />
      </Router>
    </>
  );
}

// Define a separate component for the main content
function MainContent() {
  return (
    <>
      
      <HeroSection />
      <Services />
      <Programs />
      <Testimonials />
    </>
  );
}

export default App;
