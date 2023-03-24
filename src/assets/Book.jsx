import React, { useState } from 'react'
import QrReader from 'react-web-qr-reader';
import styled from 'styled-components';
import { confirmAlert} from "react-confirm-alert"
import { Button } from '../styles/Button';
import "react-confirm-alert/src/react-confirm-alert.css";

function Book() {
  const submit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Do you want to continue?",
      buttons: [
        {
          label: "Yes"
          
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
            setResult({ event_name: result.data.split(',')[0], event_price: result.data.split(',')[1] });
        }
    };

    const handleError = (error) => {
        console.log(error);
    };

    return (
        <Wrapper>
            <div>
                <div className="container grid grid-two-column">
                    <div className='section-hero-data'>
                        <QrReader
                            delay={500}
                            className={'scanner-box'}
                            onError={handleError}
                            onScan={handleScan}
                        />

                    </div>
                    <div className='section-qr-result'>
                        {result ?
                            <>
                                <div>
                                    <p className='event-title'>{result.event_name}</p>
                                    <p className='event-price'>Price: {result.event_price}</p>
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