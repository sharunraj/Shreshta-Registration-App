import React, { useState } from 'react'
import './styl.css'
import { Button } from '../styles/Button'
import callApi from '../utils/callApi'
const user = () => {

  const [isOTPVerified, setIsOTPVerified] = useState(false)
  const [phone, setPhone] = useState('')
  const [OTP, setOTP] = useState('')

  const handleSubmit = async ()=>{
    if(isOTPVerified){
      callApi('auth/verify',{phone,otp:OTP}).then(res=>{
        localStorage.setItem('user_token', JSON.stringify(res.data.token));
      }).catch(err=>{
        alert(err)
      })
    }else{
      callApi('auth/login_with_phone',{phone}).then(res=>{
        setIsOTPVerified(true)
      }).catch(err=>{
        alert(err)
      })
    }
  }

  return (
    <div className="reg-form">
      <div className="login-form-body">
        
        <div className="phonenumber">
          <label className="form__label" for="phonenumber">Phone </label>
          <input className="form__input" type="phonenumber" id="phonenumber" placeholder="phonenumber" value={phone} onChange={e=>{setPhone(e.target.value)}}/>
        </div>
        {isOTPVerified && 
          <div className="password">
            <label className="form__label" for="password">OTP</label>
            <input className="form__input" type="password" id="password" placeholder="Password" value={OTP} onChange={e=>{setOTP(e.target.value)}}/>
          </div>
        }
      <div class="footer">
        <Button type="submit" onClick={handleSubmit} class="btn">{isOTPVerified ? 'Login': 'Verify'}</Button>
      </div>
      </div>
    </div>  

  )
}

export default user