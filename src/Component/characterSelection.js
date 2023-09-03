import React, { useState } from 'react';
import './css/characterSelection.css';
import characters from './characters';
import { Link } from 'react-router-dom';
function CharacterSelection(){
    console.log(Object.keys(characters));
    const [selectedCharacter, selectCharacter]=useState();
    const handleClick=(avatar)=>{
        selectCharacter(avatar);
        localStorage.setItem("you-character",avatar);
    }
    return(
        <div className="charselec-wrapper">
            <div className="select-character-container">
                <h1 className="select-character-label">Select your character</h1>
            </div>
            <div className="characters-container">

            {Object.keys(characters).map(
                (avatar)=>
                    <div className="character-card" onClick={()=>handleClick(avatar)}>
                        <div className="character-selected" style={{backgroundColor: (selectedCharacter==avatar)?"rgba(0, 0, 0, 0.5)":""}}></div>
                        <div className="character-image-container">
                            <img className="character-image" src={characters[avatar]}></img>
                        </div>
                        <div className="character-name">
                            {avatar}
                        </div>
                    </div>
            )}
            </div>
            <div className="character-next-container">
            {
                selectedCharacter &&
                <Link to="/dashboard">
                <div className="character-next-box">
                    <span style={{textDecoration:"none"}}>
                        Proceed
                    </span>
                </div>
            </Link>
            }
            </div>
        </div>
    )
}
export default CharacterSelection;