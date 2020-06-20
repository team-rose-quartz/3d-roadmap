import React from 'react';

import Tree from '../tree/tree.component.jsx';
import PineTree from '../pine-tree/pine-tree.component.jsx';
import Flower from '../flower/flower.component.jsx';

const randomNum = (min, max) => Math.random() * (max - min) + min;

const treeGen = (treeType, side) => {
  const treeArray = [];
  for (let i = 0; i < 48; i += 2) {
    treeArray.push(
      treeType === 'regular'
        ? (
          <Tree
            key={`${i}Tree`}
            position={
              [
                side === 'right' ? randomNum(0.5, 1.5) : randomNum(0.5, 1.5) * -1,
                0,
                -1 * (randomNum(i * 4, (i + 1) * 4) + 2),
              ]
            }
          />
        )
        : (
          <PineTree
            key={`${i}PineTree`}
            position={
                [
                  side === 'right' ? randomNum(0.5, 3) : randomNum(0.5, 3) * -1,
                  0,
                  -1 * (randomNum(i * 4, (i + 1) * 4) + 2),
                ]
              }
          />
        ),
    );
  }
  return treeArray;
};

const flowerGen = (side) => {
  const flowerArray = [];
  for (let i = 0; i < 48; i += 2) {
    flowerArray.push(
      <Flower
        key={`${i}Flower`}
        position={
          [
            side === 'right' ? randomNum(0.5, 1.5) : randomNum(0.5, 1.5) * -1,
            0,
            -1 * (randomNum(i * 4, (i + 1) * 4) + 2),
          ]
        }
      />,
    );
  }
  return flowerArray;
};

const TreeGroup = ({ side }) => {
  const treeArray = treeGen('regular', side);
  const pineTreeArray = treeGen('pine', side);
  const flowerArray = flowerGen(side);
  return (
    <>
      {treeArray}
      {pineTreeArray}
      {flowerArray}
      {flowerArray}
    </>
  );
};

export default TreeGroup;
