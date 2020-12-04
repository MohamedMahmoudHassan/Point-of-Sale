import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DataContext from "../context/dataContext";
import DataTable from "../common/DataTable";
import imageObjInTable from "../../Utils/imageObjInTable";
import itemsAPI from "../../api/items";
import categoriesAPI from "../../api/categories";

export default function ItemsList() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const { store } = useContext(DataContext);

  useEffect(() => {
    populateCategories();
  }, [store]);

  const populateCategories = async () => {
    const data = await categoriesAPI.getCategories(store, true);
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
      render: category => category.text,
      filters: categories,
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
    },
    imageObjInTable(110)
  ];

  const getData = () => itemsAPI.getItems(store);

  return (
    <DataTable
      newButtonTitle={t("items.itemsList.addItem")}
      columns={columns}
      getData={getData}
      deleteData={itemsAPI.deleteItems}
      navTo="/items"
      withSelection={true}
      withButtons={true}
    />
  );
}
