import apiClient from "./apiClient";
import api from "../config/api";

const endpoint = api.apiHostStatic;

const postImage = async file => {
  const formData = new FormData();

  formData.append("image", file);

  return await apiClient.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};

export default {
  postImage
};
