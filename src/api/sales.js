import apiClient from "./apiClient";
import api from "../config/api";
import itemsAPI from "./items";

const endpoint = api.apiHost + "/sales";
const salesStatus = [
  { value: "Created", text: "Created" },
  { value: "Completed", text: "Completed" },
  { value: "Cancelled", text: "Cancelled" }
];
const statusColor = { Created: "processing", Completed: "success", Cancelled: "error" };

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
    total: sale.total,
    status: sale.status,
    lastUpdateOn: sale.lastUpdateOn
  };
};

const mapToAPIModel = sale => {
  let total = 0;
  const items = sale.items
    .filter(item => item.quantity)
    .map(item => {
      total += item.item.price * item.quantity;
      return { item: item.item.key, quantity: item.quantity };
    });

  return {
    items,
    total,
    status: sale.status,
    lastUpdateOn: Date.now(),
    store: sale.store
  };
};

export default {
  getSale,
  getSales,
  postSale,
  salesStatus,
  statusColor
};
