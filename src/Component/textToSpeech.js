import React, { useEffect, useState } from 'react'


const msg = new SpeechSynthesisUtterance();
function TextToSpeech(message) {
    msg.text = message;
    window.speechSynthesis.speak(msg);
}

export default TextToSpeech;