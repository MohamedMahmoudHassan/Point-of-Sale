import apiClient from "./apiClient";
import api from "../config/api";
import itemsAPI from "./items";

const endpoint = api.apiHost + "/sales";

const getSales = async () => {
  const { data } = await apiClient.get(endpoint);
  const sales = data.map(sale => mapToViewModel(sale));
  return sales;
};

const postSale = async sale => await apiClient.post(endpoint, mapToAPIModel(sale));

const mapToViewModel = sale => {
  return {
    key: sale._id,
    items: sale.items.map(item => itemsAPI.mapToViewModel(item)),
    quantity: sale.quantity
  };
};

const mapToAPIModel = sale => {
  return {
    items: sale.items.map(item => itemsAPI.mapToAPIModel(item)),
    quantity: sale.quantity
  };
};

export default {
  getSales,
  postSale
};
