import React from 'react';
import './footer.css';
import imgSrc from './dance.gif';

export default function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <div className="footerLeft">
          <img src={imgSrc} alt="Image here" className="footerImg" />
        </div>
        <div className="footerRight">
          <div className="get_in_touch_msg">Let's get in Touch!</div>
          <div className="socialLinks">
                <a href="https://www.linkedin.com/in/jasvith/" target="_blank" rel="noopener noreferrer" className='socialLink'>
                  <img src="/assets/logos/Linkedin.png" alt="" className="iconImg" />
                  <div className="iconLabel">Linkedin</div>
                </a>
                <a href="mailto:jasvithanne@gmail.com" className='socialLink'>
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
  );
}
