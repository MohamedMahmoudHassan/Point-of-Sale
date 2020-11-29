import axios from "axios";

const connect = async method => {
  try {
    const response = await method();
    return response;
  } catch (error) {
    return error.response;
  }
};

const mapImageToFormModel = image => {
  return [
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: image
    }
  ];
};

export default {
  get: endpoint => connect(async () => await axios.get(endpoint)),
  post: (endpoint, body) => connect(async () => await axios.post(endpoint, body)),
  put: (endpoint, body) => connect(async () => await axios.put(endpoint, body)),
  delete: (endpoint, body) => connect(async () => await axios.delete(endpoint, body)),
  mapImageToFormModel
};
