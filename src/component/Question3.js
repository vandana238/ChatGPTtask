import React, { useEffect, useState } from 'react';
import { Column} from '@ant-design/plots';
import axios from "axios";

const Question3 = () => {
  const [data,setdata]=useState()
  const [method,setmethod]=useState()
  const [text,settext]=useState()
  const [mapp,setmapp]=useState()
  var config;
  useEffect(()=>
  {
    const question = { title: handleSearch };
      axios.post(`https://insights-portal.azurewebsites.net/postitems`,question).then((response) => {
      setdata(response.data);
      console.log(response.data);
    });
  
  
  },[])



  const handleSearch = async () => {
    const result = setdata;
    const chartData = {
      labels: result.labels,
      datasets: [
        {
          label: 'Data',
          data: result.data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
    setmapp(chartData);
  };


































 console.log(data)

  if(data!==undefined)
  {
   config = {
    data,
    xField: 'percentage of sales in kentucky',
    yField: 'percentage of sales in kentucky',
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
return (
<div>
<div>
      <input type="text" value={text} onChange={(e) => settext(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {data && <Column data={data} />}
    </div>





<div>
{
  data!==undefined?<><Column {...config} />;  </>:<></>
}
</div>

</div>



)
};
export default Question3;