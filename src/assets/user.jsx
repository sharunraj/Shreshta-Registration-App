import React, { useState } from 'react'
//import './styl.css'
import { Button } from '../styles/Button'
import callApi from '../utils/callApi'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const user = () => {

  const [isOTPVerified, setIsOTPVerified] = useState(false)
  const [phone, setPhone] = useState('')
  const [OTP, setOTP] = useState('')
  const nav = useNavigate()

  const handleSubmit = async () => {
    if (isOTPVerified) {
      callApi('auth/verify', { phone, otp: OTP }).then(res => {
        localStorage.setItem('user_token', JSON.stringify(res.data.token));
        nav('/')
      }).catch(err => {
        alert(err)
      })
    } else {
      callApi('auth/login_with_phone', { phone }).then(res => {
        setIsOTPVerified(true)
      }).catch(err => {
        alert(err)
      })
    }
  }

  return (
    <Wrapper>
    <div className="reg-form">
      <div className="login-form-body">

        <div className="phonenumber">
          <label className="form__label" for="phonenumber">Phone </label>
          <input className="form__input" type="phonenumber" id="phonenumber" placeholder="phonenumber" value={phone} onChange={e => { setPhone(e.target.value) }} />
        </div>
        {isOTPVerified &&
          <div className="password">
            <label className="form__label" for="password">OTP</label>
            <input className="form__input" type="password" id="password" placeholder="Password" value={OTP} onChange={e => { setOTP(e.target.value) }} />
          </div>
        }
        <div class="footer">
          <Button type="submit" onClick={handleSubmit} class="btn">{isOTPVerified ? 'Login' : 'Verify'}</Button>
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
export default user;