import apiClient from "./apiClient";
import api from "../config/api";

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

const putItem = async (id, item) => await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(item));

const deleteItems = async itemsIds => await apiClient.delete(endpoint, { data: { itemsIds } });

const mapToViewModel = item => {
  return {
    key: item._id,
    name: item.label.en,
    category: item.category ? item.category.name : "No category",
    price: item.price,
    inStock: item.inStock
  };
};

const mapToAPIModel = item => {
  return {
    label: { en: item.name },
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
