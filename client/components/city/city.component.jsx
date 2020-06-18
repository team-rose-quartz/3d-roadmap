import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import { Canvas, useThree, useFrame } from 'react-three-fiber';
import { HTML } from 'drei';

import Road from '../road/road.component.jsx';
import OfficeGroup from '../office-group/office-group.component.jsx';
import PineTree from '../pine-tree/pine-tree.component.jsx';
import CarControls from '../car/CarControls.jsx';

import GetSpecialistArray from '../../Data/dataLoader';

const CameraControls = (props) => {
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
    // move camera according to key pressed
    Object.entries(keyPresses).forEach((e) => {
      const [key, start] = e;
      switch (key) {
        case 'w': camera.position.z -= 0.1; break;
        case 's': camera.position.z += 0.1; break;
        case 'Escape': camera.position.y = 0; camera.position.x = 0; camera.position.z = 5; break;
        default:
      }
    });
  });
  return null;
};


const City = () => {
  const [structure, setStructure] = useState([]);
  useEffect(() => {
    setStructure(GetSpecialistArray());
  }, []);
  return (
    <group>
      {/* <Car position={[0, 0.205, 1]} rotation={[0, Math.PI, 0]} color="red" /> */}
      <CarControls />
      <Roads count={85} />
      <OfficeGroup structure={structure} />
      <PineTree position={[0.5, 0, -2]} />
      <PineTree position={[-0.5, 0, -6]} />
      <PineTree position={[-0.8, 0, -5]} />
      <PineTree position={[0.5, 0, -15]} />
      <CameraControls />
    </group>
  );
};

const Roads = ({ count }) => {
  const roads = [];
  for (let x = 0; x < count; x++) {
    roads.push(<Road key={x} position={[0, 0, (x - 1) * -2.28]} />);
  }
  return roads;
};

export default City;
