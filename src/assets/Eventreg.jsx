import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const Eventreg = () => {
  return (
    <Wrapper>
    <h2>Event Register</h2>
    <div className="reg-form">
      <div className="reg-form-body">
        <div className="Event">
          <label className="form__label" for="Event">Event </label>
            <input className="form__input" type="text" id="NAME" placeholder="Event"  />
        </div>
        <div className="Description">
          <label className="form__label" for="Desc">Desccription </label>
            <input className="form__input" type="text" id="Desc" placeholder="Desc"  />
        </div>
        <div className="Poster">
            <label className="form__label" for="Poster">Poster </label>
            <input className="form__input" type="text" id="Desc" placeholder="Poster" />
        </div>
        <div className="Coordinator">
            <label className="form__label" for="Coordinator">Coordinator </label>
            <input className="form__input" type="text" id="Coord" placeholder="Coordinator" />
        </div>
        <div className="Contact">
            <label className="form__label" for="Contact">Contact  </label>
            <input className="form__input" type="text" id="Contact" placeholder="Contact" />
        </div>
        <div className="Description">
        <label className='form__label' for="Description">Description</label>
        <textarea name="message" cols="20" rows="6" autoComplete="off" placeholder='Description' required></textarea>
        </div>
      <div class="footer">
            <Button type="submit" class="btn" >Register</Button>
      </div>
      </div>
    </div>  
    </Wrapper>
  )
}
const Wrapper = styled.section`
.reg-form-body{
  color:#fff;
  font-size:1.7rem;
  
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
export default Eventreg