import React, { useRef, useState, useEffect } from 'react';

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const { boxSize, boxColor, onClick, active } = props;

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.25, 1.25, 1.25] : [1, 1, 1]}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[boxSize, boxSize, boxSize]} />
      <meshStandardMaterial attach="material" color={hovered ? 'red' : boxColor} />
    </mesh>
  );
};

export default Box;
