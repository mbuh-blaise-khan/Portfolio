import React from 'react'
import bg from '../../assets/graduant.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
import './intro.css'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>BLaise Khan</span> <br/>  
        <span className="introSkills">
           Computer Engineer | Accountant | Web Developer | Entrepreneur
        </span>
          </span>
        <p className='introPara'> I am an Accounting & Computer Engineering student. <br /> Experience
          entrepreneur & skilled web developer in creating <br /> visually
          appealing and user friendly website</p>
          <Link to='contact' spy={true} smooth = {true}  duration={500} > <button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' /> Hire Me</button></Link>
      </div>
      <img src={bg} alt='profile'  className='bg'/>

    </section>
  )
}

export default Intro
