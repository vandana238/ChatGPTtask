import { Bar } from '@ant-design/plots';

const Bars = (props) => {
var config;
const data= props.response
  console.log(props.response)
  config = {
    data,
    xField: 'product_name',
    yField: 'profit',
    seriesField: 'profit',
    legend: {
      position: 'top-left',
    },
  };

  return (<>{
    <Bar {...config} />
  }
  </>)
};


export default Bars;
