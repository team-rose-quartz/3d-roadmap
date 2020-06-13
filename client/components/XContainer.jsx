import React, { useRef, useState, useEffect } from 'react';
import Box from './Box.jsx';
import YContainer from './YContainer.jsx';

const XContainer = (props) => {
  const { structure } = props;
  const boxArray = structure.map((item, index) => {
    const [active, setActive] = useState(false);
    const baseX = 0;
    const boxSize = 3;
    const currentX = baseX + (boxSize * index * 2);
    return (
      <>
        <Box
          position={[currentX, 0, 0]}
          boxSize={boxSize}
          boxColor="yellow"
          onClick={(e) => setActive(!active)}
          active={active}
          key={`X${index}`}
          text={item.name}
        />
        { active && <YContainer structure={item.children} baseX={currentX} key={`YContainer${index}`} /> }
      </>
    );
  });
  return (
    <>
      {boxArray}
    </>
  );
};

export default XContainer;
