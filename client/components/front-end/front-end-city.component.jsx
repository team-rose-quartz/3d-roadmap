import React, { useRef, useMemo } from 'react';
import Road from '../road/road.component.jsx';
import OfficeFloor from '../office-floor/office-floor.component.jsx';
import PineTree from '../pine-tree/pine-tree.component.jsx';

const FrontEndCity = ({top}) => {

  const staticElements = useMemo(() => (
    <>
      <Roads count={85} />
      <PineTree position={[0.5, 0, -2]} />
      <PineTree position={[-0.5, 0, -6]} />
      <PineTree position={[-0.8, 0, -5]} />
      <PineTree position={[0.5, 0, -15]} />
      <Offices officeArray={[5, 8, 6, 11, 17, 5, 8, 14, 6, 12, 7]} />
    </>
  ), [])

  const data = {
    position: top ? [0,0,0] : [0,-10,0],
    rotation: top ? [0,0,0] : [Math.PI,Math.PI,0]
  }

  return (
    <group {...data}>      
      {staticElements}
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

const Offices = ({ officeArray }) => {
  const offices = officeArray.map((val, index) => <Office key={index} count={val} x={index % 2 ? 0.85 : -0.85} z={index * -8} />);
  return offices;
};


const Office = ({ count, z, x }) => {
  const office = [];
  for (let x = 0; x < count; x++) {
    office.push(<OfficeFloor key={x} position={[0, x * 0.2, 0]} />);
  }
  return (
    <group position={[x, 0.15, z]} scale={[0.8, 1, 0.8]}>
      {office}
    </group>

  );
};

export default FrontEndCity;
