import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import axios from "axios";

const Linegraphs = () => {
const [data, setData] = useState([]);
var config;
useEffect(()=>
{
  const question = { title: "Retrieve top 15 orders of the ‘Furniture’ Category and Tables sub-category" };
    axios.post(`https://insights-portal.azurewebsites.net/postitems`,question).then((response) => {
    setData(response.data);
    console.log(response.data);
  });

},[])
   config = {
    data,
    padding: 'auto',
    xField: 'product_id',
    yField: 'profit',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};


export default Linegraphs;