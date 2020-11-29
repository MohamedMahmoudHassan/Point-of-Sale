import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHost + "/categories";
const defaultCategory = { key: "default", value: "default", text: "No category" };

const getCategory = async (id, isForm) => {
  const { data } = await apiClient.get(`${endpoint}/${id}`);
  return mapToViewModel(data, isForm);
};

const getCategories = async (storeId, { includeDefault }) => {
  const { data } = await apiClient.get(`${endpoint}?store=${storeId}`);
  const categories = data.map(category => mapToViewModel(category));

  if (includeDefault) return [defaultCategory, ...categories];
  return categories;
};

const postCategory = async category => await apiClient.post(endpoint, mapToAPIModel(category));

const putCategory = async (id, category) =>
  await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(category));

const deleteCategories = async categoriesIds =>
  await apiClient.delete(endpoint, { data: { categoriesIds } });

const mapToViewModel = (category, isForm) => {
  return {
    key: category._id,
    value: category._id,
    text: category.name,
    image:
      category.imageUrl && isForm
        ? apiClient.mapImageToFormModel(category.imageUrl)
        : category.imageUrl,
    noOfItems: category.noOfItems
  };
};

const mapToAPIModel = category => {
  const image = category.image ? category.image[0] : undefined;
  return {
    name: category.text,
    store: category.store,
    imageUrl: image ? image.url || image.response.imageUrl : undefined
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
