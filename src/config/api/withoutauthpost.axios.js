import axios from "axios-observable";
import { ENVIRONMENT } from "../environment/environment";
const headers = {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
};
const AxiosWithOutAuthPostInstance = axios.create({
    baseURL: ENVIRONMENT.API_URL,
    timeout: 24000,
    headers
});

AxiosWithOutAuthPostInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default AxiosWithOutAuthPostInstance;
