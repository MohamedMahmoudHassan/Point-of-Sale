import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHost + "/categories";
const getCategories = () => apiClient.get(endpoint);
const postCategory = category => apiClient.post(endpoint, category);

export default {
  getCategories,
  postCategory
};
