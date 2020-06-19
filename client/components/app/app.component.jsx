import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Stats, Stars, Sky, HTML, MapControls, StandardEffects } from 'drei';


import FlipButton from '../flip-button/flip-button.component.jsx';

import Login from '../login/login.component.jsx';
import World from '../world/world.component.jsx';

import './app.style.css';


const App = () => {
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped(!flipped);

  return (
    <>
      <Login />
      <FlipButton flip={flip} />
      <Canvas
        gl={{ logarithmicDepthBuffer: true, alpha: false }}
        shadowMap
<<<<<<< HEAD
        camera={{ position: [-2, 2, 3] }}
=======
        camera={{ position: [-2, 2, 3]}}
>>>>>>> 1fa5c0f804f10b3a9b9726813f01424f0626ee43
      >
        <Stats />
        <ambientLight />
        <pointLight position={[0, 100, 100]} />
        <Suspense fallback={null}>
          <World flipped={flipped} />
        </Suspense>
      </Canvas>
    </>
  );
};


export default App;
