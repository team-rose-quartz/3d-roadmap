import React, { useRef } from 'react';


const Ground = () => {
  const group = useRef();

  return (
    <group ref={group}>
      <mesh position={[0, -5, -96.5]} receiveShadow>
        <cylinderBufferGeometry attach="geometry" args={[100, 100, 10, 100]} />
        <meshPhongMaterial attach="material" color="#465c45" />
      </mesh>
    </group>
  );
};

export default Ground;
