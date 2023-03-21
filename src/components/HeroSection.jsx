import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'
import Typewriter from "typewriter-effect";
import { useGlobalContext } from '../context';

const HeroSection = () => {
  const {name,image} = useGlobalContext();
  return (

  <Wrapper>
      <div className="typ">
        <Typewriter

          onInit={(typewriter) => {

            typewriter

              .typeString("SHRESHTA 2023")

              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcomes You")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Scroll Down👇")
              .start();

          }}
        />
      </div>
    <div className = "container grid grid-two-column">
            <div className='section-hero-data'>
            <h1 className='hero-heading'>
                {name}
            </h1>
            <p className='hero-para'>
                This is a {name} app for the people who came to attend the Tech fest Shresta 2023
                held at Muthoot Institute Of Technology And Science.
            </p>
            <Button className="btn Admin-btn">
                <NavLink to="/admin">ADMIN</NavLink>
            </Button>
            <Button className="btn User-btn">
                <NavLink to="/user">USER</NavLink>
            </Button>
            </div>
            <div className='section-hero-image'>
                <picture>
                  <img src={image} width={400} alt="heroimg" className='hero-img'/>
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
  .container{
    background-color:#292929;
    border-radius: 5rem;
    padding-left:5rem;
    
  }
  .btn {
    max-width:16rem;
     border-radius:4rem;
  }
  .User-btn{
    background-color: #47a079;
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
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
      
    }
    .hero-heading{
      padding-top:3rem;
      font-size:3rem;
    }
    .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 30rem;
  }
    .hero-img {
    width:30rem;
    

  }

    .btn {
      align-items:center;
  }
  
  }
 `;
export default HeroSection;