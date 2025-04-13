import axios from 'axios';

export const fetchPopulationData = async () => {
   try {
      const base_url = import.meta.env.VITE_BASE_URL;
      const response = await axios.get(`${base_url}/data?drilldowns=Nation&measures=Population`);

      // sort data by year
      const sortedData = response.data.data.sort((a, b) => a.Year - b.Year);
      // console.log("sortedData: ", sortedData);

      // extract organization info
      let organizationInfo = {};
      if (response.data.source) {
         organizationInfo = {
            name: response.data.source[0].annotations.source_name,
            description: response.data.source[0].annotations.source_description
         };
      }

      return {
         populationData: sortedData,
         organizationInfo
      };
   } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
   }
};