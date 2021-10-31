import React from 'react';
import '../assets/css/main.css'
import IntroHeader from '../components/IntroHeader';
import ResumeButton from '../components/ResumeButton';
import { AiOutlineArrowDown } from "react-icons/ai";


function Home() {
    return (
        <div className='HomeMain'>
            <div className='HomeMainIntro'>
            <IntroHeader />
            <ResumeButton />
            </div>

            <div className= 'ScrollDownDiv'>
                <div className='ScrollDown'>
                    <div className="ScrollDownHeading">
                    scroll down
                    </div>
                    <div className="ScrollDownIcon">
                        <AiOutlineArrowDown />
                    </div>
                </div>

                <div className='ScrollDown'>
                    <div className="ScrollDowne">
                        <div className="ScrollDownHeading">
                            scroll down
                        </div>
                        <div className="ScrollDownIcon">
                            <AiOutlineArrowDown />
                        </div>
                    </div>
                    
                </div>
                
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Home
