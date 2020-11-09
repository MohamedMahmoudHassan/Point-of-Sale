import React from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";

export default function ItemsList() {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("items.itemsList.name"),
      dataIndex: "name",
      sorter: { compare: (a, b) => a.name < b.name }
    },
    {
      title: t("items.itemsList.category"),
      dataIndex: "category",
      filters: [{ text: "shirts", value: "shirts" }, { text: "pants", value: "pants" }],
      onFilter: (value, record) => record.category.indexOf(value) === 0
    },
    {
      title: t("items.itemsList.price"),
      dataIndex: "price",
      sorter: { compare: (a, b) => a.price < b.price }
    },
    {
      title: t("items.itemsList.available"),
      dataIndex: "available",
      sorter: { compare: (a, b) => a.available < b.available }
    }
  ];

  const data = [
    {
      key: "1",
      name: "Red Basic",
      category: "shirts",
      price: 100,
      available: 20
    },
    {
      key: "2",
      name: "black slim",
      category: "pants",
      price: 200,
      available: 10
    },
    {
      key: "3",
      name: "Green Basic",
      category: "Shirts",
      price: 100,
      available: 22
    }
  ];

  return <Table columns={columns} dataSource={data} />;
}
