import React from 'react'
//import Register from './register'
import styled from 'styled-components'
import { Button } from '../styles/Button'
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom'
const admin = () => {
  return (
    <Wrapper>
    <h2>ADMIN PANEL</h2>
    <p>REGISTER NEW USER?</p>
    <Button><NavLink to="/register">REGISTER</NavLink></Button>
    <p>SEE ALL TRANSACTIONS:</p>
    <Button><NavLink to="/ATransaction">TRANSACTION</NavLink></Button>
    <p>ADD TOKENS TO AN ACCOUNT:</p>
    <Button><NavLink to="/addtoken">ADD</NavLink></Button>

    </Wrapper>
  );
};
const Wrapper = styled.section`


`;
export default admin