import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = async () => {
  try {
    const response = await axiosInstance.get("users");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItemById = async (id) => {
  try {
    const response = await axiosInstance.get(`users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postLogin = async (data) => {
  try {
    const response = await axiosInstance.post("login", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createItem = async (data) => {
  try {
    const response = await axiosInstance.post("register", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateItem = async (id, data) => {
  try {
    const response = await axiosInstance.put(`users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axiosInstance.delete(`users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
