import axios from "axios";

// Change the URL here into the URL in the backend server
export const axiosInstance = axios.create({
	baseURL: "localhost:4000/api/v1/"
});