import axios from "axios";
import { API_BASE_URL } from "../constants";

export const campersApi = axios.create({
  baseURL: API_BASE_URL, 
});

export const setToken = (token: string): void => {
  campersApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = (): void => {
  campersApi.defaults.headers.common.Authorization = "";
};
