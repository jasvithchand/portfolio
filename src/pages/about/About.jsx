import './about.css'
import Prof from '../../components/Prof/Prof';
import { useEffect } from 'react';


export default function About() {


  return (
    <div className='About'>
        <div className="aboutWrapper">
            <div className="aboutContainer">
                <div className="aboutLeft"> 
                    <img src="/assets/my_pics/about_pic.jpeg" alt="" className="aboutImg" />
                </div>
                <div className="aboutRight">
                    <span className="aboutRighttexttop">hey 👋🏽, <br/> my name is Jasvith.</span>
                    <span className="aboutRighttextbottom"> I love coding cool stuff, mainly using Python and ReactJs. I call myself a Full Stack Developer. 
                    When I'm not in code land, you'll find me owning FPS games, snapping photos, and geeking out on Marvel movies. Books? Well, they happen occasionally.
                    Outside of all that, I'm constantly diving into new technologies in my free time. 
                    <br/><br/>
                    Cheers,<br/>
                    Jasvith</span>
                </div>
            </div>
        </div>
        <div className="about_prof">
            <Prof/>
        </div>
    </div>
  )
}
