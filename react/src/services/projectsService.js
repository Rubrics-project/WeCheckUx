import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = () => {
  // console.log("Fetching all items...");
  return axiosInstance
    .get("projects")
    .then((response) => {
      // console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const getItemById = (id) => {
  return axiosInstance
    .get(`projects/${id}`)
    .then((response) => {
      // console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const createItem = (data) => {
  return axiosInstance
    .post("projects", data)
    .then((response) => {
      console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const updateItem = (id, data) => {
  return axiosInstance
    .put(`projects/${id}`, data)
    .then((response) => {
      console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const deleteItem = (id) => {
  return axiosInstance
    .delete(`projects/${id}`)
    .then((response) => {
      console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
