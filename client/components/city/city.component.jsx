import React, { useMemo } from 'react';

import Road from '../road/road.component.jsx';
import OfficeGroup from '../office-group/office-group.component.jsx';
import TreeGroup from '../tree-group/tree-group.component.jsx';
import Flower from '../flower/flower.component.jsx';
import Clouds from '../clouds/clouds.component.jsx';
// import Ramen from '../ramen/ramen.component.jsx'

const City = ({ side, structure }) => {
  const top = side === 'frontend';
  console.log(side);
  // Cache elements so they are only rerendered when structure changes
  const staticElements = useMemo(() => (
    <>
      <Clouds position={[0, 2, 0]} />
      {/* <Ramen position={[0,0,-200]} scale={[.6,.6,.6]}/> */}
      <Roads count={92} />
      <TreeGroup side="right" />
      <TreeGroup side="left" />
      <Flower position={[1, 0, -5]} />
      <OfficeGroup structure={structure} />
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
    roads.push(<Road key={x} position={[0, 0, (x - 1) * -2.2]} />);
  }
  roads.push(
    <mesh position={[0,0, (-2.2 *count)/2 + 3.3]} key={'road'}>
      <meshStandardMaterial attach="material" color={"#4e4e59"} />
      <boxBufferGeometry attach="geometry" args={[.5, .05, 2.2 * count]} />
    </mesh>
  )
  return roads;
};

export default City;
