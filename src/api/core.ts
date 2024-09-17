import axios, { AxiosInstance } from "axios";

const httpClientCore: AxiosInstance = axios.create({
  baseURL: "/amo-crm-api",
  timeout: 5000,
});

export default httpClientCore;
