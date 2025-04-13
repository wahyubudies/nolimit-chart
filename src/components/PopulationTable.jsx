const PopulationTable = ({ data }) => {
   return (
      <div>
         <h2 className="text-xl font-semibold mb-4">Tabel Ringkasan</h2>
         <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
               <thead>
                  <tr>
                     <th className="py-2 px-4 border-b">Tahun</th>
                     <th className="py-2 px-4 border-b">Jumlah</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((item, index) => (
                     <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-2 px-4 border-b text-center">{item.Year}</td>
                        <td className="py-2 px-4 border-b text-center">{new Intl.NumberFormat('en-US').format(item.Population)}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default PopulationTable;