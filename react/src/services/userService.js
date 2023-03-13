import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // timeout: 3000,
  
    // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
  });

  export const getAllItems = () => {
    return axiosInstance.get('users');
  };
  
  export const getItemById = (id) => {
    return axiosInstance.get(`users/${id}`);
  };
  
  export const createItem = (data) => {
    return axiosInstance.post('users', data);
  };
  
  export const updateItem = (id, data) => {
    return axiosInstance.put(`users/${id}`, data);
  };
  
  export const deleteItem = (id) => {
    return axiosInstance.delete(`users/${id}`);
  };