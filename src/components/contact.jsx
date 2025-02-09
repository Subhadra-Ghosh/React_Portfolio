import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contact = () => {
  return (
     <>
       <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
          data-aos='zoom-in-up' data-aos-duration='1000'
        >
            <a href='' target='_blank' className="items"><FaInstagram className='icons'/></a>
            <a  href='' target='_blank' className="items"><CiFacebook className='icons'/></a>
            <a href='https://www.linkedin.com/in/subhadra-ghosh-923410244/' target='_blank' className="items"><CiLinkedin className='icons'/></a>
            <a  href='https://github.com/Subhadra-Ghosh' target='_blank' className="items"><FaGithub className='icons'/></a>
            <a href='mailto:ghoshsubhadra85@gmail.com' target='_blank' className="items"><MdEmail className='icons'/></a>
        </div>
       </div>
     </>
  )
}

export default contact