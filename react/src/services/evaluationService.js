import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = async () => {
  try {
    const response = await axiosInstance.get("evaluations");
    // console.log("Response data evaluations: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItemById = async (id) => {
  try {
    const response = await axiosInstance.get(`evaluations/${id}`);
    // console.log("Response data evaluations: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createItemEvaluation = async (data) => {
  try {
    const response = await axiosInstance.post("evaluations", data);
    // console.log("Response data evaluations: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateItem = async (id, data) => {
  try {
    const response = await axiosInstance.put(`evaluations/${id}`, data);
    // console.log("Response data evaluations: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axiosInstance.delete(`evaluations/${id}`);
    // console.log("Response data evaluations: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
