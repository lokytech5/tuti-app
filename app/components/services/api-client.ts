import axios from "axios";
import { config } from "process";

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/api'
});

apiClient.interceptors.request.use((config) => {
    if (config.headers.applyAuthToken) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
