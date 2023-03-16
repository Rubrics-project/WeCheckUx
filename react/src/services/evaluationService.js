import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = () => {
  // console.log("Fetching all items...");
  return axiosInstance
    .get("evaluations")
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
    .get(`evaluations/${id}`)
    .then((response) => {
      console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const createItem = (data) => {
  return axiosInstance
    .post("evaluations", data)
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
    .put(`evaluations/${id}`, data)
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
    .delete(`evaluations/${id}`)
    .then((response) => {
      console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
