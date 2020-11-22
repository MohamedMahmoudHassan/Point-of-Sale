import React from "react";
import { useTranslation } from "react-i18next";
import CategoryForm from "./CategoryForm";
import categoriesAPI from "../api/categories";

export default function NewCategory() {
  const { t } = useTranslation();

  const onFinish = async values => await categoriesAPI.postCategory(values);

  return (
    <div className="form-container">
      <CategoryForm title={t("items.categoriesList.addCategory")} onFinish={onFinish} />
    </div>
  );
}
