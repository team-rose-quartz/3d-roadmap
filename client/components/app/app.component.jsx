import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Stats, Stars, Sky, HTML, MapControls, StandardEffects } from 'drei';


import FlipButton from '../flip-button/flip-button.component.jsx';
import Ground from '../ground/ground.component.jsx';
import FrontEndCity from '../front-end/front-end-city.component.jsx';
import Login from '../Login.jsx';

import './app.style.css';

const App = () => {
  const [flipped, setFlipped] = useState(false);


  const flip = () => {
    setFlipped(!flipped);
  };

  const fogColor = flipped ? 'black' : '#dee5e7';

  return (
    <>
      <Login />
      <FlipButton flip={flip} />
      <Canvas
        gl={{ logarithmicDepthBuffer: true, alpha: false }}
        shadowMap
        camera={{ position: [-2, 2, 3], fov: 60, far: 20 }}
      >
        <fog attach="fog" args={[fogColor, 5, 15]} />
        {/* <color attach="background" args={["#012"]} /> */}
        {flipped ? <Stars radius={300} /> : <Sky />}
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 100, 100]} />
          <Stats />
          <Ground />
          <FrontEndCity />
          {/* <StandardEffects /> */}
        </Suspense>
      </Canvas>
    </>
  );
};


export default App;
