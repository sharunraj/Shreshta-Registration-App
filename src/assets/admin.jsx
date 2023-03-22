import React from 'react'
//import Register from './register'
import styled from 'styled-components'
import { Button } from '../styles/Button'
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom'
const admin = () => {
  return (
    <Wrapper>
    <div className='Admin'>
    <h2>ADMIN PANEL</h2>
    <p>REGISTER NEW USER:</p>
    <Button><NavLink to="/register">REGISTER</NavLink></Button>
    <p>SEE ALL TRANSACTIONS:</p>
    <Button><NavLink to="/ATransaction">TRANSACTION</NavLink></Button>
    <p>ADD TOKENS TO AN ACCOUNT:</p>
    <Button><NavLink to="/addtoken">ADD TOKENS</NavLink></Button>
    <p>ADD EVENTS:</p>
    <Button><NavLink to="/Eventreg">ADD EVENT</NavLink></Button>
    <p>EVENT DETAILS:</p>
    <Button><NavLink to="/EventDetails">DETAILS</NavLink></Button>
    </div>
    </Wrapper>
    
  );
};
const Wrapper = styled.section`
.Admin{
   
  
    
}

`;
export default admin