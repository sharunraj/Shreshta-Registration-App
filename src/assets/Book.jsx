import React, { useState } from 'react'
import QrReader from 'react-web-qr-reader';
import styled from 'styled-components';
import { confirmAlert} from "react-confirm-alert"
import { Button } from '../styles/Button';
import "react-confirm-alert/src/react-confirm-alert.css";
import callApi from '../utils/callApi';
import { useNavigate } from 'react-router-dom';

function Book() {
  const nav = useNavigate()
  const submit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Do you want to continue?",
      buttons: [
        {
          label: "Yes",
          onClick: ()=>{
            callApi("event/book_event",{eventId:result._id}).then(res=>{
              nav('/booked_events')
            }).catch(err=>{
              console.log();
              confirmAlert({
                title: "Error Occured",
                message: err.response.data.message,
                buttons: [
                  {
                    label: "Ok"
                  }
                ]
              });
            })
          }
        },
        {
          label: "No"
          // onClick: () => alert("Click No")
        }
      ]
    });
  };


    const [result, setResult] = useState(false);

    const handleScan = (result) => {
        if (result) {
          callApi('event/fetch_event',{id:result.data}).then(res=>{
            if(res.data.event){
              setResult(res.data.event)
            }else{
              confirmAlert({
                title: "Invalid QR",
                message: "Invalid QR Code. Please try again!",
                buttons: [
                  {
                    label: "Ok"
                  }
                ]
              });
            }
          }).catch(err=>{
            confirmAlert({
              title: "Invalid QR",
              message: "Invalid QR Code. Please try again!",
              buttons: [
                {
                  label: "Ok"
                }
              ]
            });
          })
        }
    };

    const handleError = (error) => {
        console.log(error);
    };

    return (
        <Wrapper>
            <div>
                <div className="container grid grid-two-column">
                    {!result && 
                    <div className='section-hero-data'>
                      <QrReader
                          delay={1000}
                          className={'scanner-box'}
                          onError={handleError}
                          onScan={handleScan}
                      />

                    </div>}
                    <div className='section-qr-result'>
                        {result ?
                            <>
                                <div>
                                    <p className='event-title'>{result.name}</p>
                                    <p className='event-price'>{result.description}</p>
                                    <p className='event-price'>Location: {result.location}</p>
                                    <p className='event-price'>Time: {result.time}</p>
                                    <p className='event-price'>Price: {result.price}</p>
                                </div>
                                <Button className="btn User-btn" onClick={submit}>
                                    Book Now
                                </Button>
                            </>
                            :
                            <p className='event-title'>Scan a QR Code !</p>
                        }
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
 
  }
  .container{
    background-color:#292929;
    border-radius: 5rem;
    padding-left:5rem;
    
  }
  
  .hero-img {
    max-width: 80%;
  }
  .section-qr-result{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap:10px;
  }
  .scanner-box section div{
    box-shadow: none !important;
  }
  .scanner-box{
    border-radius: 10px;
  }
  .event-title{
    opacity: 1;
    font-size: 35px;
    font-weight: bold;
    margin: 0;
  }
  .event-price{
    opacity: 1;
    font-size: 20px;
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
 `;

export default Book