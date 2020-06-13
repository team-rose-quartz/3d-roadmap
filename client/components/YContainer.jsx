import React, { useRef, useState, useEffect } from 'react';
import Box from './Box.jsx';
import ZContainer from './ZContainer.jsx';

const YContainer = (props) => {
  const { structure, baseX } = props;
  const boxArray = structure.map((item, index) => {
    const [active, setActive] = useState(false);
    const baseY = -5;
    const boxSize = 2;
    const currentY = baseY - (boxSize * index * 2);
    return (
      <>
        <Box
          position={[baseX, currentY, 0]} 
          boxSize={boxSize} boxColor='green'
          onClick={(e) => setActive(!active)}
          active={active}
          key={`Y${index}`}
        />
        { active && <ZContainer structure={item.children} baseX={baseX} baseY={currentY} key={`ZContainer${index}`} />}
      </>
    );
  });
  return (
    <>
      {boxArray}
    </>
  );
};

export default YContainer;
