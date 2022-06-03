import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
import {ImHtmlFive2} from "react-icons/im"
import {FaCss3} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {SiPostgresql} from "react-icons/si"
import {BsGithub} from "react-icons/bs"
import {SiVisualstudiocode} from "react-icons/si"
import {GrMysql} from "react-icons/gr"
import {FaReact} from "react-icons/fa"

const Experience = () => {
  return (
    <section id='experience'>
    <h5>Tools and Technologies</h5>
    <h2>I Work With</h2>


    <div className="container experience__container">

      <div className="experience__frontend">
        {/* <h3>Frontend Development</h3> */}
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <ImHtmlFive2 size={30} className="" />
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>CSS</h4>
           <FaCss3 size={30} className='' />

            {/* <small className='text-light'>Intermediate</small> */}
           </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <SiJavascript size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
            <SiTailwindcss size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <FaReact size={30}className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>

           {/* <article className='experience__details'> */}
            {/* <BsPatchCheckFill className='experience__details-icon'/> */}
            <div>
            {/* <h4>Tailwind</h4> */}
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          {/* </article> */}


        </div>
      </div>

    {/****************** END OF FRONTEND********/}

      <div className="experience__backend">
          {/* <h3>Backend Development</h3> */}
              <div className="experience__content">
                 <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Git</h4>
            <BsGithub size={30} className='' />

                      {/* <small className='text-light'>Experienced</small> */}
                    </div>
                  </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>VsCode</h4>
            <SiVisualstudiocode size={30} className='' />

            {/* <small className='text-light'>Intermediate</small> */}
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MYSQL</h4>
           <GrMysql size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
           </div>
          </article>


          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>SQL</h4>
            <SiPostgresql size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>

          {/* <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Workbench</h4>
            {/* <small className='text-light'>Experienced</small> */}
            {/* </div> */}
          {/* </article> */} 
          </div>
    </div>
    </div>
    </section>
  )
}

export default Experience