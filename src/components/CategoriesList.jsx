import React from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
import AddButton from "./AddButton";

export default function CategoriesList() {
  const { t } = useTranslation();

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

  const data = [
    {
      key: "1",
      name: "Shirts",
      noOfItems: 5
    },
    {
      key: "2",
      name: "Pants",
      noOfItems: 3
    },
    {
      key: "3",
      name: "Caps",
      noOfItems: 10
    }
  ];

  return (
    <div>
      <AddButton title="Category" to="categories/new" />
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
