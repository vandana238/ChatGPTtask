import React from 'react';
import { Pie } from '@ant-design/plots';

const Pies = () => {
  const data = [
    {
      type: 'beauty',
      value: 27,
    },
    {
      type: 'foodstuff',
      value: 25,
    },
    {
      type: 'oils',
      value: 18,
    },
    {
      type: 'vangrains',
      value: 15,
    },
    {
      type: 'appliances',
      value: 10,
    },
    {
      type: 'furniture',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default Pies;
