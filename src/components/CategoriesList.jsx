import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
import AddButton from "./AddButton";
import categoriesAPI from "../api/categories";
import addKey from "../utils/addKey";

export default function CategoriesList() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    populateCategories();
  });

  const populateCategories = async () => {
    const response = await categoriesAPI.getCategories();
    const data = addKey(response.data);
    setCategories(data);
  };

  const columns = [
    {
      title: t("items.categoriesList.name"),
      dataIndex: "name",
      sorter: { compare: (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1) }
    },
    {
      title: t("items.categoriesList.noOfItems"),
      dataIndex: "noOfItems",
      sorter: { compare: (a, b) => a.noOfItems - b.noOfItems }
    }
  ];

  return (
    <div>
      <AddButton title={t("items.categoriesList.addCategory")} to="categories/new" />
      <Table columns={columns} dataSource={categories} />
    </div>
  );
}
