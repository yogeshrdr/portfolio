import React from 'react'
import '../assets/css/about.css'
import { GoTriangleRight } from "react-icons/go";
import profile from '../assets/images/profile.png';
import ScrollAnimation from "react-animate-on-scroll";
import ProjectCard from '../components/ProjectCard';
import '../assets/css/project.css'
import ProjectContent from '../utility/project';


function Project() {
    console.log(ProjectContent)
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
                    <div className="AboutHeading">Some Things I’ve Built</div>
            
                <div className="ProductCards">
                    {ProjectContent.map((content, i) => (<ProjectCard content={content}/>))}
                </div>

            </div>
            </ScrollAnimation>
        </div>
    )
}

export default Project
