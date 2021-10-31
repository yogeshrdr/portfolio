import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Sound from './components/Sound';
import './assets/css/main.css'
import Menubar from './components/Menubar';
import MainPage from './pages/MainPage';
import './assets/css/animate.css'
import Modal from './components/Modal';

function App() {
  const myRef = useRef();
  const [width,setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setWidth(myRef.current.offsetWidth)
          setHeight(myRef.current.offsetHeight)
      }
      window.addEventListener('resize', handleResize)
      return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [])


  return (
    <div className="App" ref={myRef}>
      <div className="AppContainer">
        {width < 900 ? <Menubar open = {() => setOpen(true)}/> : <SideNav />}
        {open === false ? ( 
          <>
                  <MainPage />
                  <Sound />
          </>
        )
        : 
        (        
        <Modal close = {() => setOpen(false)}/>
        )}

      </div>
    </div>
  );
}

export default App;
