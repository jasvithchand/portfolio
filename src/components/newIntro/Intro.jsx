import "./intro.css"
import { Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function Intro() {
  return (
    <div className="introWrapper">
        <div className="intro">
            <Parallax pages={1}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <img className="myImg"  src="/assets/my_pics/intropic.png" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-3.5}>
                    <div className="overlay">
                        <div className="my_Name"><span> Jasvith Chand Anne</span></div>
                    </div>
                </ParallaxLayer>
            </Parallax> 
        </div>
    </div>
  )
}
