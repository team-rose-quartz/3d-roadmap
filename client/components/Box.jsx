import React, { useRef, useState, useEffect } from 'react';
import { HTML } from "drei";
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const { boxSize, boxColor, active, text } = props;

  // define the spring animation
  const { spring } = useSpring({
    spring: Number(active), // not entirely sure why active needs to be converted to a number
    config: {
      mass: 5, tension: 400, friction: 50, precision: 0.0001,
    },
  });
  const scale = spring.to([0, 1, 0], [1, 1.25, 0]);
  const rotation = spring.to([0, 1, 0], [0, Math.PI, 0]);

  return (
    <a.mesh
      {...props}
      ref={mesh}
      // scale={active ? [1.25, 1.25, 1.25] : [1, 1, 1]}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      rotation-y={rotation}
      // scale-x={scale}
      // scale-z={scale}
    >
      <boxBufferGeometry attach="geometry" args={[boxSize, boxSize, boxSize]} />
      <meshStandardMaterial attach="material" color={hovered ? 'red' : boxColor} />
      <HTML scaleFactor={20}>
        <div className="content">
          {text}
        </div>
      </HTML>
    </a.mesh>
  );
};

export default Box;
