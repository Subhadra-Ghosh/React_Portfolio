import React from 'react'
import Skills from './Data/skills.json'

const skills = () => {
  return (
    <div className="container skills" id='skills'>
        <h1>SKILLS</h1>
        <div className="items" >
          {Skills.map((data)=>(
            <>
              
                <div className="item" key={data.id}
                  data-aos='flip-left' data-aos-duration='1000'
                >
                  <img src={`/assets/${data.imageSrc}`} alt=''></img>
                  <h4>{data.title}</h4>
                </div>
              
            </>
        )
        
        )}
        </div>
    </div>
  )
}

export default skills