import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

function Modal({close}) {
    
    return (
        <ScrollAnimation className="modal" animateIn="fadeInRightBig"  duration={0.3} delay={0}>
            <button onClick={close}>X</button>
        </ScrollAnimation>
    )
}

export default Modal
