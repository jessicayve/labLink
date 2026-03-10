import { api } from "./api";

export const authService = {
  signup: async (body) => {
    const response = await api.post("/users/signup", body);
    return response.data;
  },

  login: async (body) => {
    const response = await api.post("/users/login", body);
    return response.data;
  },
};