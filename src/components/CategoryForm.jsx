import React from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "./common/DataForm";

export default function CategoryForm({ ...rest }) {
  const { t } = useTranslation();

  return (
    <DataForm
      {...rest}
      navTo="/items/categories"
      formItems={[
        {
          label: t("items.categoriesList.name.label"),
          name: "text",
          rules: [{ required: true, message: t("items.categoriesList.name.warning") }],
          Component: Input
        }
      ]}
    />
  );
}
