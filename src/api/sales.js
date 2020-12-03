import apiClient from "./apiClient";
import api from "../config/api";
import itemsAPI from "./items";

const endpoint = api.apiHost + "/sales";

const getSale = async id => {
  const { data } = await apiClient.get(`${endpoint}/${id}`);
  return mapToViewModel(data);
};

const getSales = async storeId => {
  const { data } = await apiClient.get(`${endpoint}?store=${storeId}`);
  const sales = data.map(sale => mapToViewModel(sale));
  return sales;
};

const postSale = async sale => await apiClient.post(endpoint, mapToAPIModel(sale));

const mapToViewModel = sale => {
  return {
    key: sale._id,
    items: sale.items.map(saleItem => {
      return { item: itemsAPI.mapToViewModel(saleItem.item), quantity: saleItem.quantity };
    }),
    status: sale.status,
    lastUpdateOn: sale.lastUpdateOn
  };
};

const mapToAPIModel = sale => {
  return {
    items: sale.items.map(item => {
      return { item: item.item.key, quantity: item.quantity };
    }),
    status: sale.status,
    lastUpdateOn: sale.lastUpdateOn
  };
};

export default {
  getSale,
  getSales,
  postSale
};
