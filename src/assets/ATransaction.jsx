import React,{Component, useState}from 'react'
import styled from 'styled-components';
import { useTable } from 'react-table';
import Tables from './Tables';
import { Button } from '../styles/Button';
import callApi from '../utils/callApi';
import ErrorDialogue from '../utils/ErrorDialogue';
const ATransaction = () => {

  const [isPhoneGiven, setIsPhoneGiven] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [phone, setPhone] = useState('')

  const handleSubmit = ()=>{
    if(!phone || phone.length<10){
      return ErrorDialogue("Enter Valid phone number and amount")
    }
    callApi('wallet/fetch_transactions',{phone}).then(res=>{
      if(res.type === 'success'){
        res.data.transactions.map(tranasction=>{
          tranasction.timestamp = new Date(tranasction.timestamp).toLocaleString()
          if(tranasction.tType === 'Withdraw' || tranasction.tType === 'Event Registration'){
              tranasction.amount = 0-tranasction.amount
          }
        })
        setTransactions(res.data.transactions)
        setIsPhoneGiven(true)
      }
    }).catch(err=>{
      ErrorDialogue(err.response.data.message)
    })
  }
  return (
    <Wrapper>
    <div>ATransaction</div>
    {isPhoneGiven ? 
      <Tables data={transactions}/>
    :
    <div className="reg-form">
      <div className="login-form-body">

        <div className="phonenumber">
          <label className="form__label" for="phonenumber">Phone </label>
          <input className="form__input" type="phonenumber" id="phonenumber" placeholder="phonenumber" value={phone} onChange={e => { setPhone(e.target.value) }} />
        </div>
        <div class="footer">
          <Button type="submit" onClick={handleSubmit} class="btn">Fetch</Button>
        </div>
      </div>
    </div>
    }
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
export default ATransaction