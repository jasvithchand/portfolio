import React from 'react'
import './n_footer.css'

export default function Footer() {
  return (
    <div className="footerWrapper">
        <div className="footerContainer">
            <div className="footerTop">
                <div className="footerName"><h1>Lets get in touch</h1></div>
            </div>
            <div className="footerBottom">
                <div className="socialLinks">
                    <a href="https://www.linkedin.com/in/jasvith/" target="_blank" rel="noopener noreferrer" className='socialLink'>
                        <img src="/assets/logos/linkedin-icon.svg" alt="" className="iconImg" />
                        <div className="iconLabel">Linkedin</div>
                    </a>
                    <a href="mailto:jasvithanne@gmail.com" target="_blank" className='socialLink'>
                        <img src="/assets/logos/Gmail.png" alt="" className="iconImg"  />
                        <div className="iconLabel">Email</div>
                    </a>
                    <a href="https://www.instagram.com/hardstoic" target="_blank" rel="noopener noreferrer" className='socialLink'>
                        <img src="/assets/logos/Instagram.png" alt="" className="iconImg" />
                        <div className="iconLabel">Instagram</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
