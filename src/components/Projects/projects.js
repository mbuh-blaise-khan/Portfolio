import React from 'react'
import './projects.css'
import Agritrade from '../../assets/projectImgs/agritrade.png' 
import Math from '../../assets/projectImgs/image.png' 
import Hardware from '../../assets/projectImgs/hardware.jpg' 
import Calculator from '../../assets/projectImgs/calculator.png' 

const Projects = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Projects</h2>
      <span className='worksDescription'>
        I take pride in paying attendtion to the smallest details of projects I
        have worked on as an accounting and computer engineering student, web
        developer, and entrepreneur. Each project reflects my ability to combine
        technical skills, creativity, and problem-solving to build solutions
        that are both functional and user-friendly. These works showcase my
        journey of growth, my passion for technology, and my commitment to
        delivering value through innovation.
      </span>
      <div className='worksImgs'>
        <img src={Agritrade} alt='Agritrade' className='worksImg'/>
        <img src={Math} alt='Math' className='worksImg'/>
        <img src={Hardware}alt='Hardware' className='worksImg'/>
        <img src={Calculator} alt='Calculator' className='worksImg'/>
      </div>
     <a
        href="https://github.com/mbuh-blaise-khan?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
     >
        <button className='worksBtn'>
            See More
        </button>
      </a>
    </section>
  )
}

export default Projects
