import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import 'animate.css'




const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h4 >Hello I'm</h4>
          <h1>Ogundipe Olanrewaju Samuel</h1>
          <div className="wrapper">
              <div class="typing-demo">Front-End Developer</div>
          </div>
          <CTA/>
          <HeaderSocials/>

           <div className="me">
           <img src={ME} alt="me" />
           </div>
          

        <a href="#contacts" className="scroll__down">Scroll Down</a>
        
        </div>      

      
    </header>
  )
}

export default Header