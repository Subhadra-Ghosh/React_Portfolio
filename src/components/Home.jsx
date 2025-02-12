import React, { use, useEffect, useRef } from 'react'
import pdf from "../pdf/resume.pdf"
import photo from './Data/photo.json'
import Typed from 'typed.js'


const Home = () => {
    const typedref = useRef(null)
    useEffect(()=>{
      const options ={
         strings:['Welcome to  my profile' ,'My Name is Subhadra Ghosh',
            'I Am MERN FULL STACK Developer' ],
            typeSpeed:50,
            backSpeed:50,
            loop:true
      }
       const typed = new Typed(typedref.current,options)
        return () =>{
          typed.destroy()
        }
    },[])
  return (
    <div className='container home' id='home'>
       <div className="left" 
        data-aos='fade-up-right' data-aos-duration='1000'
       >
          <h1 ref={typedref}> </h1>
             <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
       </div>
       <div className="right">
          <div className="image" 
          data-aos='fade-up-left' data-aos-duration='1000'
          >
              <img src={`/assets/${photo.imgSrc}`} alt=''></img>
          </div>
       </div>
    </div>
  )
}

export default Home