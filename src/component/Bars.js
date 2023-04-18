// import { Bar } from '@ant-design/plots';

// const Bars = (props) => {
// var config;
// const data= props.response
//   console.log(props.response)
//   config = {
//     data,
//     xField: 'product_name',
//     yField: 'total_sales',
//     seriesField: 'total_sales',
//     legend: {
//       position: 'top-left',
//     },
//   };

//   return (<>{
//     <Bar {...config} />
//   }
//   </>)
// };


// export default Bars;




import React, { useEffect, useState } from 'react';
import { Bar } from '@ant-design/plots';


const Bars = (props) => {
const [data,setdata]=useState(props.response)
  console.log(props.response)
  var abc= Object.keys(props.response[0])
  console.log(abc[1],"vandhana")
  const [xaxisfield,setxfield]=useState(abc[4])
  const [yaxisfield,setyfield]=useState(abc[5])
  useEffect(()=>
  {
    
  
  },[data,xaxisfield,yaxisfield])

if(abc[1]===undefined)
{
  return(<>{JSON.stringify(data)}</>)
}
else{
  return (
    <Bar
      width={600}
      height={400}
      data={data}
      xField={xaxisfield}
      yField={yaxisfield}
      yAxis={{ label: { formatter: (value) => `${value} ` } }}
      label={{ position: 'middle', style: { fill: '#fff' } }}
    />
  );
};
}


export default Bars;
