import React from 'react';

import Office from '../office/office.component.jsx';

const OfficeGroup = ({ structure }) => {
  const offices = (structure.length > 0)
    ? structure[0].children.map((val, index) => (
      <Office
        key={index}
        count={val.children.length}
        floors={val.children}
        text={val.name}
        x={index % 2 ? 0.85 : -0.85}
        z={index * -8}
      />
    ))
    : null;
  return offices;
};

export default OfficeGroup;
