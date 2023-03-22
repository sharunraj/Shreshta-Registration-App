import React from 'react'
import { Button } from '../styles/Button'
import callApi from '../utils/callApi'
import styled from 'styled-components'

const addtoken = () => {
  return (
    <Wrapper>
      <div className="reg-form">
        <div className="login-form-body">

          <div className="phonenumber">
            <label className="form__label" for="phonenumber">Phone </label>
            <input className="form__input" type="phonenumber" id="phonenumber" placeholder="phonenumber"  />
          </div>
        
            <div className="TOKENS">
              <label className="form__label" for="TOKENS">Tokens</label>
              <input className="form__input" type="number" id="TOKENS" placeholder="TOKEN"  />
            </div>
         
          <div class="footer">
            <Button type="submit" >ADD</Button>
          </div>
        </div>
      </div>
    </Wrapper>

  )
}
const Wrapper = styled.section`
.login-form-body{
  font-size: 1.7rem;
  color:#fff;
}
.reg-form{

    width: 550px;
    margin: 20px auto;
    padding: 1rem 20rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}){
.reg-form {
    
    
    max-width: 35rem;
    margin: 2rem auto;
    padding: 2rem;
    /* height: 600px; */
}
.footer{
    padding-top: 1.4rem;
    padding-left:10rem;
}
}
`;
export default addtoken