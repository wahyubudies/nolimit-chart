import DatePicker from 'react-datepicker';

const DateRangeFilter = ({ startYear, endYear, onStartYearChange, onEndYearChange, dateError }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filter Informasi</h2>
      {dateError && <p className="text-red-500 mb-2">{dateError}</p>}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Tahun Awal:</label>
          <DatePicker
            selected={startYear}
            onChange={onStartYearChange}
            showYearPicker
            dateFormat="yyyy"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Tahun Akhir:</label>
          <DatePicker
            selected={endYear}
            onChange={onEndYearChange}
            showYearPicker
            dateFormat="yyyy"
            className="p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangeFilter;