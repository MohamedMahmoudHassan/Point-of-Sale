import React, { useState, useEffect } from "react";
import { message, Table } from "antd";
import { useTranslation } from "react-i18next";
import categoriesAPI from "../api/categories";
import addKey from "../utils/addKey";
import TableButtons from "./TableButtons";

export default function CategoriesList() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRowsKeys, setSelectedRowsKeys] = useState([]);

  useEffect(() => {
    populateCategories();
  });

  const populateCategories = async () => {
    const response = await categoriesAPI.getCategories();
    const data = addKey(response.data);
    setCategories(data);
    setLoading(false);
  };

  const deleteCategories = async () => {
    await categoriesAPI.deleteCategories(selectedRowsKeys);

    const newCategories = categories.filter(
      category => selectedRowsKeys.indexOf(category.key) === -1
    );
    setCategories(newCategories);
    setSelectedRowsKeys([]);
  };

  const handleDelete = async () => {
    message.loading({ content: "Deleting categories...", key: "updatable" });
    await deleteCategories();
    message.success({ content: "Categories deleted successfully!", key: "updatable", duration: 2 });
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
      <TableButtons
        addTitle={t("items.categoriesList.addCategory")}
        newNav="categories/new"
        selectedRowsKeys={selectedRowsKeys}
        handleDelete={handleDelete}
      />
      <Table
        columns={columns}
        dataSource={categories}
        loading={loading}
        rowSelection={{
          type: "checkbox",
          onChange: selectedRowKeys => setSelectedRowsKeys(selectedRowKeys)
        }}
      />
    </div>
  );
}
