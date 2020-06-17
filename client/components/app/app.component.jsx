import React, {Suspense, useState} from 'react';
import { Canvas } from 'react-three-fiber';
import { Stats, Stars, Sky, HTML, MapControls } from 'drei'

import FlipButton from '../flip-button/flip-button.component.jsx'
import Ground from '../ground/ground.component.jsx'
import FrontEndCity from '../front-end/front-end-city.component.jsx';

import './app.style.css'


const App = () => {
  const [flipped, setFlipped] = useState(false)

  const flip = () => {
    setFlipped(!flipped)
  }

  return (
    <Canvas       
    gl={{ logarithmicDepthBuffer: true, alpha: false }}
    shadowMap
    camera={{ position: [0, 15, 35] }}>
    {/* <color attach="background" args={["#012"]} /> */}
        <FlipButton flip={flip}/>

        <Stars radius={300}/>
        {/* <Sky /> */}
        <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[0, 100, 100]} />
        <MapControls />
        <Stats />
        <Ground />
        <FrontEndCity />

        </Suspense>
    </Canvas>
  )

}


export default App