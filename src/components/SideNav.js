import React from 'react';
import NavbarRoutes  from '../routes/navRoutes';
import { AiFillLinkedin , AiOutlineGithub, AiFillFilePdf } from "react-icons/ai";
function SideNav() {
    
    const SideNavIcon = [ {icon: <AiFillLinkedin />, link: 'https://www.linkedin.com/in/yogesh-5215aa202' }, 
                        {icon: <AiOutlineGithub />, link: 'https://github.com/yogeshrdr' }, 
                        {icon: <AiFillFilePdf />, link: 'https://drive.google.com/file/d/1uZSHDFesdrkBVpjiXOreXlaywDNMc5Fh/view?usp=sharing' } ];

    const onClick = (nav) => {
        console.log(nav.link);
    }

    return (
        <div className="SideNav">
            <div className='SideNavMain'>
                <div className='SideNavName'>Yogesh</div>
                <div className='SideNavTitle'>Web Developer</div>
            </div>
            <div className='SideNavContent'>
                {NavbarRoutes.map((nav, i) => (
                    <div key={i} className='SideNavContentbar'>
                        {nav.title}
                    </div>
                ))}
            </div>

            <div className='SideNavIconBar'>
                {SideNavIcon.map((icon, i)=> (
                    <a className="noDecoration" href={icon.link} target="_blank" rel="noreferrer">
                        <div key={i} className='SideNavIcon'>
                            {icon.icon}
                        </div>
                    </a>
                )
                )}
            </div>
        </div>
    )
}

export default SideNav
