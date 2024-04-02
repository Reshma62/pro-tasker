import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  // baseURL: "https://pro-tasker-server.onrender.com/api/v1",
  withCredentials: true,
});
const axiosPublic = () => {
  return instance;
};

export default axiosPublic;
