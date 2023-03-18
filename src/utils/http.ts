import axios, { AxiosInstance } from 'axios';
import apiConfigs from '../constants/ApiConfig';
class Http {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: apiConfigs.baseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
const http = new Http().instance;
export default http;
