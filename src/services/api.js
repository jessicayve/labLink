import axios from "axios";
import { TOKEN_KEY } from "../constants/storage";

export const api = axios.create({
  baseURL: "https://lablink-backend-739w.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


