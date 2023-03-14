import React from 'react';
import styled from 'styled-components';
import { FaUser, FaSearch, FaCog } from 'react-icons/fa';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const UserIcon = styled(FaUser)`
  font-size: 24px;
  color: #333;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 20px;
  color: #333;
`;

const SettingsIcon = styled(FaCog)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>My App</Title>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search" />
        <SearchIcon />
      </SearchContainer>
      <div>
        <SettingsIcon />
        <UserIcon />
      </div>
    </HeaderContainer>
  );
};

export default Header;
