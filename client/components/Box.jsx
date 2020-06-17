import React, { useRef, useState, useEffect } from 'react';
import { HTML } from 'drei';
import { useSpring, useTransition, animated } from '@react-spring/three/index.cjs';
import { useFrame } from 'react-three-fiber';

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);

  // deconstruct props  
  const {
    boxSize, boxColor, active, text,
  } = props;

  // define the spring animation
  const { spring } = useSpring({
    spring: Number(active), // not entirely sure why active needs to be converted to a number
    config: {
      mass: 5, tension: 400, friction: 50, precision: 0.0001,
    },
  });
  const scale = spring.to([0, 1], [1, 1.25])
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const opacity = spring.to([0, 1], [0.2, 1]);
  const color = spring.to([0, 1], ['#6246ea', '#e45858']);

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      scale-x={scale}
      scale-z={scale}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      rotation-y={rotation}
    >
      <boxBufferGeometry attach="geometry" args={[boxSize, boxSize, boxSize]} />
      <animated.meshPhongMaterial attach="material" color={color} opacity={opacity} transparent />
      <HTML scaleFactor={20} opacity={0.5}>
        <div className="content">
          {text}
        </div>
      </HTML>
    </animated.mesh>
  );
};

export default Box;
