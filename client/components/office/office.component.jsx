import React, { useState, useRef } from 'react';
import { HTML, Text } from 'drei';
import OfficeFloor from '../office-floor/office-floor.component.jsx';


const Office = ({ count, z, x, text, floors }) => {
  const [hovered, setHover] = useState(false)
  const hover = e => e.stopPropagation() && setHover(true)
  const unhover = e => e.stopPropagation() && setHover(false)
  const group = useRef();
  // useFrame(() => {
  //   (group.current.rotation.y = group.current.rotation.y += 0.01)
  // })


  const office = [];
  for (let x = 0; x < count; x++) {
    office.push(<OfficeFloor
      key={x}
      position={[0, x * 0.2, 0]}
      // position={[0, x * 0.3, 0]}
      floor={floors[x]}
      hovered={hovered}
    />);
  }
  return (
    <group  onPointerOver={hover} onPointerOut={unhover} position={[x, 0.15, z]} scale={[0.8, 1, 0.8]}>
      
      <Text
      ref={group}
        fontSize={0.25}
        position={[0,0.25*count,0]}
        color={"white"}
      >{text}</Text>
      {office}
    </group>
  );
};

export default Office;
