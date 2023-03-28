import React, {useState} from 'react'
//import './styl.css'
import callApi from '../utils/callApi'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import ErrorDialogue from '../utils/ErrorDialogue';
import { NavLink } from 'react-router-dom';
import Select from 'react-select'
const register = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [college, setCollege] = useState('')

  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: "USER", label: "User" },
    { value: "CORDINATOR", label: "Cordinator" },
  ];
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const createUser = async () => {
    const user_id = await callApi('auth/register', { name, phone, email, phone, role:selectedOptions.value, college })
    ErrorDialogue('User registered Succesfullu !')
    setName('')
    setPhone('')
  }

  return (
    <Wrapper>
    <div className="reg-form">
      <div className="reg-form-body">
        <div className="username">
          <label className="form__label" for="NAME">NAME </label>
            <input className="form__input" type="text" id="NAME" placeholder="Full Name" value={name} onChange={e => { setName(e.target.value) }} />
        </div>
        <div className='Type'>
          <label className='form__label' for="TYPE">Type </label>
            <div className='dropdown-container'>
              <Select
                options={optionList}
                placeholder="type"
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
              />
            </div>

        </div>
       <div className="phonenumber">
          <label className="form__label" for="phonenumber">PHONE </label>
            <input className="form__input" type="phonenumber" id="phonenumber" placeholder="phonenumber" value={phone} onChange={e => { setPhone(e.target.value) }} />
        </div>
          <div className="email">
            <label className="form__label" for="EMAIL">EMAIL </label>
            <input className="form__input" type="email" id="EMAIL" placeholder="@gmail.com" value={email} onChange={e => { setEmail(e.target.value) }} />
          </div>
          <div className="college">
            <label className="form__label" for="college">COLLEGE </label>
            <input className="form__input" type="text" id="college" placeholder="college" value={college} onChange={e => { setCollege(e.target.value) }} />
          </div>
      <div class="footer">
      <Button type="submit" class="btn" onClick={createUser}>Register</Button>
      </div>
      </div>
    </div>  
    </Wrapper>
  );
 
 
};
const Wrapper = styled.section`
.reg-form-body{
  color:#fff;
  font-size:1.5rem;
}
.dropdown-container{

  width: 170px;
  padding-left: 0px;
    margin-left: -3px;
  color:#121212;
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
export default register