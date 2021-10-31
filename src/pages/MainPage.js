import React from 'react'
import Home from '../mainPage/Home'
import '../assets/css/main.css'
import About from '../mainPage/About'
import Skills from '../mainPage/Skills'
import Contact from '../mainPage/Contact'
import Project from '../mainPage/Project'

function MainPage() {
    return (
        <div className="MainPage">
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    )
}

export default MainPage
