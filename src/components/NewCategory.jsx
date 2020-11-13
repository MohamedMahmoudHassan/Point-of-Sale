import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import categoriesAPI from "../api/categories";

export default function NewCategory({ data }) {
  const { t } = useTranslation();
  const history = useHistory();

  const onFinish = async values => {
    await categoriesAPI.postCategory(values);
    history.push("/items/categories");
  };

  return (
    <div className="form-container">
      <CategoryForm title={t("items.categoriesList.addCategory")} onFinish={onFinish} />
    </div>
  );
}
