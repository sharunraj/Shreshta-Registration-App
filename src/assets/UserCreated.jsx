import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
import styled from 'styled-components'
const UserCreated = () => {
  return (
    <Wrapper>
    <div className='head'>
        <h2>User Created Successfully...</h2>
        <NavLink to='/'>
            <Button>Go Back</Button>
        </NavLink>
    </div>
      </Wrapper>
  )
}
const Wrapper = styled.section`
.head{
    width: 200px;
    margin: 2rem auto;   
    border: 3px solid grey;
    border-radius:2rem;
    padding: 1 3rem
}
`;
export default UserCreated