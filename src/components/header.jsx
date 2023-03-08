import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';
const header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.svg" width={80} alt='logo' className="logo"/>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #334756;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 60%;
  }
`;
export default header;
