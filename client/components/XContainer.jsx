import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import Box from './Box.jsx';
import YContainer from './YContainer.jsx';
import { useTransition } from '@react-spring/three';

const XContainer = (props) => {
  const { structure } = props;
  const boxArray = structure.map((item, index) => {
    const [active, setActive] = useState(false);
    const baseX = 0;
    const boxSize = 3;
    const currentX = baseX + (boxSize * index * 2);
    return (
      <React.Fragment key={`XFragment${index}`}>
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
      </React.Fragment>
    );
  });
  
  return (
    <>
      {boxArray}
    </>
  );
};

export default XContainer;
