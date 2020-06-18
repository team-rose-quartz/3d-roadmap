import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { MapControls, OrbitControls } from 'drei';
import useEventListener from '@use-it/event-listener';
import './components/styles.css';
import MasterContainer from './components/MasterContainer.jsx';
import Login from './components/Login.jsx';

// const ZoomControls = (props) => {
//   useFrame(({ clock, camera }) => camera.updateProjectionMatrix(camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30));
//   return null;
// };

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

const CreateCanvas = () => (
  <Canvas colorManagement camera={{ position: [0, 0, 7] }}>
    <ambientLight />
    <pointLight position={[0, 0, 100]} />
    <MasterContainer />
    {/* <MapControls enableRotate={false} /> */}
    {/* <OrbitControls enableRotate={false} /> */}
    {/* <ZoomControls /> */}
    <ManualControls />
  </Canvas>
);

ReactDOM.render(
  <>
    <CreateCanvas />
    <Login />
  </>,
  document.getElementById('root'),
);
