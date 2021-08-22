import axios from 'axios';

const apiClient = (storedParams) => {

    return axios.create({
        baseURL: 'http://www.omdbapi.com',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            apiKey: 'af365b7',
            ...storedParams
        }
    });
}

export default apiClient;