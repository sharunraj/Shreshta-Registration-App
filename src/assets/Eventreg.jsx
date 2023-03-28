import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import callApi from '../utils/callApi'
import ErrorDialogue from '../utils/ErrorDialogue'
import Select from 'react-select'

const Eventreg = () => {
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: "Joel Jose", label: "Joel Jose" },
    { value: "Jacob Mathew", label: "Jacob Mathew" },
    { value: "Lakshmi Nair", label: "Lakshmi Nair" },
    { value: "Sagar S Abraham", label: "Sagar S Abraham" },
    { value: "Aiswarya Pradeep", label: "Aiswarya Pradeep" },
    { value: "Maria Biju", label: "Maria Biju" },
    { value: "Sivaprasad A", label: "Sivaprasad A" },
    { value: "Swetha Prakash", label: "Swetha Prakash" },
    { value: "Chandralekha", label: "Chandralekha" },
    { value: "Joann Jibin", label: "Joann Jibin" },
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  
  const initialState = {
    name:'',
    description:'',
    poster:'',
    price:'',
    location:'',
    time:'',
  }
  const [eventData, setEventData] = useState(initialState)
  const [cordinators, setCordinators] = useState([])

  useEffect(()=>{
    callApi('auth/fetch_cordinators').then(res=>{
      if(res.type==='success'){
          let cords = res.data.cordinators.map(cord=>{
              return{
                  value:cord._id,
                  label:cord.name
              }
          })
          setCordinators(cords)
      }
  })
  },[])

  const submit = ()=>{
    if(!eventData.name || !eventData.location || !eventData.time || !eventData.price){
      ErrorDialogue('Please fill all required fields')
    }
    eventData.time = new Date(eventData.time)
    const cords = selectedOptions.map(cord=>{return cord.value})
    eventData.cordinator = cords
    callApi('event/add_event',eventData).then(res=>{
      if(res.type === 'success'){
        ErrorDialogue('Event Added Succesfully')
        setEventData(initialState)
      }
    }).catch(err=>{
      ErrorDialogue(err.response.data.message)
    })
  }
  return (
    <Wrapper>
    <h2>Event Register</h2>
    <div className="reg-form">
      <div className="reg-form-body">
        <div className="Event">
          <label className="form__label" for="Event">Event </label>
            <input className="form__input" type="text" id="NAME" placeholder="Event" value={eventData.name} onChange={e=>{setEventData({...eventData,name:e.target.value})}} />
        </div>
        <div className="Location">
          <label className="form__label" for="Desc">Location </label>
            <input className="form__input" type="text" id="Desc" placeholder="Location" value={eventData.location} onChange={e=>{setEventData({...eventData,location:e.target.value})}}  />
        </div>
        <div className="Poster">
            <label className="form__label" for="Poster">Poster </label>
            <input className="form__input" type="text" id="Desc" placeholder="Poster" value={eventData.poster} onChange={e=>{setEventData({...eventData,poster:e.target.value})}} />
        </div>
        <div className="Date">
            <label className="form__label" for="Date">Date </label>
            <input className="form__input" type="datetime-local" id="Desc" placeholder="Date" value={eventData.time} onChange={e=>{setEventData({...eventData,time:e.target.value})}} />
        </div>
        <div className="Price">
            <label className="form__label" for="Price">Price </label>
            <input className="form__input" type="text" id="Desc" placeholder="Price" value={eventData.price} onChange={e=>{setEventData({...eventData,price:e.target.value})}} />
        </div>
        <div className="Cordinator">
            <label className="form__label" for="Cordinator">Cordinator </label>
            <div className='dropdown-container'> 
              <Select
                options={cordinators}
                placeholder="Coordinator"
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
              />
            </div>
          {/*  <input className="form__input" type="text" id="Coord" placeholder="Coordinator" value={eventData.cordinatorName} onChange={e=>{setEventData({...eventData,cordinatorName:e.target.value})}} />*/}
        </div>
        <div className="Description">
        <label className='form__label' for="Description">Description</label>
        <textarea name="message" cols="20" rows="6" autoComplete="off" placeholder='Description' required value={eventData.description} onChange={e=>{setEventData({...eventData,description:e.target.value})}}> </textarea>
        </div>
      <div class="footer">
            <Button type="submit" class="btn" onClick={submit}>Register</Button>
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
.dropdown-container{
  width: 200px;
  color:#121212;
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