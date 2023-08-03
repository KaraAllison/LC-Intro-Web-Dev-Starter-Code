import React from "react";
import "./header.css"
import HeaderMenu from  "@howtocodewell/header-menu"
import menu from "./config/headerMenu.json"
import Calendar from 'react-calendar'

export default function Header() {
    return(
        <div>
        <div className="headerText">
            <h1>Welcome to the Show</h1>
            <HeaderMenu menu={menu} />
        </div>
        <div className="calendar">
        <Calendar />
        </div>
        </div>
    );
}