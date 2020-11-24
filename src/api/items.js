import apiClient from "./apiClient";
import api from "../config/api";
import categoriesAPI from "../api/categories";

const endpoint = api.apiHost + "/items";

const getItem = async id => {
  const { data } = await apiClient.get(`${endpoint}/${id}`);
  return mapToViewModel(data);
};

const getItems = async () => {
  const { data } = await apiClient.get(endpoint);
  return data.map(item => mapToViewModel(item));
};

const postItem = async item => await apiClient.post(endpoint, mapToAPIModel(item));

const putItem = async (id, item) => {
  const response = await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(item));
  return response;
};
const deleteItems = async itemsIds => await apiClient.delete(endpoint, { data: { itemsIds } });

const mapToViewModel = item => {
  return {
    key: item._id,
    text: item.name,
    category: item.category
      ? categoriesAPI.mapToViewModel(item.category)
      : categoriesAPI.defaultCategory,
    price: item.price,
    inStock: item.inStock
  };
};

const mapToAPIModel = item => {
  return {
    name: item.text,
    category: item.category === "default" ? undefined : item.category,
    price: item.price,
    inStock: item.inStock
  };
};

export default {
  getItem,
  getItems,
  postItem,
  putItem,
  deleteItems
};
