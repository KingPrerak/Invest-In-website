import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:FFFFFF;
  backdrop-filter: blur(17px);
  margin-top: ${({ scrolled }) => (scrolled ? '0' : '-100%')}; /* Hide the navbar when scrolled down */
  /* Add border-radius for rounded corners */
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.6); /* Adding shadow */
  position: fixed; /* Fixed position to prevent space at the bottom */
  width: 100%;
  z-index: 999; /* Ensure it's above other content */
  transition: margin-top 0.3s; /* Smooth transition for appearing and disappearing */
`;

const Logo = styled.div`
  font-size: 32px;
`;

const NavButtons = styled.div`
  display: flex;
`;

const NavButton = styled.button`
  padding: 6px 10px;
  margin: 0 9px;
  background-color:FFFFFF;
  color: #000;
  cursor: pointer;
  border-radius: 7px;
  font-size: 16px;

  &:hover {
    background-color: white;
  }
`;

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Navbar scrolled={visible}>
      <Logo>Invest-In</Logo>
      <NavButtons>
        <NavButton>👨‍💼My Profile</NavButton>
        {/* Conditional rendering of the "Invest Now" button */}
        {window.location.pathname !== '/page' && (
          <Link to="/page">
            <NavButton>💲Invest Now</NavButton>
          </Link>
        )}
        <NavButton>📝Ignite your idea</NavButton>
        <NavButton>🔑Login</NavButton>
      </NavButtons>
    </Navbar>
  );
};

export default Header;
