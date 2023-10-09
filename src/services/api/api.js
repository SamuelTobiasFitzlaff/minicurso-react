import axios from "axios";
export function setupApiClient() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return api;
}
