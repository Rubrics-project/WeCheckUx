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
  try {
    const { data: { project } } = await axiosInstance.get(`projects/${id}`);

    const userPromises = project.rubrics.map((rubric) => axiosInstance.get(`users/${rubric.user_id}`));
    const userResponses = await Promise.all(userPromises);
    const users = userResponses.map((response) => `${response.data.user.name} ${response.data.user.surname}`);

    const updatedRubrics = project.rubrics.map((rubric, index) => {
      return {
        ...rubric,
        user_id: users[index],
      };
    });

    return { ...project, rubrics: updatedRubrics };
  } catch (error) {
    console.error(error);
    
  }
};


export const createItem = async(data) => {
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
