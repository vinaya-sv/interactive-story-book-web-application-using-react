import React, { useState } from 'react';
import '../css/interactions/quiz.css';
function Quiz({option}){
    const [selectedOption, selectOption]=useState(-1);
    const changeAnswerColor=(index)=>{
        if(index==selectedOption && index==option.answer)
            return "rgba(0, 128, 0, 0.8)";
        else if(index==selectedOption)
            return "rgba(255, 0, 0, 0.8)";
    }
    return(
        <div className='quiz' style={{background:`url(${option.optionBG})`}}>
            <div className='quiz-container'>
                <button className='option-question'>{option.question}</button>
                <div className='quiz-option'>
                    {option.options.map((op, index)=><button style={{backgroundColor:changeAnswerColor(index)}} onClick={()=>selectOption(index)} className="option-answers">{op}</button>)}
                </div>
            </div>
        </div>
    );
}
export default Quiz;