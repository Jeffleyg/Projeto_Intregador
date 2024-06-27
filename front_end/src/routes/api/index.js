import axios from 'axios';

const rest = axios.create({
    baseURL: 'http://localhost:3000/'
});


export default rest;