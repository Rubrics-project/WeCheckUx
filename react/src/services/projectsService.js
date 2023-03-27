import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = async () => {
  try {
    const response = await axiosInstance.get("projects");
    console.log("Response data all projects: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItemById = async (id) => {
  try {
    const { data: { project } } = await axiosInstance.get(`projects/${id}`);

    const userIds = project.rubrics.map(rubric => rubric.user_id);
    const userResponses = await axiosInstance.get(`users?ids=${userIds.join(',')}`);
    const users = userResponses.data;
    
    const updatedRubrics = project.rubrics.map(rubric => {
      let fullname = users.find(user => user.id === rubric.user_id)
      return {...rubric, user_name: fullname.name+' '+fullname.surname}
    })
    console.log("-----updatedRubrics",updatedRubrics)

    return { ...project, rubrics: updatedRubrics };
 
  } catch (error) {
    console.error(error);
  }
};

export const createItem = async (data) => {
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

export const updateItem = async (id, data) => {
  try {
    const response = await axiosInstance.put(`projects/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axiosInstance.delete(`projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
