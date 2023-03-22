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
      console.log("Response data all projects: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const getItemById = (id) => {
  let resProject;
  return axiosInstance
    .get(`projects/${id}`)
    .then((response) => {
      // resProject = response.data;
      // // console.log("Response data id projects:------ ", response.data.project.rubrics[0].user_id);

      // for(let i = 0; i < resProject.project.rubrics.length; i++){
      //   let user_id = resProject.project.rubrics[i].user_id
      //   axiosInstance.get(`users/${user_id}`).then((r) =>{
      //     // console.log(r.data.user.name)
      //     resProject.project.rubrics[i].user_id = r.data.user.name
      //     console.log('----------aqi--------')
      //     console.log(resProject)

      // })
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
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
