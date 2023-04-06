import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Graph = (props) => {
console.log(props.response)
    const data =props.response
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Product_Name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Sales" fill="#8884d8" />
      <Bar dataKey="Profit" fill="#82ca9d" />
    </BarChart>
  );
};

export default Graph;
