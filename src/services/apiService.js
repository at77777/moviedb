import axios from "axios";
import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWY1ZjdhZjdlMGI0NThiNzg3ZWYzNjZmMDg0ZDNlMSIsInN1YiI6IjYzZWY5ZjUyZWE4NGM3MDA4ZTUyNWViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OCJ9cJNcqUxTc8WkrrpHCqEWwc94-7IZyeuo1tGZCPg`;
        return config
    }
)

export {
    apiService
};
