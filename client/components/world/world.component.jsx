import React, {
  useState, useMemo, useRef, useEffect,
} from 'react';
import { useFrame } from 'react-three-fiber';
import { Stars, Sky } from 'drei';


import Ground from '../ground/ground.component.jsx';
import CarControls from '../car/car-controls.component.jsx';
import City from '../city/city.component.jsx';
import GetSpecialistArray from '../../Data/dataLoader.js';


const CAMERA_RESET_POS = { x: -100, y: 50, z: 50 };
const ROTATIONS = 80;

const World = ({ flipped }) => {
  const [structure, setStructure] = useState([]);
  const [rotation, setRotation] = useState(0);
  const group = useRef();

  useEffect(() => {
    setStructure(GetSpecialistArray());
  }, []);

  const fogColor = flipped ? 'black' : '#dee5e7';


  const rotating = (rotation !== 0 && rotation !== ROTATIONS);


  // Check if flipped, if not at right coords for flipped true or flipped false, keep spinning until you are
  useFrame(({ camera }) => {
    // console.log(camera)
    const { x, y, z } = camera.position;

    // Pulls world based on rotation
    group.current.rotation.z = rotation * Math.PI / ROTATIONS;

    // Offset for thickness of desk when rotated
    group.current.position.y = -rotation / (ROTATIONS / 10);


    // console.log(frontCar)
    if (!flipped && rotation != 0) {
      if (x != CAMERA_RESET_POS.x || y !== CAMERA_RESET_POS.y || z !== CAMERA_RESET_POS.z) {
        camera.position.x = Math.max(x - 1, CAMERA_RESET_POS.x);
        camera.position.y = Math.min(y + 1, CAMERA_RESET_POS.y);
        camera.position.z = Math.min(z + 1, CAMERA_RESET_POS.z);
      }
      setRotation(rotation - 1);
    } else if (flipped && rotation != ROTATIONS) {
      if (x != CAMERA_RESET_POS.x || y !== CAMERA_RESET_POS.y || z !== CAMERA_RESET_POS.z) {
        camera.position.x = Math.max(x - 2, CAMERA_RESET_POS.x);
        camera.position.y = Math.min(y + 1, CAMERA_RESET_POS.y);
        camera.position.z = Math.min(z + 1, CAMERA_RESET_POS.z);
      }
      setRotation(rotation + 1);
    } else {
      if (!flipped) {
        const frontEndCar = group.current.children[0].position;
        if (x != frontEndCar.x || y !== frontEndCar.y || z !== frontEndCar.z) {
          camera.position.x = Math.min(x - (CAMERA_RESET_POS.x / 30), frontEndCar.x - 2);
          camera.position.y = Math.max(y - (CAMERA_RESET_POS.y / 30), frontEndCar.y + 2);
          camera.position.z = Math.max(z - (CAMERA_RESET_POS.z / 60), frontEndCar.z + 3);
        }
      }
      if (flipped) {
        const backendEndCar = group.current.children[1].position;
        if (x != backendEndCar.x || y !== backendEndCar.y || z !== backendEndCar.z) {
          camera.position.x = Math.min(x - (CAMERA_RESET_POS.x / 30), backendEndCar.x - 2);
          camera.position.y = Math.max(y - (CAMERA_RESET_POS.y / 30), backendEndCar.y + 2);
          camera.position.z = Math.max(z - (CAMERA_RESET_POS.z / 60), backendEndCar.z + 3);
        }
      }
    }
  });

  const ground = useMemo(() => (<Ground />), []);

  const fractions = (ROTATIONS + rotation) / (ROTATIONS * (rotation / 10 + 1));

  console.log(fractions);

  return (
    <>
      { !rotating && flipped && <fog attach="fog" args={[fogColor, 5, 10]} />}

      {(rotating || !flipped)
        && (
        <>
          <ambientLight intensity={fractions * 0.4} />
          <pointLight position={[0, 100, 0]} intensity={fractions * 0.5} />
          {/* <directionalLight
            castShadow
            position={[300, 100, -200]}
            intensity={fractions * 1.2}
            shadow-bias={-0.0005}
            color="#fae8c8"
          /> */}
          <pointLight position={[300, 100, 200]} intensity={fractions * 0.8} color="#e6f6fc" />
        </>
        )}

      {(!flipped || rotating) ? <Sky sunPosition={[(fractions * 1000) - 400, ((fractions * 60)), -400]} /> : <Stars radius={300} /> }
      <group ref={group}>
        <CarControls name="frontend" side="frontend" locked={rotating || flipped} />
        <CarControls name="backend" side="backend" locked={rotating || !flipped} />
        <Ground />
        <City side="frontend" structure={structure[0]} />
        <City side="backend" structure={structure[1]} />
      </group>
    </>
  );
};


export default World;
