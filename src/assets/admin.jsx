import axios from 'axios'
import React, { useState } from 'react'
import { Button } from '../styles/Button'
import callApi from '../utils/callApi'

const admin = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const createUser =async ()=>{
    const user_id = await callApi('auth/register',{name,phone})
    console.log(user_id);
  }

  return (
    <div className="reg-form">
      <div className="login-form-body">
        <div className="username">
          <label className="form__label" for="name">Name </label>
          <input className="form__input" type="text" id="name" placeholder="Full Name" value={name} onChange={e=>{setName(e.target.value)}}/>
        </div>
        <div className="phonenumber">
          <label className="form__label" for="phonenumber">Phone </label>
          <input className="form__input" type="phonenumber" id="phonenumber" placeholder="phonenumber" value={phone} onChange={e=>{setPhone(e.target.value)}}/>
        </div>
      <div class="footer">
        <Button type="submit" class="btn" onClick={createUser}>Register</Button>
      </div>
      </div>
    </div>  
  )
}

export default admin