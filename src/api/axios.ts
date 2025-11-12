import axios from 'axios';

export const baseUrl='https://api.osint.industries/v2/request?'
export const headers= {
            'Content-Type': 'application/json',
        }

    const api = axios.create({
        // baseURL: 'https://v5hqnvqt-1337.inc1.devtunnels.ms/api',
        baseURL: baseUrl,    


        // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL && 'https://v5hqnvqt-1337.inc1.devtunnels.ms/api',
        headers:headers
    });

    export default api; 