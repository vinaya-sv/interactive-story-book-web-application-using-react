import React, { Component, useEffect, useRef } from 'react';
import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './css/flipbook.css';
import Page from './page';
import { Link, useLocation } from 'react-router-dom';
import pageflipaudio from '../Assets/pageflip.mp3';
import Quiz from './interactions/quiz';
import { IoMdArrowRoundBack } from "react-icons/io";
function FlipBook(){
    const location = useLocation();
    const {storyFullData}=location.state;
    const book=useRef();
    const playPageFlipAudio=()=>{
        const audio=new Audio(pageflipaudio);
        audio.play();
    }
    const [optionCorrectness, setOptionValue]=useState(false)
    const [bookContents, setBookContents]=useState(storyFullData.story);
    useEffect(()=>{
    },[])
    return(
        <div className="flipbook-wrapper">
            <div className="book-wrapper">
                <HTMLFlipBook ref={book} width={500} height={600} showCover={true} onFlip={playPageFlipAudio} 
                className='html-flip-book' style={{display:"flex",alignItems:"center"}} clickEventForward={true}>
                    {bookContents.map((page)=>
                        <div>
                        {page.option && <Quiz option={page.option} setOption={setOptionValue} bookref={book}/>}
                        <Page className="page" page={page}/>
                        </div>
                    )}
                </HTMLFlipBook>
            </div>
            <Link to="/"><div className="back-button"><IoMdArrowRoundBack/></div></Link>
        </div>
    );

}
export default FlipBook;


/*
 const [currentLeft, setCurrentLeft]=useState(0);
    const [currentRight, setCurrentRight]=useState(1);
    const [bookContent, setBookContents]=useState([
        "My name is Vinaya",
        "I am 19 years old",
        "I love painting"
    ])
    const [rightStyle, setRightStyle]=useState("rotateY(0deg)");
    const flipToLeft=()=>{
        setRightStyle("rotateY(180deg)");
        setCurrentLeft(currentLeft+2);
        setCurrentRight(currentRight+2);
    }
    return(
        <div>
        <br/><br/><br/><br/><br/>
            <div className="flipbook-wrapper">
                <div className="left-page">
                    <p>{bookContent[currentLeft]}</p>
                </div>
                <div className="right-page" style={{transform:rightStyle}}>
                    <p>{bookContent[currentRight]}</p>
                </div>
                <br/>
            </div>
            <button onClick={()=>flipToLeft()}>left!</button>
            <button onClick={()=>flipToRight()}>right!</button> 
            </div>
*/