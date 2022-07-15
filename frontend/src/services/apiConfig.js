import axios from 'axios';
export const config = {
    baseUrl : 'http://10.0.2.2:8080'
}
export const api = axios.create(config);