import "./intro.css";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="introWrapper">
      <div className="introContainer">
        <div className="introLeft"> 
          <div className="introText">
            <span className="introTexthello">Hello, I'm Jasvith and I am a</span>
            <div className="introTextTypewriter">
              <Typewriter options={{
                            strings: ['Web Developer', 'Full Stack Developer'],
                            autoStart: true,
                            loop: true,
                           }}
              />
            </div>
          </div>
        </div>
          <div className="introRight">
            <img src="/assets/my_pics/intro_pic.png" alt="Nerd" className="my_img" />
          </div>
      </div>
    </div>
  )
}
