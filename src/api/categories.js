import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHost + "/categories";
const getCategory = id => apiClient.get(`${endpoint}/${id}`);
const getCategories = () => apiClient.get(endpoint);
const postCategory = category => apiClient.post(endpoint, category);
const putCategory = (id, category) => apiClient.put(`${endpoint}/${id}`, category);
const deleteCategories = categoriesIds => apiClient.delete(endpoint, { data: { categoriesIds } });

export default {
  getCategory,
  getCategories,
  postCategory,
  putCategory,
  deleteCategories
};
