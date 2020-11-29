import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHost + "/stores";

const getStore = async id => {
  const { data } = await apiClient.get(`${endpoint}/${id}`);
  return mapToViewModel(data);
};

const getStores = async () => {
  const { data } = await apiClient.get(endpoint);
  const stores = data.map(store => mapToViewModel(store));
  return stores;
};

const postStore = async store => await apiClient.post(endpoint, mapToAPIModel(store));

const putStore = async (id, store) =>
  await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(store));

const deleteStores = async storesIds => await apiClient.delete(endpoint, { data: { storesIds } });

const mapToViewModel = store => {
  return {
    key: store._id,
    value: store._id,
    text: store.name,
    noOfCategories: store.noOfCategories,
    noOfItems: store.noOfItems
  };
};

const mapToAPIModel = store => {
  return {
    name: store.text
  };
};

export default {
  getStores,
  getStore,
  postStore,
  putStore,
  deleteStores
};
