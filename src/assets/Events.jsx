import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { confirmAlert} from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css";
import callApi from "../utils/callApi";
import ErrorDialogue from "../utils/ErrorDialogue";

const events = [
    {
        name: "Auto Expo",
        status: "yellowm",
        desc: "See the rarest of the rarest. The luxury car collection of the state is displayed for you to enjoy.",
        location: "Osama Ground",
        time: "09:00",
        img: "./logo.svg",
        book:"no",
        exptime:"",
    },
    {
        name: "Music Mania",
        status: "yellowm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "11:00",
        img: "./logo.svg",
      book: "no",
      exptime: "",
    },
    {
        name: "Auto Expo",
        status: "greenm",
        desc: "See the rarest of the rarest. The luxury car collection of the state is displayed for you to enjoy.",
        location: "Osama Ground",
        time: "12:30",
        img: "./logo.svg",
      book: "no",
      exptime: "",
    },
    {
        name: "Music Mania",
        status: "redm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "13:00",
        img: "./logo.svg",
      book: "no",
      exptime: "",
    },
    {
        name: "Auto Expo",
        status: "redm",
        desc: "See the rarest of the rarest. The luxury car collection of the state is displayed for you to enjoy.",
        location: "Osama Ground",
        time: "15:00",
        img: "./logo.svg",
      book: "no",
      exptime: "",
    },
    {
        name: "Music Mania",
        status: "redm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "17:30",
        img: "./logo.svg",
      book: "no",
      exptime: "",
    },
    {
        name: "Music Mania",
        status: "redm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "19:30",
        img: "./logo.svg",
      book: "no",
      exptime: "",
        
    },
    {
        name: "Music Mania",
        status: "redm",
        desc: "Breaking the sound barriers, the DJ of Ajagalanda Rocks will take music to the next level. Live. Love. Lie.",
        location: "Albert Einstein Hall",
        time: "21:30",
        img: "./logo.svg",
      book: "no",
      exptime: "",
    },
];

const Events = () => {

  const [events, setEvents] = useState([])
  const nav = useNavigate()
  useEffect(() => {
    callApi('event/fetch_events').then(res => {
      setEvents(res.data.events)
    }).catch(err => {
      ErrorDialogue()
    })
  }, [])

  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Do you want to continue?",
      buttons: [
        {
          label: "Yes",
          onClick: ()=>{
            callApi("event/book_event",{eventId:id}).then(res=>{
              nav('/booked_events')
            }).catch(err=>{
              console.log(err.response.data.message);
              ErrorDialogue(err.response.data.message)
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
  

    return (
        <Wrapper className="section">
        <h2 className="common-heading">EVENTS</h2>
        <div className="container grid grid-three-column">
            {events.map((value, i) => (
                <div className="card">
                    <div className="flex flex-col h-28 justify-center items-center">
                        <div className={`w-3 h-3 bg-${value.status} rounded-xl`}></div>
                        <div className={`w-1 h-28 bg-${value.status}`}></div>
                    </div>
                    <div className="card-data">
                        <h2 >
                            {value.name}
                        </h2>
                        <p>{value.description}</p>

                            <figure>
                            <img className="w-4 h-4" src={value.poster} alt="" />
                            </figure>
                       {/* <NavLink to="/Events">
                            <Button className="btn" onClick={()=>{submit(value._id)}}>Book</Button>
            </NavLink>*/}
                        <h4>
                    {value.exptime}
                        </h4>
                            <h3 >
                                {value.location}
                            </h3>
                    <div className="flex items-start w-spx">
                        <h3 key={i} >
                            {value.time}
                        </h3>
                    </div>
                        
                    </div>
                </div>
            ))}
        </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: #121212;
  .container {
    max-width: 100rem;
  }
  .common-heading{
  padding-bottom:2rem;
  margin-top:-5rem;
  }
  .card {
    border: 0.4rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h4{
      margin: 1rem 10rem 0;
      font-weight: 300;
      font-size: 1.4rem;
      color: #ffff;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      color: #ffff;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.3rem solid #05aeaa;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #05aeaa;
      font-size: 1.4rem;
      &:hover {
        background-color: #47a079;
        color: #fff;
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Events;
