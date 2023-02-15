import axios from "axios";

export const axiosClient = axios.create({
  // baseURL: "http://192.168.1.250:8000/",
  baseURL: "http://192.168.1.200:8000/",
  // baseURL: "localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});
