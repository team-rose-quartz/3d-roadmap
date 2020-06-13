import React, { useRef, useState, useEffect } from 'react';
import { HTML } from "drei";
import './styles.css';

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const { boxSize, boxColor, active, text } = props;

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
      <HTML scaleFactor={20}>
        <div class="content">
          {text}
        </div>
      </HTML>
    </mesh>
  );
};

export default Box;
