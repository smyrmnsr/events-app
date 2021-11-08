import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertEvent = (payload) => api.post(`/event`, payload);
export const getAllEvents = () => api.get(`/events`);
export const deleteEvents = (id) => api.delete(`/events`);

const apis = {
  insertEvent,
  getAllEvents,
  deleteEvents,
};

export default apis;
