import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHost + "/items";
const getItem = id => apiClient.get(`${endpoint}/${id}`);
const getItems = () => apiClient.get(endpoint);
const postItem = item => apiClient.post(endpoint, item);
const putItem = (id, item) => apiClient.put(`${endpoint}/${id}`, item);
const deleteItems = itemsIds => apiClient.delete(endpoint, { data: { itemsIds } });

export default {
  getItem,
  getItems,
  postItem,
  putItem,
  deleteItems
};
