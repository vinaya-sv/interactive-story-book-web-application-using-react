import React, { useState } from 'react';
import './css/username.css';
import { Link } from 'react-router-dom';
function Username(){
    const [username,setUsername]=useState("");
    return(
        <div className="username-wrapper">
            {/* {username} */}
            <div className="username-container">
                <span className="username-label"> Enter your username</span>
                <input className="username-input" type="text" onChange={(e)=>setUsername(e.target.value)}></input>
            </div>
            {
                username &&
                <Link to="/character-selection">
                <div className="username-next-box" onClick={()=>localStorage.setItem("username",username)}>
                    Proceed
                </div>
            </Link>
            }
        </div>
    )
}
export default Username;