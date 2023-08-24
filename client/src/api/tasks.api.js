import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:8080/tasks/api/v1/tasks/",
});

export const getAllTasks = () =>
  axios.get("http://localhost:8080/tasks/api/v1/tasks/");

export const createTask = (task) => tasksApi.post("/", task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);