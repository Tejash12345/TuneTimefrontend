import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5000" 
    : "https://tunetimebackend-2.onrender.com",
});
