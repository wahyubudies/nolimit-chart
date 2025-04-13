import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import OrganizationInfo from './components/OrganizationInfo';
import DateRangeFilter from './components/DateRangeFilter';
import PopulationLineChart from './components/PopulationLineChart';
import PopulationPieChart from './components/PopulationPieChart';
import PopulationTable from './components/PopulationTable';
import { fetchPopulationData } from './api/populationApi';

function App() {
  const [populationData, setPopulationData] = useState([]);
  const [organizationInfo, setOrganizationInfo] = useState({});
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dateError, setDateError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const { populationData, organizationInfo } = await fetchPopulationData();

        setPopulationData(populationData);
        setFilteredData(populationData);
        setOrganizationInfo(organizationInfo);

        if (populationData.length > 0) {
          setStartYear(new Date(populationData[0].Year, 0, 1));
          setEndYear(new Date(populationData[populationData.length - 1].Year, 0, 1));
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleChangeStartYear = (date) => {
    setDateError('');
    if (endYear && date > endYear) {
      setDateError('Tahun Awal tidak boleh lebih besar dari Tahun Akhir');
      return;
    }
    setStartYear(date);
  };

  const handleChangeEndYear = (date) => {
    setDateError('');
    if (startYear && date < startYear) {
      setDateError('Tahun Akhir tidak boleh lebih kecil dari Tahun Awal');
      return;
    }
    setEndYear(date);
  };

  useEffect(() => {
    if (startYear && endYear && populationData.length > 0) {
      const startYearValue = startYear.getFullYear();
      const endYearValue = endYear.getFullYear();

      const filtered = populationData.filter(item => {
        const year = parseInt(item.Year);
        return year >= startYearValue && year <= endYearValue;
      });

      setFilteredData(filtered);
    }
  }, [startYear, endYear, populationData]);

  if (loading) return <div className="flex justify-center items-center h-screen">Menunggu...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;

  console.log("filteredData", filteredData);
  console.log("populationData", populationData);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Data Populasi Amerika Serikat</h1>
      <div className="grid col-span-1 gap-4 mb-16">
        <OrganizationInfo info={organizationInfo} />
        <DateRangeFilter
          startYear={startYear}
          endYear={endYear}
          onStartYearChange={handleChangeStartYear}
          onEndYearChange={handleChangeEndYear}
          dateError={dateError}
        />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10'>
        <div className="col-span-1">
          <PopulationLineChart data={filteredData} />
        </div>
        <div className="col-span-1">
          <PopulationPieChart data={filteredData} />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <PopulationTable data={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default App;;