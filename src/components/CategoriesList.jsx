import React from "react";
import categoriesAPI from "../api/categories";
import DataTable from "./common/DataTable";
import { useTranslation } from "react-i18next";

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

  return (
    <DataTable
      newButtonTitle={t("items.categoriesList.addCategory")}
      columns={columns}
      getData={categoriesAPI.getCategories}
      deleteData={categoriesAPI.deleteCategories}
      navTo="categories"
    />
  );
}
