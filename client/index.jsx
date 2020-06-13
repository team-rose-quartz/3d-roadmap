import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import MasterContainer from './components/MasterContainer.jsx';
import { MapControls, OrbitControls } from 'drei';
import GetSpecialistArray from './Data/dataLoader.js';
import "./components/styles.css";

function Camera(props) {
  const ref = useRef();
  const { setDefaultCamera } = useThree();
  // Make the camera known to the system
  useEffect(() => setDefaultCamera(ref.current), []);
  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
}


ReactDOM.render(
  <Canvas colorManagement>
    <Camera position={[0, 0, 10]} />
    <ambientLight />
    <pointLight position={[0, 0, 5]} />
    <MasterContainer />
    <MapControls />
    <OrbitControls />
  </Canvas>,
  document.getElementById('root'),
);
