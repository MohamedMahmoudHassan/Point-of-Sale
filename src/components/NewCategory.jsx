import React from "react";
import CategoryForm from "./CategoryForm";
import { useTranslation } from "react-i18next";
import categoriesAPI from "../api/categories";
import { useHistory } from "react-router-dom";

export default function NewCategory({ data }) {
  const { t } = useTranslation();
  const history = useHistory();

  const onFinish = async values => {
    values.label = { en: values.label };
    await categoriesAPI.postCategory(values);
    history.push("/items/categories");
  };

  return (
    <div className="form-container">
      <h2>{t("items.categoriesList.addCategory")}</h2>
      <CategoryForm onFinish={onFinish} />
    </div>
  );
}
