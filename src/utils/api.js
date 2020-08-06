import axios from "axios";
import { getToken } from "./authHelper";

const apiCall = axios.create({
  baseURL: `https://app.justicenetworksea.org/api/v1/`,
  timeout: '8000ms',
});

apiCall.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default apiCall;
