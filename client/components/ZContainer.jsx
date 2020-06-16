import React, { useRef, useState, useEffect } from 'react';
import Box from './Box.jsx';

const ZContainer = (props) => {
  const { structure, baseX, baseY } = props;
  const boxArray = structure.map((item, index) => {
    const [active, setActive] = useState(false);
    const baseZ = -3;
    const boxSize = 1;
    const currentZ = baseZ - (boxSize * index * 2);
    return (
      <React.Fragment key={`ZFragment${index}`}>
        <Box
          position={[baseX, baseY, currentZ]}
          boxSize={boxSize}
          boxColor='blue'
          onClick={(e) => setActive(!active)}d
          active={active}
          key={`Z${index}`}
          text={item.name}
        />
      </React.Fragment>
    );
  });
  return (
    <>
      {boxArray}
    </>
  );
};

export default ZContainer;
