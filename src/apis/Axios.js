import axios from "axios";

export const axiosAdmin = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "content-Types" : "application/json"
    }
})