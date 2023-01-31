import axios from "axios";

// Chane the URL here into the URL in the backend server
export const axiosInstance = axios.create({
    baseURL: "/";
})