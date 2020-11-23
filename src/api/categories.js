import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHost + "/categories";
const defaultCategory = { key: "default", value: "default", text: "No category" };

const getCategory = async id => {
  const { data } = await apiClient.get(`${endpoint}/${id}`);
  return mapToViewModel(data);
};

const getCategories = async includeDefault => {
  const { data } = await apiClient.get(endpoint);
  const categories = data.map(category => mapToViewModel(category));
  if (includeDefault) return [defaultCategory, ...categories];
  return categories;
};

const postCategory = async category => await apiClient.post(endpoint, mapToAPIModel(category));

const putCategory = async (id, category) =>
  await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(category));

const deleteCategories = async categoriesIds =>
  await apiClient.delete(endpoint, { data: { categoriesIds } });

const mapToViewModel = category => {
  return {
    key: category._id,
    value: category._id,
    text: category.label.en
  };
};

const mapToAPIModel = category => {
  return {
    label: { en: category.text }
  };
};

export default {
  getCategory,
  getCategories,
  postCategory,
  putCategory,
  deleteCategories,
  mapToViewModel,
  defaultCategory
};
