import React from 'react'
import Workspace from '../../components/workspace/Workspace'
import Intro from '../../components/newIntro/Intro' 
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



export default function Home() {
  return (
    <div>
      <Intro/>
      <Workspace/>
    </div>
  )
}
