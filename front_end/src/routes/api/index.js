import axios from 'axios';

const rest = axios.create({
    baseURL: 'http://localhost:3000/'
});

rest.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Supondo que o token esteja armazenado no localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });


export default rest;