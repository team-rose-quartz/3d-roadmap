import React from 'react';
import { HTML } from 'drei';
import OfficeFloor from '../office-floor/office-floor.component.jsx';

const Office = ({ count, z, x, text, floors }) => {
  const office = [];
  for (let x = 0; x < count; x++) {
    office.push(<OfficeFloor
      key={x}
      position={[0, x * 0.2, 0]}
      floor={floors[x]}
    />);
  }
  return (
    <group position={[x, 0.15, z]} scale={[0.8, 1, 0.8]}>
      <HTML>{text}</HTML>
      {office}
    </group>

  );
};

export default Office;
