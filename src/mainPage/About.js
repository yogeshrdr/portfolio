import React from 'react'
import '../assets/css/about.css'
import { GoTriangleRight } from "react-icons/go";
import profile from '../assets/images/profile.png';
import ScrollAnimation from "react-animate-on-scroll";


function About() {
    return (
        <div className="About"> 
            <ScrollAnimation
                className="About"
                animateIn="bounceInDown"
                
                animateOnce ={true}
                duration={1.5}
                delay={0.1}
            >
                <div className="AboutDiv">
                    <div className="AboutHeading">Me, Myself and I</div>
            
                    <div className="AboutParagrahDiv">
                        <div>
                            <div className="AboutParagrah">
                                Hello! My name is Yogesh a Full Stack Developer & App Developer located in India.
                                Passionate in buliding fast & dynamic Applications includes problem solving skills.
                            </div>
                            <div className="AboutParagrah">
                                Computer Science Student at SRM Institute of Science and Technology, Currently at 3rd year. 
                                Hands on Data Structures and Algorithms, Frontend Engineering, Database Scalability, API Testing, Middleware Services
                            </div>
                            <div className="AboutParagrah">
                                Here are a few technologies I’ve been working with recently:
                            </div>
                            <div className="AboutmoreTech">
                                <div className="AboutmoreTechfelx">
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>JavaScript (ES6+)</div></div>
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>Python</div></div>
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>cpp</div></div>
                                </div>
                                <div className="AboutmoreTechfelx">
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>React</div></div>
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>Redux</div></div>
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>Tailwind CSS</div></div>
                                </div>
                                <div className="AboutmoreTechfelx">
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>Node.js</div></div>
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>Mongodb</div></div>
                                    <div className="AboutmoreTechitem"><GoTriangleRight /><div>firebase</div></div>
                                </div>
                            </div>
                        </div>
                    <div>

                        <div className="AboutImage">
                            <img className="AboutImage" src={profile} alt="AboutImage" />
                        </div>
                        <div className="AboutImageDiv">

                        </div>
                    </div>
                </div>

            </div>
            </ScrollAnimation>
        </div>
    )
}

export default About
