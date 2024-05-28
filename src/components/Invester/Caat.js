import React, { useState } from 'react';
import styled from 'styled-components';
import brev from '../../images/welcome.jpg'

const CatCard = styled.div`
  background: url(${brev}) no-repeat center center;
  background-size: cover;/* Set your preferred background color */
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProgramsContainer = styled.section`
  padding: 30px 20px;
  background : white;
  border-radius: 2px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Header = styled.h2`
  grid-column: span 2;
  text-align: center;
  margin-bottom: 20px;
  background: url(${brev}) no-repeat center center;
  background-size: cover;/* Set your preferred background color */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.input`
grid-column: span 2;
margin-bottom: 10px;
background: url(${brev}) no-repeat center center;
background-size: cover;/* Set your preferred background color */
padding: 10px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const categories = [
  '🚘🛠️ AUTOMOBILE', '💊 PHARMACEUTICALS', '🛩️ AVIATION', '🛳 PORTS & SHIPPING', '🏗️ CONSTRUCTION',
  '♻️🔋 RENEWABLE ENERGY', '🏭 DEFENCE MANUFACTURING', '🛒 RETAIL & E-COMMERCE', '🔌 ELECTRONIC SYSTEMS',
  '👷‍♂️ CONTRACTORS', '🍙🍣🍱🥢 FOOD PROCESSING', '👨‍🍳🍽 CLOUD KITCHENS', '👨🏻‍⚕️ HEALTHCARE', '🧶 TEXTILES', '🗺️🏨 TOURISM & HOSPITALITY',
  '🏘️🤝 REAL-ESTATE'
];

const Caat = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ProgramsContainer>
        <Header>TOP GROWING CATEGORIES</Header>
        
        <SearchBar
          type="text"
          placeholder="🔍 Search categories..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {filteredCategories.map((category, index) => (
          <CatCard key={index}>
            <h3>{category}</h3>
          </CatCard>
        ))}
      </ProgramsContainer>
    </div>
  );
};

export default Caat;
