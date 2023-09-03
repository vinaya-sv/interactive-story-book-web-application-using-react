import React from 'react';
import './css/storycard.css';
function Storycard(props){
    const {title, author, image}=props.story;
    return(
        <div className="story-card-wrapper">
            <div className="story-card-image-container">
                <img className="story-card-image" src={image}></img>
            </div>
            <div className="story-card-details">
                <span className="title">{title}</span>
                <span className="author">{author}</span>
            </div>
        </div>
    );
}
export default Storycard;