import axios from "axios";

const API_URL = "http://localhost:5000"; // À remplacer par ton URL de backend en production

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
    return await axios.post(`${API_URL}/login`, userData);
};

export const fetchPosts = async () => {
    return await axios.get(`${API_URL}/posts`);
};

export const createPost = async (postData, token) => {
    return await axios.post(`${API_URL}/posts`, postData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
