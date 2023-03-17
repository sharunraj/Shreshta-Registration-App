import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
const[openMenu, setOpenMenu] = useState(false);
const Nav = styled.nav`

.navbar-list{
    display: flex;
    gap: 4.8rem;
    li{

        list-style:none;
        .navbar-link{
            &:link,
            &:visited {
              display: inline-block;
              text-decoration: none;
              font-size: 1.8rem;
              text-transform: uppercase;
              color: ${({theme})=> theme.colors.white};
              transition: color 0.3s linear;
            }
            text-decoration: none;
            &:hover,
            &:active{
                color: #47a079;
            }
        }
    }

}

`;
return (<Nav>
    <div className={openMenu ? "menuIcon active" : "menuIcon"}>

        <ul className='navbar-list'>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/">
                    Home
                </NavLink>
        </li>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/Events">
                    Events
                </NavLink>
                
        </li>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/about">
                    About
                </NavLink>
        </li>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/register">
                    Register
                </NavLink>
        </li>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/user">
                    Login
                </NavLink>
        </li>
        </ul>
        <div className="mobile-navbar-btn">
            <CgMenu
                name="menu-outline"
                className="mobile-nav-icon"
                onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
                name="close-outline"
                className="close-outline mobile-nav-icon"
                onClick={() => setOpenMenu(false)}
            />
        </div>
    </div>
  </Nav>
);

};

export default Navbar;