import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CategoryForm from "./CategoryForm";
import categoriesAPI from "../api/categories";
import DataContext from "./context/dataContext";

export default function NewCategory() {
  const { t } = useTranslation();
  const { store } = useContext(DataContext);

  const getData = () => {
    return {};
  };

  const onFinish = async values => await categoriesAPI.postCategory({ ...values, store });

  return (
    <CategoryForm
      title={t("items.categoriesList.addCategory")}
      onFinish={onFinish}
      getData={getData}
    />
  );
}
