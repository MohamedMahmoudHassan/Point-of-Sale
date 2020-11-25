import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DataTable from "./common/DataTable";
import itemsAPI from "../api/items";
import categoriesAPI from "../api/categories";
import DataContext from "./context/dataContext";

export default function ItemsList() {
  const { t } = useTranslation();
  const { store } = useContext(DataContext);
  const [columns, setColumns] = useState([
    {
      title: t("items.itemsList.name.label"),
      dataIndex: "text",
      sorter: { compare: (a, b) => (a.text.toLowerCase() < b.text.toLowerCase() ? -1 : 1) }
    },
    {
      title: t("items.itemsList.category.label"),
      dataIndex: "category",
      render: category => category.text,
      onFilter: (value, record) => record.category.key === value
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
  ]);

  useEffect(
    () => {
      populateCategories();
    },
    [store]
  );

  const populateCategories = async () => {
    const categories = await categoriesAPI.getCategories(store, true);
    const newColumns = [];
    columns.map(column => newColumns.push({ ...column }));

    newColumns[1]["filters"] = categories;
    setColumns(newColumns);
  };

  const getData = () => itemsAPI.getItems(store);

  return (
    <DataTable
      newButtonTitle={t("items.itemsList.addItem")}
      columns={columns}
      getData={getData}
      deleteData={itemsAPI.deleteItems}
      navTo="/items"
    />
  );
}
