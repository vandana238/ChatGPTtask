import React from 'react';
import { Column} from '@ant-design/plots';

// import { Bar } from '@ant-design/plots';
const Columns = () => {
  const data = [
    {
      type: 'furniture',
      sales: 38,
    },
    {
      type: 'appliances',
      sales: 52,
    },
    {
      type: 'vangrains',
      sales: 61,
    },
    {
      type: 'oils',
      sales: 145,
    },
    {
      type: 'foodstuff',
      sales: 48,
    },
    {
      type: 'beauty "',
      sales: 38,
    },
    {
      type: 'personal care',
      sales: 38,
    },
    {
      type: 'annapmaternal and child product',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
    
      position: 'middle',
      // 'top', 'bottom', 'middle',
      
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'category',
      },
      sales: {
        alias: 'sales amount',
      },
    },
  };
return(<><Column {...config} />
</>)
};



export default Columns;
