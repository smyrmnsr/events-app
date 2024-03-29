import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

/* Create all the requests */
export const insertEvent = (payload) => api.post(`/event`, payload);
export const getAllEvents = () => api.get(`/events`);
export const deleteEvents = (payload) => api.post(`/events/delete`, payload);
export const signUp = (payload) => api.post('/register', payload);
export const signIn = (payload) => api.post('/login', payload);

const apis = {
  insertEvent,
  getAllEvents,
  deleteEvents,
  signUp,
  signIn,
};

export default apis;
