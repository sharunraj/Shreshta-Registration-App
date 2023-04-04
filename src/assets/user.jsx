import React, { useState } from 'react'
//import './styl.css'
import { Button } from '../styles/Button'
import callApi from '../utils/callApi'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
const user = () => {

  const [isOTPVerified, setIsOTPVerified] = useState(false)
  const [phone, setPhone] = useState('')
  const [OTP, setOTP] = useState('')
  const nav = useNavigate()

  const {fetchUserDetails} = useGlobalContext()

  const handleSubmit = async () => {
    if (isOTPVerified) {
      callApi('auth/verify', { phone, otp: OTP }).then(res => {
        var today = new Date();
        today.setHours(today.getHours() + 10);
        localStorage.setItem('user_token', JSON.stringify({value:res.data.token,expiry:today}));
        // fetchUserDetails()
        nav('/',{ replace: true })
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
      <div className="regform">
        <div className="login-form-body">
        <h3 className='head'>Log In</h3>
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
.head{
  text-align:center;
  font-size:2rem;
  padding-bottom:1rem;
}
.login-form-body{
  font-size: 1.7rem;
  color:#fff;
  text-align:left;
  margin:auto;
}
.regform{
    width: 200px;
    margin: 2rem auto;   
    border: 3px solid grey;
   // background-color:#292929;
    border-radius:2rem;
    padding: 1 3rem
}
.form__label{
  margin-right:5rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}){
.regform {
    
    
    width: 25rem;
    margin: 2rem auto;   
    border: 3px solid grey;
   // background-color:#292929;
    border-radius:2rem;
    padding: 1 4rem;

}
.login-form-body{
  font-size: 1.7rem;
  color:#fff;
  text-align:left;
  margin:auto;
}
.footer{
    padding-top: 1.4rem;
    padding-left:10rem;
}
}
`;
export default user;
