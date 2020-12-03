import apiClient from "./apiClient";
import api from "../config/api";
import categoriesAPI from "../api/categories";

const endpoint = api.apiHost + "/items";

const getItem = async (id, isForm) => {
  const { data } = await apiClient.get(`${endpoint}/${id}`);
  return mapToViewModel(data, isForm);
};

const getItems = async storeId => {
  const { data } = await apiClient.get(`${endpoint}?store=${storeId}`);
  return data.map(item => mapToViewModel(item));
};

const postItem = async item => await apiClient.post(endpoint, mapToAPIModel(item));

const putItem = async (id, item) => {
  const response = await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(item));
  return response;
};
const deleteItems = async itemsIds => await apiClient.delete(endpoint, { data: { itemsIds } });

const mapToViewModel = (item, isForm) => {
  const category = item.category
    ? categoriesAPI.mapToViewModel(item.category)
    : categoriesAPI.defaultCategory;
  return {
    key: item._id,
    text: item.name,
    category: isForm ? category.value : category,
    price: item.price,
    inStock: item.inStock,
    image: item.imageUrl && isForm ? apiClient.mapImageToFormModel(item.imageUrl) : item.imageUrl
  };
};

const mapToAPIModel = item => {
  const image = item.image ? item.image[0] : undefined;
  return {
    name: item.text,
    category: item.category === categoriesAPI.defaultCategory.value ? undefined : item.category,
    store: item.store,
    price: item.price,
    inStock: item.inStock,
    imageUrl: image ? image.url || image.response.imageUrl : undefined
  };
};

export default {
  getItem,
  getItems,
  postItem,
  putItem,
  deleteItems,
  mapToViewModel,
  mapToAPIModel
};
