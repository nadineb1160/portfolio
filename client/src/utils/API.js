import axios from "axios";

export default {

    getProjects: () => {
        console.log("api")
        return axios.get("/api/project/");
    },
    getProject: (id) => {
        return axios.get(`/api/project/${id}`);
    },
    updateProject: (id, projectData) => {
        return axios.put(`/api/project/${id}`, projectData);
    },
    saveProject: (projectData) => {
        return axios.post(`/api/project/`, projectData);
    },
    deleteProject: (id) => {
        return axios.delete(`/api/project/${id}`);
    }
}