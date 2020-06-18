import React, { useRef } from 'react';
import useEventListener from '@use-it/event-listener';
import { useFrame } from 'react-three-fiber';
import Car from './car.component.jsx';


const CarControls = ({name, locked}) => {
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
    // move camera according to key presses
    if(locked) return

    Object.entries(keyPresses).forEach((e) => {
      const [key] = e;
      switch (key) {
        case 'w': 
          group.current.position.z -= 0.1; 
          break;
        case 's': 
          group.current.position.z += 0.1; 
          break;
        default:
      }
    });
  });

  // if(setCar && group.current) {
  //   console.log('weeee')
  //   setCar({
  //     ...car,
  //     x: group.current.position.x,
  //     y: group.current.position.y,
  //     z: group.current.position.z,
  //   })
  // }

  const position = name === "frontEnd" ? [0, 0.205, 1] : [0, -10.205, 1]

  const frontEnd = {
    position: [0, 0.205, 1],
    rotation: [0, Math.PI, 0],
    color: 'red'
  }


  const backEnd = {
    position: [0, -10.205, 1],
    rotation: [Math.PI, 0, 0],
    color: 'red'
  }

  const data = name === "frontEnd" ? frontEnd : backEnd

  return (
    <group ref={group} name={name}>
      <Car {...data} />
    </group>
  )
}

export default CarControls;
