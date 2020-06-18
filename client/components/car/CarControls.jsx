import React, { useRef } from 'react';
import useEventListener from '@use-it/event-listener';
import { useFrame } from 'react-three-fiber';
import Car from './car.component.jsx';

const CarControls = () => {
  const group = useRef();
  const keyPresses = {};
  const handleKeyDown = (e) => {
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
      const [key] = e;
      switch (key) {
        case 'w': group.current.position.z -= 0.1; break;
        case 's': group.current.position.z += 0.1; break;
        default:
      }
    });
  });

  return (
    <group ref={group}>
      <Car position={[0, 0.205, 1]} rotation={[0, Math.PI, 0]} color="red" />
    </group>
  )
}

export default CarControls;
