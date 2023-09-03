import React, { useEffect, useState } from 'react';
import './css/storypage.css';
import TextToSpeech from './textToSpeech';
import { useLocation } from 'react-router-dom';
import {BsFillVolumeMuteFill, BsFillVolumeUpFill} from 'react-icons/bs';
import StoryPageTitle from './storyTitlePage';
function StoryPage(){
  const location = useLocation();
  const {storyFullData}=location.state;
    const [characters, changeCharacters]=useState(storyFullData.characters);
    const [story,changeStory]=useState(storyFullData.story);
    const [isMuted, setMute]=useState(false);
    const [currentPage,turnPage]=useState(0);
    const [displayTitle,setDisplayTitle]=useState(true);
    useEffect(()=>{
        const timer = setTimeout(() => {
            setDisplayTitle(false);
        }, 2000);
    },[currentPage])
    const handleOptionClick=(index)=>{
        const next=story[currentPage].options[index].nextPage;
        if(!isMuted){
            TextToSpeech(story[next].passage);
        }
            if(next<story.length)
        turnPage(next);
        else
        console.log("EXIT");
}
    const handleClick=()=>{
        const next=story[currentPage].nextPage;
        if(!isMuted){
            TextToSpeech(story[next].passage);
        }
        if(next<story.length)
        turnPage(next);
        else
        console.log("EXIT");
        }
    return(
        <div className="storypage-wrapper">
            <div style={{display:(displayTitle)?"block":"none"}} className="storypage-title-wrapper">
                <div><h1>{storyFullData.title}</h1></div>
            </div>
            {story[currentPage].options && 
                <div className="">
                    {story[currentPage].type=="interactive" && 
                        <div className="storypage-options-container">
                            {story[currentPage].options.map((option, index)=>
                            <div className="storypage-option" onClick={()=>handleOptionClick(index)}>
                                <div className="storypage-option-image-container">
                                    <img className="storypage-option-image" src={option.image}></img>
                                </div>
                                <div className="storypage-option-name">{option.option}</div>
                            </div>
                            )}
                        </div>
                    }
                </div>
            }
            <div className="storypage-image-container">
                <div className="storypage-mute-button" onClick={()=>setMute(!isMuted)}>{(isMuted)?<BsFillVolumeMuteFill/>:<BsFillVolumeUpFill/>}</div>
                <img key={currentPage} className="storypage-image" src={story[currentPage].background}></img>
            </div>
            <div className="storypage-passage-container">
                <div className="story-passage-left">
                    <p className="story-passage">{story[currentPage].passage}</p>
                </div>
                {
                story[currentPage].type=="non-interactive" &&
                <div className="storypage-next-button" onClick={handleClick}>
                    Next
                </div>
                }
            </div>
            {story[currentPage].character!="narrator" && 
            <>
            {[story[currentPage].character]=="you" }
            <img key={currentPage} src={characters[(story[currentPage].character)]} className="storypage-character"></img>
            
            <div key={currentPage+1} className="storypage-character-name">{story[currentPage].character}</div>
            </>
            }
        </div>
    );
}
export default StoryPage;