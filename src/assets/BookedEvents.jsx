import React, {useEffect,useState}from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { confirmAlert } from "react-confirm-alert"
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
        exptime: "",
    },
];
const BookedEvents = () => {
    const [events, setEvents] = useState([])
    return (
        <Wrapper className="section">
            <h2 className="common-heading">EVENTS</h2>
            <div className="container grid grid-three-column">
                {events.map((value, i) => (
                    <div className="card">
                        <div className="flex items-start w-spx">
                            <h2 key={i} >
                                {value.time}
                            </h2>
                        </div>
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
                            <h4>
                                {value.exptime}
                            </h4>
                            <h3 >
                                {value.location}
                            </h3>

                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: #121212;
  .container {
    max-width: 120rem;
  }
  .common-heading{
    text-decoration-line:underline;
      text-decoration-line:underline;
  text-decoration-thickness:2px;
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
  }`;
export default BookedEvents