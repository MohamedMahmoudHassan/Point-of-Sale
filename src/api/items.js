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

const putItem = async (id, items) => await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(items));

const deleteItems = async itemsIds => await apiClient.delete(endpoint, { data: { itemsIds } });

const mapToViewModel = item => {
  return {
    key: item._id,
    name: item.label.en,
    category: item.category.key,
    price: item.price,
    inStock: item.inStock
  };
};

const mapToAPIModel = item => {
  return item;
};

export default {
  getItem,
  getItems,
  postItem,
  putItem,
  deleteItems
};
