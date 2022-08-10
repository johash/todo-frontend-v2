import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todo-api-v2-gamma.vercel.app/",
});

export default axiosInstance;
