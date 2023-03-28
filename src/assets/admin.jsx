import React from 'react'
//import Register from './register'
import styled from 'styled-components'
import { Button } from '../styles/Button'
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import './adminstyle.css'
const admin = () => {
  return (
    <Wrapper>
    <h2 className='heading'>ADMIN PANEL</h2>
    <div className='whole bdy'>
    <div className='cntr'>
    <div className='card'>
          <div className='box'>
            <div className='content'>
    <h2>1</h2>
    <p>REGISTER NEW USER:</p>
    <NavLink to="/register">REGISTER</NavLink>
    </div>
          </div>
        </div>
    <div className='card'>
          <div className='box'>
            <div className='content'>
    <h2>2</h2>
    <p>SEE ALL TRANSACTIONS:</p>
    <NavLink to="/ATransaction">TRANSACTION</NavLink>
    </div>
          </div>
        </div>
    <div className='card'>
          <div className='box'>
            <div className='content'>
                <h2>3</h2>
    <p>ADD TOKENS TO AN ACCOUNT:</p>
    <NavLink to="/addtoken">ADD TOKENS</NavLink>
    </div>
          </div>
        </div>
    <div className='card'>
          <div className='box'>
            <div className='content'>
                <h2>4</h2>
    <p>ADD EVENTS:</p>
    <NavLink to="/Eventreg">ADD EVENT</NavLink>
    </div>
          </div>
        </div>
    <div className='card'>
          <div className='box'>
            <div className='content'>
                <h2>5</h2>
    <p>EVENT DETAILS:</p>
    <NavLink to="/EventDetails">DETAILS</NavLink>
    </div>
          </div>
        </div>
    </div>
      </div>
    </Wrapper>
    
  );
};
const Wrapper = styled.section`
.heading{
  
      display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
}

`;
export default admin