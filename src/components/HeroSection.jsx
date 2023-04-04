import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'
import Typewriter from "typewriter-effect";
import { useGlobalContext } from '../context';
import Book from '../assets/Book';

const HeroSection = () => {
  const { name, image, walletDetails } = useGlobalContext();
  return (
    <Wrapper>
      <Book />
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
  .balance{
    background: linear-gradient(90deg, rgba(71,160,121,1) 0%, rgba(2,97,96,1) 100%);
    border-radius: 24px;
    text-align: center;
    display: block;
    margin-top: 10px;
    max-width: 16em;
  }
  .balance p{
    margin: 0;
    background: #292929;
    border-radius: 24px;
    opacity: 1;
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

    width:20rem;
    margin-left:auto;
    margin-right:auto;
    display:block;
    padding-bottom:10rem;
  }

  


    .btn {
      align-items:center;
  }
  }
 `;
export default HeroSection;
