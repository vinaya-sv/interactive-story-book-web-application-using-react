import React from 'react';
import './css/navbar.css';
function Navbar(){
    return(
        <div className="navbar-wrapper">
            <div className="navbar-title">
                <h1>Dreamland Diaries</h1>
            </div>
            <div className="navbar-username">Hai {localStorage.getItem("username")}!</div>
        </div>
    )
}
export default Navbar;