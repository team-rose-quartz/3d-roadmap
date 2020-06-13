import React, { useRef, useState, useEffect } from 'react';
import Box from './Box.jsx';

const ZContainer = (props) => {
  const { structure, baseX, baseY } = props;
  const boxArray = structure.map((item, index) => {
    const baseZ = -3;
    const boxSize = 1;
    const currentZ = baseZ - (boxSize * index * 2);
    return (
      <>
        <Box position={[baseX, baseY, currentZ]} boxSize={boxSize} boxColor='blue'/>
      </>
    );
  });
  return (
    <>
      {boxArray}
    </>
  );
};

export default ZContainer;
