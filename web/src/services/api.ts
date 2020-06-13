import axios from 'axios';
import config from '../config/config.json';

const api = axios.create({
    baseURL: `http://${config.HOST_SERVER}:${config.PORT_SERVER}`
});

export default api;
