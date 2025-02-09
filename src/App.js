import React, { useEffect } from 'react';
import Navbar from './components/navbar'
import Home from './components/Home'
import './App.css';
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact';
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
      Aos.init()
  }, [])
  
  return (
    <>
        <Navbar/>
          <div className='container'>
            <Home/>
            <Skills/>
            <Projects/>
            <Contact/>
          </div>

    </>
  );
}

export default App;
