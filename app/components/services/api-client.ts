import axios from "axios";
import { config } from "process";

const url = "http://localhost:8000/api"

// const oldUrl = 'https://tuti.plugfolio.cloud/api'

const apiClient = axios.create({
   baseURL: url
});

// Authenticated client
const authApiClient = axios.create({
    baseURL: url
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
