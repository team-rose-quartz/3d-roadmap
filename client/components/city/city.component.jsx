import React, {useMemo} from 'react';

import Road from '../road/road.component.jsx';
import OfficeGroup from '../office-group/office-group.component.jsx';
import PineTree from '../pine-tree/pine-tree.component.jsx';
import Tree from '../tree/tree.component.jsx'
import Flower from '../flower/flower.component.jsx'
import Clouds from '../clouds/clouds.component.jsx'
// import One  from '../one-floor-building/one-floor-building.component.jsx'
// import Two  from '../two-floor-building/two-floor-building.component.jsx'
// import Three  from '../three-floor-building/three-floor-building.component.jsx'

const City = ({ side, structure }) => {
  const top = side === 'frontend'
  console.log(side)
  // Cache elements so they are only rerendered when structure changes
  const staticElements = useMemo(() => (
    <>
      <Roads count={90} />

      <PineTree position={[0.5, 0, -2]} />
      <PineTree position={[-0.5, 0, -6]} />
      <PineTree position={[-0.8, 0, -5]} />
      <PineTree position={[0.5, 0, -15]} />
      <Tree position={[0.5, 0, -5]}/>
      <Flower position={[1, 0, -5]}/>
      <OfficeGroup  structure = { structure }  />
      {/* <One position={[0.5, 0, -15]}/>
      <Two position={[0.5, 0, -5]}/>
      <Three position={[0.5, 0, -2]}/> */}
    </>
  ), [structure])

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
