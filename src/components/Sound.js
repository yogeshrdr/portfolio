import React, {useState, useRef} from 'react'
import {AiOutlinePlayCircle, AiOutlinePauseCircle} from 'react-icons/ai'

function Sound() {
    const [audioStatus, changeAudioStatus] = useState(false);
    const myRef = useRef();


    const startAudio = () => {
        myRef.current.play();
        myRef.current.volume = 0.05;
        changeAudioStatus(true);
    };

    const pauseAudio = () => {
        myRef.current.pause();
        changeAudioStatus(false);
    };

    return (
        <div className="sound">
            
        <audio ref={myRef} src="http://docs.google.com/uc?export=open&id=12E0BCxVgHRccL0fVy6ZdP5lPr0kjogVK"  loop/>
        {audioStatus ? (
            <button className="soundButton" onClick={pauseAudio}><AiOutlinePauseCircle /></button>
        ) : (
            <button className="soundButton" onClick={startAudio}><AiOutlinePlayCircle /></button>
        )}
        </div>
    )
}

export default Sound
