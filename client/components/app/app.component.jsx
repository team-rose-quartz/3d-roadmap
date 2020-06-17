import React, {Suspense, useState} from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import { Stats, Stars, Sky, HTML, MapControls } from 'drei'

import FlipButton from '../flip-button/flip-button.component.jsx'
import Ground from '../ground/ground.component.jsx'
import FrontEndCity from '../front-end/front-end-city.component.jsx';

import './app.style.css'

const ManualControls = () => {
  const { camera } = useThree();
  const keyPresses = {};
  const handleKeyDown = (e) => {
    // console.log(camera.rotation);
    // console.log(e.key);
    if (!keyPresses[e.key]) {
      keyPresses[e.key] = new Date().getTime();
    }
  };
  const handleKeyUp = (e) => {
    delete keyPresses[e.key];
  };
  useEventListener('keydown', handleKeyDown);
  useEventListener('keyup', handleKeyUp);
  useFrame(() => {
    // move camera according to key pressed
    Object.entries(keyPresses).forEach((e) => {
      const [key, start] = e;

      switch (key) {
        case 'w': camera.position.y += 0.1; break;
        case 's': camera.position.y -= 0.1; break;
        case 'a': camera.position.x -= 0.1; break;
        case 'd': camera.position.x += 0.1; break;
        case 'q': camera.position.z += 0.1; break;
        case 'e': camera.position.z -= 0.1; break;
        // case 'q': camera.rotateY(0.01); break;
        // case 'e': camera.rotateY(-0.01); break;
        case 'Escape': camera.position.y = 0; camera.position.x = 0; camera.position.z = 5; break;
        default:
      }
    });
  });
  return null;
};

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

        {flipped ? <Stars radius={300}/> : <Sky />}
        <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[0, 100, 100]} />
        <MapControls />
        <ManualControls />
        <Stats />
        <Ground />
        <FrontEndCity />

        </Suspense>
    </Canvas>
  )

}


export default App