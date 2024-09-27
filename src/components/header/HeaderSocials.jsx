import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/manan-nasir-243aa6190/" target="_blank" rel="noopener noreferrer"> <BsLinkedin /> </a>
        <a href="https://github.com/mannan49" target="_blank"> <BsGithub /> </a>
        <a href="http://twitter.com/MMananNasir1" target="_blank" rel="noopener noreferrer"> <BsTwitter /> </a>
    </div>
  )
}

export default HeaderSocials