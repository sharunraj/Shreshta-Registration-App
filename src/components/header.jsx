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
      
   {/*   <ul className='Navbar-left'>
        <li>
          <NavLink className="navbar-left" to="/">SHRESHTA 23'</NavLink>
        </li>
  </ul>*/}
  <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #292929;//334756
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 60%;
  }
  .Navbar-left{
    padding-right:100rem;
    display: flex;
    gap: 4.8rem;
    li{

        list-style:none;
        .navbar-left{
            &:link,
            &:visited {
              display: inline-block;
              text-decoration: none;
              font-size: 1.8rem;
              text-transform: uppercase;
              color: #fff;
              transition: color 0.3s linear;
            }
            text-decoration: none;
            &:hover,
            &:active{
                color: #47a079;
            }
        }
    }

}
`;
export default header;
