import React from 'react'
import './styl.css'
import { Button } from '../styles/Button'
const user = () => {
  return (
    <div className="reg-form">
      <div className="login-form-body">
        
        <div className="phonenumber">
          <label className="form__label" for="phonenumber">Phone </label>
          <input className="form__input" type="phonenumber" id="phonenumber" placeholder="phonenumber" />
        </div>
        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input className="form__input" type="password" id="password" placeholder="Password" />
        </div>
      <div class="footer">
        <Button type="submit" class="btn">Login</Button>
      </div>
      </div>
    </div>  

  )
}

export default user