import React from 'react'
import { useThree, useFrame } from 'react-three-fiber';
import useEventListener from '@use-it/event-listener';

// JSX that wraps everything

// Data strtcuture
    // F.E Car position
    // B.E Car position
    // Fixed point camera
    // Flipped status
    // Camera position


// Lock controls

// Store car position

// Move camera to fixed position

// Rotate geometry

// Move to other cars position

// Release controls


const ManualControls = ({freeze}) => {
    const { camera } = useThree();
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
        if(freeze) return

        // move camera according to key pressed
        Object.entries(keyPresses).forEach((e) => {
        const [key, start] = e;
        // console.log(camera.position);
        switch (key) {
            case 'w': camera.position.z -= 0.1; break;
            case 's': camera.position.z += 0.1; break;
            case 'Escape': camera.position.y = 50; camera.position.x = -100; camera.position.z = 50; break;
            default:
        }
        });
    });
    return null;
  };

  
  export default ManualControls