import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";

function Header(prop) {
    const navigate = useNavigate();
    let signTag;

    if (prop.log) {
        signTag = <button onClick={function() {
            prop.setLog(false);
            navigate('/');
        }}>Log Out</button>
    } else {
        signTag = <button onClick={function() {
            navigate('/');
        }}>Sign In</button>
    }
    return (
        <div>
            <h1>Adventure Log - Life's Quest Tracker</h1>
            <div id='signbtn'>{signTag}</div>
        </div>
    )
}

export default Header;