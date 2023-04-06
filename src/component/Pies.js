import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Pie } from '@ant-design/plots';

const Pies = () => {
  const [data,setdata]=useState()
  var config;
  useEffect(()=>
  {
    const question = { title: "Retrieve top 15 orders of the ‘Furniture’ Category and Tables sub-category" };
      axios.post(`https://insights-portal.azurewebsites.net/postitems`,question).then((response) => {
      setdata(response.data);
      console.log(response.data);
    });
  
  },[])

 console.log(data)
if(data!==undefined)
  {
   config = {
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
}
return (<>{
  data!==undefined?<><Pie {...config} />;  </>:<></>
}
</>)
};

export default Pies;
