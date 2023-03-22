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

export const getItemById = async(id) => {
  
  let projects = await axiosInstance.get(`projects/${id}`)
  console.log(projects.data.project.rubrics)
  for(let i = 0; i < projects.data.project.rubrics.length; i++){
    console.log('Aqui andamos papu----')
    console.log(projects.data.project.rubrics[i].user_id)
    let user_id = projects.data.project.rubrics[i].user_id;
    let username = await axiosInstance.get(`users/${user_id}`)
    projects.data.project.rubrics[i].user_id = username.data.user.name + ' ' + username.data.user.surname
    user_id = username.data.user.name;

    // let name = username.data.user.name;
    // let surname = username.data.user.surname;
    // user_id = username.data.user.name;
    // console.log("---------"+user_id)
    // console.log(projects.data.project.rubrics[i].user_id)

  }

  console.log(projects.data)
  return projects.data;


  // let resProject;
  
  
  
  // return axiosInstance
  //   .get(`projects/${id}`)
  //   .then((response) => {
  //       return response.data; 
  //     }
  //   )
  //   .catch((error) => {
  //     console.error(error);
  //     throw error;
  //   });
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
