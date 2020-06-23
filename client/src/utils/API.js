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
    },
    getExperiences: () => {
        console.log("api")
        return axios.get("/api/experience/");
    },
    getExperience: (id) => {
        return axios.get(`/api/experience/${id}`);
    },
    updateExperience: (id, experienceData) => {
        return axios.put(`/api/experience/${id}`, experienceData);
    },
    saveExperience: (experienceData) => {
        return axios.post(`/api/experience/`, experienceData);
    },
    deleteExperience: (id) => {
        return axios.delete(`/api/experience/${id}`);
    }
}