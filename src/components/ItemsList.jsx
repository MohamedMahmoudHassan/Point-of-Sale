import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DataTable from "./common/DataTable";
import itemsAPI from "../api/items";
import categoriesAPI from "../api/categories";

export default function ItemsList() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    populateCategories();
  }, []);

  const populateCategories = async () => {
    const data = await categoriesAPI.getCategories(true);
    setCategories(data);
  };

  const columns = [
    {
      title: t("items.itemsList.name.label"),
      dataIndex: "text",
      sorter: { compare: (a, b) => (a.text.toLowerCase() < b.text.toLowerCase() ? -1 : 1) }
    },
    {
      title: t("items.itemsList.category.label"),
      dataIndex: "category",
      filters: categories,
      onFilter: (value, record) => record.category === value
    },
    {
      title: t("items.itemsList.price.label"),
      dataIndex: "price",
      sorter: { compare: (a, b) => a.price - b.price }
    },
    {
      title: t("items.itemsList.inStock.label"),
      dataIndex: "inStock",
      sorter: { compare: (a, b) => a.inStock - b.inStock }
    }
  ];

  return (
    <DataTable
      newButtonTitle={t("items.itemsList.addItem")}
      columns={columns}
      getData={itemsAPI.getItems}
      deleteData={itemsAPI.deleteItems}
      navTo="/items"
    />
  );
}
