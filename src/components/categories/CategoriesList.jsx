import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import DataContext from "../context/dataContext";
import DataTable from "../common/DataTable";
import imageObjInTable from "../../Utils/imageObjInTable";
import categoriesAPI from "../../api/categories";

export default function CategoriesList() {
  const { t } = useTranslation();
  const { store } = useContext(DataContext);

  const columns = [
    {
      title: t("items.categoriesList.name.label"),
      dataIndex: "text",
      sorter: { compare: (a, b) => (a.text.toLowerCase() < b.text.toLowerCase() ? -1 : 1) }
    },
    {
      title: t("items.categoriesList.noOfItems.label"),
      dataIndex: "noOfItems",
      sorter: { compare: (a, b) => a.noOfItems - b.noOfItems }
    },
    imageObjInTable(110)
  ];

  const getData = async () => await categoriesAPI.getCategories(store, {});

  return (
    <DataTable
      newButtonTitle={t("items.categoriesList.addCategory")}
      columns={columns}
      getData={getData}
      deleteData={categoriesAPI.deleteCategories}
      navTo="/items/categories"
      withSelection={true}
      withButtons={true}
    />
  );
}
