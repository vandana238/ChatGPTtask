import React, { useEffect, useState } from 'react';
import { Column} from '@ant-design/plots';
import axios from "axios";

const Columns = () => {
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
    data,
    xField: 'product_id',
    yField: 'profit',
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
        alias: 'sales',
      },
    },
  };
}
return (<>{
  data!==undefined?<><Column {...config} />;  </>:<></>
}
</>)
};
export default Columns;
