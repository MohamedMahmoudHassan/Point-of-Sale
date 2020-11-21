import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHost + "/categories";
const defaultCategory = { key: "default", name: "No category" };

const getCategory = async id => {
  const { data } = await apiClient.get(`${endpoint}/${id}`);
  return mapToViewModel(data);
};

const getCategories = async () => {
  const { data } = await apiClient.get(endpoint);
  return [defaultCategory, ...data.map(category => mapToViewModel(category))];
};

const postCategory = async category => await apiClient.post(endpoint, mapToAPIModel(category));

const putCategory = async (id, category) =>
  await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(category));

const deleteCategories = async categoriesIds =>
  await apiClient.delete(endpoint, { data: { categoriesIds } });

const mapToViewModel = category => {
  return {
    key: category._id,
    name: category.label.en
  };
};

const mapToAPIModel = category => {
  return {
    label: { en: category.name }
  };
};

export default {
  getCategory,
  getCategories,
  postCategory,
  putCategory,
  deleteCategories
};
