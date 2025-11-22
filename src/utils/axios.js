import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://social-backend-losn.onrender.com",
  withCredentials: true, // Important for cookies
});

export default axiosClient;
// https://social-backend-losn.onrender.com