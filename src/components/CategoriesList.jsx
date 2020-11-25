import React, { useContext } from "react";
import categoriesAPI from "../api/categories";
import DataTable from "./common/DataTable";
import { useTranslation } from "react-i18next";
import DataContext from "./context/dataContext";

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
    }
  ];

  return (
    <div>
      {store && (
        <DataTable
          newButtonTitle={t("items.categoriesList.addCategory")}
          columns={columns}
          getData={() => categoriesAPI.getCategories(store)}
          deleteData={categoriesAPI.deleteCategories}
          navTo="/items/categories"
        />
      )}
    </div>
  );
}
