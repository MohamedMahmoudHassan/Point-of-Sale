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
    const data = await categoriesAPI.getCategories();
    const categories = data.map(category => {
      return { text: category.name, value: category.name };
    });
    setCategories(categories);
  };

  const columns = [
    {
      title: t("items.itemsList.name"),
      dataIndex: "name",
      sorter: { compare: (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1) }
    },
    {
      title: t("items.itemsList.category"),
      dataIndex: "category",
      filters: categories,
      onFilter: (value, record) => record.category === value
    },
    {
      title: t("items.itemsList.price"),
      dataIndex: "price",
      sorter: { compare: (a, b) => a.price - b.price }
    },
    {
      title: t("items.itemsList.inStock"),
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
      navTo="items"
    />
  );
}
