import ReactDOM from 'react-dom';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import { MapControls } from 'drei';
import './components/styles.css';
import MasterContainer from './components/MasterContainer.jsx';

ReactDOM.render(
  <Canvas colorManagement camera={{ position: [0, 0, 10] }}>
    <ambientLight />
    <pointLight position={[0, 0, 5]} />
    <MasterContainer />
    <MapControls />
  </Canvas>,
  document.getElementById('root'),
);
