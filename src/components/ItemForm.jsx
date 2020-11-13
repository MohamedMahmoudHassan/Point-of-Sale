import React from "react";
import { Input, InputNumber } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "./common/DataForm";
import SelectWithOptions from "./common/SelectWithOptions";

export default function ItemForm({ ...rest }) {
  const { t } = useTranslation();
  const categories = [{ text: "shirts", value: "shirts" }, { text: "pants", value: "pants" }];

  return (
    <DataForm
      {...rest}
      formItems={[
        {
          label: t("items.itemsList.name"),
          name: "label",
          rules: [{ required: true, message: "Input valid category name" }],
          Component: Input
        },
        {
          label: t("items.itemsList.category"),
          name: "category",
          rules: [{ required: true }],
          Component: () => <SelectWithOptions data={categories} />
        },
        {
          label: t("items.itemsList.price"),
          name: "price",
          rules: [{ required: true, type: "number", min: 0, message: "Input valid price" }],
          Component: () => <InputNumber min={0} />
        },
        {
          label: t("items.itemsList.inStock"),
          name: "inStock",
          rules: [{ required: true, type: "number", min: 0, message: "Input valid price" }],
          Component: () => <InputNumber min={0} />
        }
      ]}
    />
  );
}
