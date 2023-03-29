import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = () => {
  return axiosInstance.get("users");
};

export const getItemById = async (id) => {

  try {
    const { data: { user } } = await axiosInstance.get(`users/${id}`);

    const projectIds = user.rubrics.map(rubric => rubric.project_id);
    const projectResponses = await axiosInstance.get(`projects?ids=${projectIds.join(',')}`);
    const projects = projectResponses.data;

    const updatedMyRubrics = user.rubrics.map(rubric => {
      let nameProject = projects.find(project => project.id === rubric.project_id)
      return { ...rubric, project_name: nameProject };
    })
    return { ...user, rubrics: updatedMyRubrics };
  } catch (error) {
    console.error(error);
  }

};

export const postLogin = (data) => {
  return axiosInstance.post("login", data);
};

export const createItem = (data) => {
  return axiosInstance.post("register", data);
};

export const updateItem = (id, data) => {
  return axiosInstance.put(`users/${id}`, data);
};

export const deleteItem = (id) => {
  return axiosInstance.delete(`users/${id}`);
};
