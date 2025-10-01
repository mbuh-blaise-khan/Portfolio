import React from 'react'
import './about.css'
import Computer from '../../assets/aboutImgs/computer.png'
import Entre from '../../assets/aboutImgs/entre.png'
import Graduant from '../../assets/aboutImgs/graduation.png'
import Leader from '../../assets/aboutImgs/leader.png'
import cv from '../../assets/cv/cv.pdf'

const About = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>Who I Am</span>
      <span className='skillDescription'>I am Mbuh Blaise Khan, from Ntinelah-Menka-Pinyin, Santa Sub-Division,
        Northwest Region of Cameroon. My background is deeply rooted in farming,
        business, and community service, which has shaped my entrepreneurial
        spirit and versatility. I began my education at Model Charity School,
        Nfum Menka (2006–2014) where I earned my First School Leaving
        Certificate (FSLC). I later pursued secondary studies at Government High
        School Menka, and due to the crisis in the Northwest/Southwest regions,
        I relocated to Yaoundé. Despite challenges, I accelerated my studies at
        Cambridge Evening School (CES) (2019-2020), excelling in sciences and emerging as
        one of the best students at CES. I continued high school at Mevick
        Bilingual Grammar School (MBGS) (2020-2022), graduating with 19/25 points in GCE
        Advanced Level Sciences. My academic journey brought me to the
        University of Bamenda, where I pursued Accounting (FEMS) and was later
        admitted into Computer Engineering (NAHPI) through a concour. I am
        currently working toward a BSc in Accounting (2025 graduation) and
        Computer Engineering (specializing in Data Science & Web Development).
        Alongside my studies, I have demonstrated strong leadership as the
        Departmental Accounting President (FEMS), managing a team and
        coordinating projects. I also founded Math Star Academy, author of the
        Math Stars O-Level Mathematics Booklet (2018–present GCE
        questions/answers, formulas, strategies, and study guides). My
        entrepreneurial side is reflected in multiple ventures: MTN/Orange
        Mobile Money Agent (3 years of experience in digital finance). CEO of
        Math Star Academic (developing into Kingdom Stars Academy, an evening
        school initiative). Founder of Farmers & Sellers Connection Platform, AgriTrade – a
        project designed to connect agricultural producers and buyers locally
        and globally. Computer Broker & Technician – selling, repairing, and
        facilitating transactions between buyers and sellers. I am passionate
        about mathematics, accounting, business, and technology, always bridging
        the gap between tech and business solutions. My teaching experience
        includes private tutoring in mathematics, where I successfully guided
        students to pass O-Level exams. Beyond academics and business, I am an
        active member of The Apostolic Church Cameroon(TACC), serving in
        evangelism, youth activities, and preaching. I am also a passionate
        pianist in training. Key strengths include: Leadership & Management –
        leading student associations and academic projects. Entrepreneurship –
        creating businesses and educational initiatives from scratch. Technology
        & Data – growing expertise in web development, computer engineering, and
        data science. Problem-Solving – developing innovative solutions in
        education, farming, business, and community challenges. Resilience &
        Adaptability – thriving despite personal, social, and political
        challenges. I believe in lifelong learning, faith-driven perseverance
        (Philippians 4:13, Matthew 19:26), and using my skills to impact my
        community, region, and beyond.</span>
    
    <span className="skillTitle2">What I Do</span>

      <div className='skillBars'>

        <div className='skillBar'>
            <img src={Graduant} alt='Graduant' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Accounting & Computer Engineering Student</h2>
                <p>Passionate about numbers and technology, combining financial
              accuracy with engineering innovation</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={Entre} alt='Entrepreneur' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Experienced Entrepreneur</h2>
                <p>
                    Founder/CEO of Maths Star Academy & author of Math Stars Ordinary
                    Level Mathematics past questions and answer, have proven skills in
                    building sustainable business
              </p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={Computer} alt='Computer' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Skilled Web Developer</h2>
                <p>
                    Proficient in modern web technologies creating responsive and
                    user-friendly applications
                </p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={Leader} alt='Leader' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Skilled & Experienced Leader</h2>
                <p>
                    Dedicated and experienced (president in Tech, academic and
                    business fileds) to leading teams, and driving projects towards
                    success.
                </p>
            </div>
        </div>
        <a 
        href={cv} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cvBtn"
      >
        Download CV
      </a>

      </div>

    </section>
  )
}

export default About
