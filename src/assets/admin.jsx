import React from 'react'
import Register from './register'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom'
const admin = () => {
  return (
    <Wrapper>
    <div>ADMIN CONSOLE</div>
    <Register />
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default admin