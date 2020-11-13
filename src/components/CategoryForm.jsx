import React from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "./common/DataForm";

export default function CategoryForm({ ...rest }) {
  const { t } = useTranslation();

  return (
    <DataForm
      {...rest}
      formItems={[
        {
          label: t("items.categoriesList.name"),
          name: "label",
          rules: [{ required: true, message: "Input valid category name" }],
          Component: Input
        }
      ]}
    />
  );
}
