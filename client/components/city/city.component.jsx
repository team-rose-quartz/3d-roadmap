import React, { useMemo } from 'react';

import Road from '../road/road.component.jsx';
import OfficeGroup from '../office-group/office-group.component.jsx';
import TreeGroup from '../tree-group/tree-group.component.jsx';
import CloudGroup from '../cloud-group/cloud-group.component.jsx';
// import One  from '../one-floor-building/one-floor-building.component.jsx'
// import Two  from '../two-floor-building/two-floor-building.component.jsx'
// import Three  from '../three-floor-building/three-floor-building.component.jsx'

const City = ({ side, structure }) => {
  const top = side === 'frontend';
  // Cache elements so they are only rerendered when structure changes
  const staticElements = useMemo(() => (
    <>
      {/* <CloudGroup type={0} />
      <CloudGroup type={1} /> */}
      <Roads count={85} />
      <TreeGroup side="right" />
      <TreeGroup side="left" />
      <OfficeGroup structure={structure} />
      {/* <One position={[0.5, 0, -15]}/>
      <Two position={[0.5, 0, -5]}/>
      <Three position={[0.5, 0, -2]}/> */}
    </>
  ), [structure]);

  const data = {
    position: top ? [0, 0, 0] : [0, -10, 0],
    rotation: top ? [0, 0, 0] : [Math.PI, Math.PI, 0],
  };

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

export default City;
