import axios from "axios";
import { config } from "process";

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/api'
});

// Authenticated client
const authApiClient = axios.create({
    baseURL: 'http://localhost:5001/api'
});

authApiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export { apiClient, authApiClient };
