import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHost + "/stores";

const getStores = async () => {
  const { data } = await apiClient.get(endpoint);
  const stores = data.map(store => mapToViewModel(store));
  return stores;
};

const mapToViewModel = store => {
  return {
    key: store._id,
    value: store._id,
    text: store.name
  };
};

export default {
  getStores
};
