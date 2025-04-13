import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const PopulationPieChart = ({ data }) => {
   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

   return (
      <div className="mb-12">
         <h2 className="text-xl font-semibold mb-4">Diagram Lingkaran</h2>
         <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                  <Pie
                     data={data}
                     cx="50%"
                     cy="50%"
                     labelLine={false}
                     label={({ name }) => `${name}`}
                     outerRadius={80}
                     innerRadius={40}
                     fill="#0088FE"
                     dataKey="Population"
                     nameKey="Year">
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                  </Pie>
                  <Tooltip formatter={(value) => new Intl.NumberFormat('en-US').format(value)} />
               </PieChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default PopulationPieChart;