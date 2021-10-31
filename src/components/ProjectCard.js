import React from 'react'
import '../assets/css/projectcard.css';
import { FiFolder, FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";


function ProjectCard({content}) {
    const techused = ["React", "Redux", "MaterialUI", "NodeJs", "Express", "MongoDB", "SocketIO" ]
    return (
        <div className="projectCard">
            <div>
                <div className="projectCardIconDiv">
                    <div className="projectCardFolderIcon"><FiFolder /></div>
                    <div className="projectCardGitDiv">
                        {content?.isGithub === true && 
                        <a href={content?.githubLink} target="_blank" rel="noreferrer">
                            <FiGithub className="projectIcon" />
                        </a>
                        }
                        {content?.isProject === true && 
                        <a href={content?.projectlink}  target="_blank" rel="noreferrer">
                            <BiLinkExternal className="projectIcon" />
                        </a>
                        }
                    </div>
                </div>
                <div className="ProjectHeading">{content?.title}</div>
                <div className="Projecttitle">{content?.description}</div>
            </div>
            <div className="ProjectTechUsed">
                {content?.techused?.map((item, i) => (
                    <div key={i}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard
