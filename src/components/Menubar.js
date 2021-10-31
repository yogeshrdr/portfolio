import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Modal from './Modal';


function Menubar({open}) {

    return (
        <div className="menubar">
            <button className="menubarbutton" onClick={open}> <AiOutlineMenu /> </button>
        </div>
    )
}

export default Menubar
