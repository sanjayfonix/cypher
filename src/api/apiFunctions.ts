
import api, { baseUrl } from "./axios";

interface SearchParams{
 query:string;
    OstIndAKey:string;
    
}

export const fetchPhoneSearchResult = async ( params:SearchParams) => {
  try {
    const apiUrl=`${baseUrl}type=phone&query=${params.query}`;
    console.log('entire api url is',apiUrl);
    const response = await api.get(apiUrl,{
        headers:{
           'accept':'application/json',
            'api-key':'42cdda464cbcf354980afe5ee4fb8bc7'
        }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to handle in component if needed
  }
};
