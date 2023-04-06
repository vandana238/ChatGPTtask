import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Column } from '@ant-design/plots';

const Groupcol = () => {
  const [data, setData] = useState([]);
  var config;
  useEffect(()=>
  {
    const question = { title: "Retrieve top 15 orders of the ‘Furniture’ Category that had the most sales" };
      axios.post(`https://insights-portal.azurewebsites.net/postitems`,question).then((response) => {
        setData(response.data);
      console.log(response.data);
    });
  
  
  },[])

   

   config = {
    data,
    xField:'customer_id',
    yField:'sales',
    seriesField: 'order_date',
    isGroup: false,
    columnStyle: {
      radius: [20, 20, 20, 0],
    },
  };

  return (<>{
    data!==undefined?<><Column {...config} />;  </>:<></>
  }
  </>)
  };
  export default Groupcol;