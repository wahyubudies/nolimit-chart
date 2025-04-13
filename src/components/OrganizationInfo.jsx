const OrganizationInfo = ({ info }) => {
   return (
      <div className="bg-gray-100 p-4 rounded-lg">
         <h2 className="text-xl font-semibold mb-2">Informasi Sensus</h2>
         <p className='mb-2 text-gray-500'><strong className='text-black'>Nama:</strong> <br /> {info.name || 'Not available'}</p>
         <p className='text-gray-500'><strong className='text-black'>Deskripsi:</strong> <br /> {info.description || 'Not available'}</p>
      </div>
   );
};

export default OrganizationInfo;