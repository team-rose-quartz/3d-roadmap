import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Stats, Stars, Sky, HTML, MapControls, StandardEffects } from 'drei';


import FlipButton from '../flip-button/flip-button.component.jsx';

import Login from '../login/login.component.jsx';
import World from '../world/world.component.jsx'

import './app.style.css';


const App = () => {
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped(!flipped)

  return (
    <>
      <Login />
      <FlipButton flip={flip} />
      <Canvas
        // gl={{ logarithmicDepthBuffer: true, alpha: false }}
        shadowMap
        camera={{ position: [-2, 2, 3]}}
        // camera={{ position: [-2, 2, 3], fov: 60, far: 20 }}
      >
        <Stats />
        {/* <ambientLight intensity={0.1} /> */}
        <pointLight position={[1, 0.25, 0]} distance={1} intensity={2}/>
        <pointLight position={[-1, 0.25, -20]} />
        {/* <pointLight position={[100, 100, -10]} /> */}
        {/* <pointLight position={[-10, -10, -5]} /> */}
        <Suspense fallback={null}>
          <World flipped={flipped} />
        </Suspense>
      </Canvas>
    </>
  );
};


export default App;
