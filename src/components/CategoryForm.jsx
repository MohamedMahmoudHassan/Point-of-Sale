import React from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "./common/DataForm";
import ImageUpload from "./common/ImageUpload";

export default function CategoryForm({ onFinish, ...rest }) {
  const { t } = useTranslation();

  const handleFinish = async values => {
    if (values.image) values.image = values.image[0].response.imageUrl;
    return await onFinish(values);
  };

  return (
    <DataForm
      {...rest}
      navTo="/items/categories"
      onFinish={handleFinish}
      formItems={[
        {
          label: t("items.categoriesList.name.label"),
          name: "text",
          rules: [{ required: true, message: t("items.categoriesList.name.warning") }],
          Component: Input
        },
        {
          label: "image",
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
