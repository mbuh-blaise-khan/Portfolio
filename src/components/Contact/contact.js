import React, { useRef } from 'react'
import './contact.css'
import Facebook from '../../assets/clientsImgs/facebook.png'
import InstagramIcon from '../../assets/contactImgs/instagram.png'
import LinkinIcon from '../../assets/contactImgs/linkin.png'
import TwitterIcon from '../../assets/contactImgs/twitter.png'
import YouTubeIcon from '../../assets/contactImgs/youtube.png'
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cdo473t', 'template_d2s6hvg', form.current, {
        publicKey: 'wg2kQF1jKeifViCGL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert ("Email sent successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert ("Failed to send email, please try again");
        },
      );
  };

  return (
    <section id='contactPage'>

        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientsDesc'> 
                I have had the oppurtunity to work with a number of groups including
                cooperative societies, educational institutions, small businesses,
                non-profits, and individuals. Some of my notable groups/organisations
                i have worked with include:
            </p>

            <div className='clientsImgs'>
                <a href='https://facebook.com/groups/951065199491469/' target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt='Facebook'  className='clientsImg' />
                </a>
            </div>
        </div>

        <div id='contact'>
            <h1 className='contactPageTitle'> Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>

            <form ref={form} className='contactForm' onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='name'/>
                <input type='email' className='email' placeholder='Your Email' name='email'/>
                <textarea name='message' rows="5" placeholder='Your Message' className='msg'/>
                <button type='submit' className='submitBtn' value="send">Submit</button>
            <div className="links">
              <a href="https://www.linkedin.com/in/mbuh-blaise-khan-0637472a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer"><img src={LinkinIcon} alt="LinkinIcon" className="link" /> </a>

              <a href="https://x.com/MbuhKhan178868?t=tKb6HlZ_y9oyrsLaP5Tf9Q&s=09 " target="_blank" rel="noopener noreferrer" ><img src={TwitterIcon} alt="Twitter" className="link" /></a>

              <a href="https://youtube.com/@mbuhkhan?" target="_blank" rel="noopener noreferrer" ><img src={YouTubeIcon} alt="Youtube" className="link" /> </a>
              
              <a href="https://www.instagram.com/blaizisco_m.b.k?igsh=MTN6cnY0eXhoaTZqbg==" target="_blank" rel="noopener noreferrer" ><img src={InstagramIcon} alt="Instagram" className="link" /> </a>
            </div>
            </form>
        </div>
      
    </section>
  )
}

export default Contact
