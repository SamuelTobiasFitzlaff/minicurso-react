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
      if (error.response?.status === 401) {
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/login";
        return Promise.reject(error);
      } else {
        return error.response;
      }
    }
  );
  return api;
}
