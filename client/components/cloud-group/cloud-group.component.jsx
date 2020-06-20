import React from 'react';

import Clouds from '../clouds/clouds.component.jsx';

const randomNum = (min, max) => Math.random() * (max - min) + min;

const CloudGroup = ({ type }) => {
  const cloudArray = [];
  for (let i = 0; i < 100; i++) {
    cloudArray.push(
      <Clouds
        key={`${i}Clouds`}
        type={type}
        position={
          [
            randomNum(-40, 40),
            randomNum(3, 6),
            randomNum(0, -170),
          ]
        }
      />,
    );
  }
  return (
    <>
      {cloudArray}
    </>
  );
};

export default CloudGroup;
