import React from "react";
import Logo from '../images/logo.png';
import './menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faBars
}from "@fortawesome/free-solid-svg-icons";

const Menu= ()=>{
    return (
        <div className="Main_header">
         <input type="checkbox" id="checkbtn"/>
            <label htmlFor="checkbtn" className="check-logo">
            <FontAwesomeIcon icon={faBars} />
            </label>
            <img src={Logo} id="logo" href="#"/>
            <ul id="m_items">
                <li><a href="#">Home</a></li>
                <li><a href="#">Draw</a></li>
                <li><a href="#">Login</a></li>
            </ul>
           
        </div>
    );
}
export default Menu;
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPenToSquare,
//   faMagnifyingGlass,
//   faUserPlus,
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";