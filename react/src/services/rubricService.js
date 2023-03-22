import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = () => {
  return axiosInstance
    .get("rubrics")
    .then((response) => {
      console.log("Response data all rubrics: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const getItemById = (id) => {
  return axiosInstance
    .get(`rubrics/${id}`)
    .then((response) => {
      
      // console.log("Response data id rubrics: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const createItem = (data) => {
  return axiosInstance
    .post("rubrics", data)
    .then((response) => {
      // console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const updateItem = (id, data) => {
  return axiosInstance
    .put(`rubrics/${id}`, data)
    .then((response) => {
      // console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const deleteItem = (id) => {
  return axiosInstance
    .delete(`rubrics/${id}`)
    .then((response) => {
      // console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
