import React, {
  useRef, useMemo, useState, useEffect,
} from 'react';
import Road from '../road/road.component.jsx';
import OfficeGroup from '../office-group/office-group.component.jsx';
import PineTree from '../pine-tree/pine-tree.component.jsx';


const City = ({ top, structure }) => {

  const staticElements = useMemo(() => (
    <>
      <Roads count={85} />
      <PineTree position={[0.5, 0, -2]} />
      <PineTree position={[-0.5, 0, -6]} />
      <PineTree position={[-0.8, 0, -5]} />
      <PineTree position={[0.5, 0, -15]} />
<<<<<<< HEAD
      <OfficeGroup structure={structure} />
    </>
  ), [structure]);
=======
      <OfficeGroup structure={ structure } />
    </>
  ), [structure])
>>>>>>> 1fa5c0f804f10b3a9b9726813f01424f0626ee43

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
