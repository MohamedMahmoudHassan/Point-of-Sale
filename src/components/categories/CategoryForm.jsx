import React from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "../common/DataForm";
import ImageUpload from "../common/ImageUpload";

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
        },
        {
          label: t("items.categoriesList.image.label"),
          name: "image",
          otherProps: {
            valuePropName: "fileList",
            getValueFromEvent: e => e && e.fileList
          },
          Component: props => <ImageUpload {...props} />
        }
      ]}
    />
  );
}
