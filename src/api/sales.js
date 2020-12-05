import apiClient from "./apiClient";
import api from "../config/api";
import itemsAPI from "./items";

const endpoint = api.apiHost + "/sales";
const salesStatus = [
  { value: "Created", text: "Created" },
  { value: "Updated", text: "Updated" },
  { value: "Completed", text: "Completed" },
  { value: "Cancelled", text: "Cancelled" }
];
const statusColor = {
  Created: "processing",
  Updated: "warning",
  Completed: "success",
  Cancelled: "error"
};

const getSale = async id => {
  const { data } = await apiClient.get(`${endpoint}/${id}`);
  return mapToViewModel(data);
};

const getSales = async storeId => {
  const { data } = await apiClient.get(`${endpoint}?store=${storeId}`);
  return data.map(sale => mapToViewModel(sale));
};

const postSale = async sale => await apiClient.post(endpoint, mapToAPIModel(sale));

const putSale = async (id, sale) => await apiClient.put(`${endpoint}/${id}`, mapToAPIModel(sale));

const mapToViewModel = sale => {
  return {
    key: sale._id,
    items: sale.items.map(saleItem => {
      return { item: itemsAPI.mapToViewModel(saleItem.item), quantity: saleItem.quantity };
    }),
    total: sale.total,
    status: sale.status,
    lastUpdateOn: sale.lastUpdateOn
  };
};

const mapToAPIModel = sale => {
  return {
    items: sale.items
      .filter(item => item.quantity)
      .map(item => {
        return { item: item.item.key, quantity: item.quantity };
      }),
    total: sale.total,
    status: sale.status,
    lastUpdateOn: Date.now(),
    store: sale.store
  };
};

export default {
  getSale,
  getSales,
  postSale,
  putSale,
  salesStatus,
  statusColor
};
