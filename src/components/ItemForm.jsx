import React, { useContext, useEffect, useState } from "react";
import { Input, InputNumber } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "./common/DataForm";
import SelectWithOptions from "./common/SelectWithOptions";
import categoriesAPI from "../api/categories";
import DataContext from "./context/dataContext";

export default function ItemForm({ ...rest }) {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const { store } = useContext(DataContext);

  useEffect(
    () => {
      if (store) populateCategories();
    },
    [store]
  );

  const populateCategories = async () => {
    const data = await categoriesAPI.getCategories(store, true);
    setCategories(data);
  };

  return (
    <div>
      {store && (
        <DataForm
          {...rest}
          navTo="/items"
          formItems={[
            {
              label: t("items.itemsList.name.label"),
              name: "text",
              rules: [{ required: true, message: t("items.itemsList.name.warning") }],
              Component: Input
            },
            {
              label: t("items.itemsList.category.label"),
              name: "category",
              Component: props => (
                <SelectWithOptions defaultValue="No Category" data={categories} {...props} />
              )
            },
            {
              label: t("items.itemsList.price.label"),
              name: "price",
              rules: [
                {
                  required: true,
                  type: "number",
                  min: 0,
                  message: t("items.itemsList.price.warning")
                }
              ],
              Component: props => <InputNumber min={0} {...props} />
            },
            {
              label: t("items.itemsList.inStock.label"),
              name: "inStock",
              rules: [
                {
                  required: true,
                  type: "number",
                  min: 0,
                  message: t("items.itemsList.inStock.warning")
                }
              ],
              Component: props => <InputNumber min={0} {...props} />
            }
          ]}
        />
      )}
    </div>
  );
}
