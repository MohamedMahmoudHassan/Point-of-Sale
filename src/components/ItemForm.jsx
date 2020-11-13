import React, { useEffect, useState } from "react";
import { Input, InputNumber } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "./common/DataForm";
import SelectWithOptions from "./common/SelectWithOptions";
import categoriesAPI from "../api/categories";

export default function ItemForm({ ...rest }) {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    populateCategories();
  }, []);

  const populateCategories = async () => {
    const data = await categoriesAPI.getCategories();
    const categories = data.map(category => {
      return { text: category.name, value: category.key };
    });
    setCategories(categories);
  };

  return (
    <DataForm
      {...rest}
      formItems={[
        {
          label: t("items.itemsList.name"),
          name: "name",
          rules: [{ required: true, message: "Input valid category name" }],
          Component: Input
        },
        {
          label: t("items.itemsList.category"),
          name: "category",
          rules: [{ required: true }],
          Component: props => <SelectWithOptions data={categories} {...props} />
        },
        {
          label: t("items.itemsList.price"),
          name: "price",
          rules: [{ required: true, type: "number", min: 0, message: "Input valid number" }],
          Component: props => <InputNumber min={0} {...props} />
        },
        {
          label: t("items.itemsList.inStock"),
          name: "inStock",
          rules: [{ required: true, type: "number", min: 0, message: "Input valid number" }],
          Component: props => <InputNumber min={0} {...props} />
        }
      ]}
    />
  );
}
