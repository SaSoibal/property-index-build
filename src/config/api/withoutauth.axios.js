import axios from "axios-observable";
import { ENVIRONMENT } from "../environment/environment";

const AxiosWithOutAuthInstance = axios.create({
    baseURL: ENVIRONMENT.API_URL,
    timeout: 24000
});

AxiosWithOutAuthInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default AxiosWithOutAuthInstance;
