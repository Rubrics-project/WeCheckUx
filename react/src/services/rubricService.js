import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = async () => {
  try {
    const { data: rubrics } = await axiosInstance.get("rubrics");

    const updatedRubrics = await Promise.all(
      rubrics.map(async (rubric) => {
        const {
          data: {
            project: { name: projectName },
          },
        } = await axiosInstance.get(`projects/${rubric.project_id}`);
        return { ...rubric, project_id: projectName };
      })
    );

    const sortedRubrics = updatedRubrics.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    // console.log(sortedRubrics);

    return sortedRubrics;
  } catch (error) {
    console.error(error);
    // manejo de errores aquí
  }
};

export const getItemById = async (id) => {
  try {
    const response = await axiosInstance.get(`rubrics/${id}`);
    // console.log("Response data id rubrics: ", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createItem = async (data) => {
  try {
    const response = await axiosInstance.post("rubrics", data);
    // console.log("Response data: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateItem = async (id, data) => {
  try {
    const response = await axiosInstance.put(`rubrics/${id}`, data);
    // console.log("Response data: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axiosInstance.delete(`rubrics/${id}`);
    // console.log("Response data: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
