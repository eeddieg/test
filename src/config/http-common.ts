import axios, { AxiosInstance } from "axios";

const PORT = "8080";

const apiClient: AxiosInstance = axios.create({
  baseURL: `http://localhost:${PORT}/api`,
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
