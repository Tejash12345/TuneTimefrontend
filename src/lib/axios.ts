import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "production" ? "https://tunetimebackend-2.onrender.com/api",
});
