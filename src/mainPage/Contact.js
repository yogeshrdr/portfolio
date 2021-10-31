import React from 'react'
import '../assets/css/about.css'
import { GoTriangleRight } from "react-icons/go";
import profile from '../assets/images/profile.png';
import ScrollAnimation from "react-animate-on-scroll";


function Contact() {
    return (
        <div className="About"> 
            <ScrollAnimation
                className="About"
                animateIn="bounceInDown"
                animateOnce ={true}
                duration={2}
                delay={0.1}
            >
                <div className="AboutDiv">
                    <div className="AboutHeading">Get In Touch</div>
            
                <div className="">

                </div>

            </div>
            </ScrollAnimation>
        </div>
    )
}

export default Contact
