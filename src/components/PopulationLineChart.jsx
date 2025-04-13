import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PopulationLineChart = ({ data }) => {

   const formatNumber = (value) => {
      if (value >= 1000000000) {
         return (value / 1000000000).toFixed(0).replace('.', ',') + ' M';
      } else if (value >= 1000000) {
         return (value / 1000000).toFixed(0).replace('.', ',') + ' jt';
      } else if (value >= 1000) {
         return (value / 1000).toFixed(0).replace('.', ',') + ' rb';
      }
      return value;
   };

   return (
      <div className="mb-12">
         <h2 className="text-xl font-semibold mb-4">Diagram Garis</h2>
         <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
               <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Year" />
                  <YAxis tickFormatter={formatNumber} />
                  <Tooltip formatter={(value) => new Intl.NumberFormat('en-US').format(value)} />
                  <Legend />
                  <Line
                     type="monotone"
                     dataKey="Population"
                     stroke="#8884d8"
                     activeDot={{ r: 8 }}
                     name="Populasi"
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default PopulationLineChart;