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
          <label className="form__label" for="Desc">Desc. </label>
            <input className="form__input" type="text" id="Desc" placeholder="Desc"  />
        </div>
         <div className="Prize">
            <label className="form__label" for="Desc">Prize </label>
            <input className="form__input" type="text" id="Desc" placeholder="Prize" />
        </div>
        <div className="Poster">
            <label className="form__label" for="Poster">Poster </label>
            <input className="form__input" type="text" id="Desc" placeholder="Poster" />
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
      margin:50px 0px; padding:0px;
    text-align:center;
    align:center;
}
`;
export default Eventreg