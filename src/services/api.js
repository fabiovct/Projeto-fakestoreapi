import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    // headers: {
    //     'auth': localStorage.token,
    //     //'Content-Type': 'multipart/form-data'
    //   }
});

export default api;