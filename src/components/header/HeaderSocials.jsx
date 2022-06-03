import React from 'react'
// import {BsLinkedin} from "react-icons/bs"
import {FaGithubAlt} from "react-icons/fa"
import {FiTwitter} from "react-icons/fi"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        {/* <a href="https://linkedin.com" target="blank"><BsLinkedin/></a> */}
        <a href="https://github.com/samsam10?tab=repositories" target="blank"><FaGithubAlt/></a>

        <a href="https://twitter.com/TrueDBriggs" target="blank"><FiTwitter/></a>

        
        
        
    </div>
  )
}

export default HeaderSocials