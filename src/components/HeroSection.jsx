import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'
const HeroSection = (props) => {
  return (<Wrapper>
    <div className = "container grid grid-two-column">
            <div className='section-hero-data'>
            <h1 className='hero-heading'>
                {props.name}
            </h1>
            <p className='hero-para'>
                This is a Wallet/payment app for the people who came to attend the Tech fest Shresta 2023
                held at Muthoot Institute Of Technology And Science.
            </p>
            <Button className="btn Admin-btn">
                <NavLink to="/admincontrol">ADMIN</NavLink>
            </Button>
            <Button className="btn User-btn">
                <NavLink to="/user">USER</NavLink>
            </Button>
            </div>
            <div className='section-hero-image'>
                <picture>
                  <img src="./images/hero.svg" alt="heroimg" className='.hero-img'/>
                </picture>

            </div>
    </div>

  </Wrapper>);
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width:16rem;
    
  }
  .User-btn{
    background-color: #00b0ff;
    margin-top: 2rem;
    
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
 `;
export default HeroSection;