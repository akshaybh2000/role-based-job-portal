// src/apiConfig.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  console.log("TOKEN SENT:", token); // 👈 MUST SHOW

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 🔁 GET request
export const getData = async (url) => {
  try {
    const res = await API.get(url);
    return res.data;
  } catch (err) {
    console.error("GET Error:", err);
    throw err;
  }
};

// 📤 POST request
export const fetchData = async (url, data) => {
  try {
    const res = await API.post(url, data);
    return res.data;
  } catch (err) {
    console.error("POST Error:", err);
    throw err;
  }
};
