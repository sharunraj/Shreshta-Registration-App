import React from 'react'
//import './styl.css'
import styled from 'styled-components';
import { Button } from '../styles/Button';
const register = () => {
  

  return (
    <Wrapper>
    <div className="reg-form">
      <div className="reg-form-body">
        <div className="username">
          <label className="form__label" for="firstName">First Name </label>
          <input className="form__input" type="text" id="firstName" placeholder="First Name" />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">Last Name </label>
          <input type="text" name="" id="lastName" className="form__input" placeholder="LastName" />
        </div>
        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input type="email" id="email" className="form__input" placeholder="Email" />
        </div>
        <div className="phonenumber">
          <label className="form__label" for="phonenumber">Phone </label>
          <input className="form__input" type="phonenumber" id="phonenumber" placeholder="phonenumber" />
        </div>
        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input className="form__input" type="password" id="password" placeholder="Password" />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">Confirm Password </label>
          <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
        </div>
      <div class="footer">
        <Button type="submit" class="btn">Register</Button>
      </div>
      </div>
    </div>  
    </Wrapper>
  );
 
 
};
const Wrapper = styled.section`
.reg-form {
    background-color: #292929;/*334756*/
    border-radius: 4rem;
    width: 550px;
    margin: 20px auto;
    padding: 20px;

    /* height: 600px; */
}

.reg-form-body {
    text-align: left;
    padding: 20px 10px;
    color: #fff;
    
    
}
.login-form-body{
        text-align: left;
            padding: 20px 10px;
            color: #fff;

}

.form-body>* {
    padding: 5px;
}

.form__label {
    width: 40%;
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-size:3rem;
    
}

.form_input {
    width: 60%;
    min-height: 200px;
}

.footer{
    padding-left: 6px;
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
.reg-form {
    background-color: #292929;/*334756*/
    border-radius: 4rem;
    max-width: 35rem;
    margin: 2rem auto;
    padding: 2rem;

    /* height: 600px; */
}
.footer{
    padding-top: .4rem;
    padding-left: .5rem;
}
}
`;
export default register