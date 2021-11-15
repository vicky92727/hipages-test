import axios from "axios";
import { BASE_URL } from "../config/config";

const getService = (url, params = {}) => {
  return axios.get(`${BASE_URL}/${url}`, {
    params,
  });
};

const postService = (url, body, options = {}) => {
  return axios.post(`${BASE_URL}/${url}`, body, {
    ...options,
  });
};

const deleteService = (url, params = {}, data = {}) => {
  return axios.delete(`${BASE_URL}/${url}`, { params, data });
};

const putService = (url, body, options = {}) => {
  return axios.put(`${BASE_URL}/${url}`, body, {
    ...options,
  });
};
export { getService, postService, deleteService, putService };