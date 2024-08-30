import React from 'react';
import './ProjectPage.css'; 
import { Parallax, ParallaxLayer} from '@react-spring/parallax'

const CardContainer = () => {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={1} factor={1.5} style={{ backgroundColor: '#282c34' }}>
          <h1>In Layer 01</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.5} style={{ backgroundColor: '#42f542' }}>
          <h1>In Layer 02</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default CardContainer;



